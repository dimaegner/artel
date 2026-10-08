'use client';

import { useRef } from 'react';
import ArrowIcon from './arrow-icon';
import { publicAsset } from '@/lib/public-asset';

const documents = [
  { image: 'license-sro.png', title: 'Свидетельство о допуске к работам', alt: 'Свидетельство о допуске Артели к строительным работам' },
  { image: 'license-sro-details.png', title: 'Перечень работ', alt: 'Перечень работ в свидетельстве о допуске' },
  { image: 'license-sro-appendix.png', title: 'Приложение к свидетельству', alt: 'Приложение к свидетельству Артели' },
  { image: 'license-quality.png', title: 'Сертификат соответствия', alt: 'Сертификат соответствия системы менеджмента качества' },
];

export default function LicensesSlider({ title }: { title: string }) {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const firstCard = track.current?.querySelector<HTMLElement>('.license-document');
    if (!track.current || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track.current).columnGap) || 20;
    track.current.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
  }

  return <>
    <div className="licenses-heading">
      <p id="licenses-title">{title}</p>
      <div className="licenses-controls">
      <button type="button" onClick={() => move(-1)} aria-label="Предыдущий документ"><ArrowIcon direction="left"/></button>
      <button type="button" onClick={() => move(1)} aria-label="Следующий документ"><ArrowIcon/></button>
      </div>
    </div>
    <div className="licenses-gallery"><div className="licenses-track" ref={track}>
      {documents.map((document) => <figure className="license-document" key={document.image}>
        <img src={publicAsset(`/images/design-reference/${document.image}`)} alt={document.alt} loading="lazy"/>
        <figcaption>{document.title}</figcaption>
      </figure>)}
    </div></div>
  </>;
}
