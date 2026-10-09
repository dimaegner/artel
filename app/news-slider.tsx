'use client';
/* oxlint-disable next/no-img-element -- These local editorial images use authored crop behavior. */

import { useRef } from 'react';
import ArrowIcon from './arrow-icon';
import { publicAsset } from '@/lib/public-asset';

type NewsItem = { title: string; note: string; image: string };

export default function NewsSlider({ items }: { items: NewsItem[] }) {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const firstCard = track.current?.querySelector<HTMLElement>('.news-card');
    if (!track.current || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track.current).columnGap) || 20;
    track.current.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
  }

  return <>
    <div className="news-heading">
      <h2 id="news-title">События и новости</h2>
      <div className="news-more">
        <span>Люди, технологии,<br/>достижения и другие<br/>новости компании</span>
        <div className="news-controls">
          <button type="button" aria-label="Предыдущая новость" onClick={() => move(-1)}><ArrowIcon direction="left"/></button>
          <button type="button" aria-label="Следующая новость" onClick={() => move(1)}><ArrowIcon/></button>
        </div>
      </div>
    </div>
    <div className="news-grid" ref={track}>
      {items.map((item) => <a className="news-card" href="https://arteltmn.ru/novosti/" key={item.title} target="_blank" rel="noreferrer" aria-label={`${item.title}: ${item.note}`}>
        <img src={publicAsset(`/images/design-reference/${item.image}`)} alt="" loading="lazy"/>
        <span className="news-badges"><span>{item.title}</span><small>{item.note}</small></span>
      </a>)}
    </div>
  </>;
}
