'use client';
/* oxlint-disable next/no-img-element -- Full-bleed and thumbnail images use the same local source files. */

import { useCallback, useEffect, useRef, useState } from 'react';
import ArrowIcon from './arrow-icon';
import { publicAsset } from '@/lib/public-asset';

const slides = [
  {
    preview: 'С чем может помочь Артель',
    title: 'Обследование, экспертиза и проектирование зданий',
    image: publicAsset('/images/design-reference/ref-00.webp'),
    imageAlt: 'Специалист обследует бетонную конструкцию измерительным прибором',
    thumbnail: publicAsset('/images/hero-thumb-01.webp'),
    position: 'center',
  },
  {
    preview: 'Обследование зданий',
    title: 'Проверяем качество и безопасность зданий',
    image: publicAsset('/images/hero-slide-02.webp'),
    imageAlt: 'Фасад торгового центра вечером',
    thumbnail: publicAsset('/images/hero-thumb-02.webp'),
    position: 'center',
  },
  {
    preview: 'Проектирование зданий',
    title: 'Готовим проект и точные данные об участке',
    image: publicAsset('/images/hero-slide-03.webp'),
    imageAlt: 'Современные жилые дома с индивидуальными проектами',
    thumbnail: publicAsset('/images/hero-thumb-03.webp'),
    position: 'center',
  },
  {
    preview: 'Сопровождение строительства',
    title: 'Помогаем вести строительство под контролем',
    image: publicAsset('/images/hero-slide-04.webp'),
    imageAlt: 'Строительная площадка, чертежи и геодезический прибор',
    thumbnail: publicAsset('/images/hero-thumb-04.webp'),
    position: 'center',
  },
];

const SLIDE_DURATION_MS = 7000;

export default function HomeSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasOverflowRight, setHasOverflowRight] = useState(false);
  const elapsed = useRef(0);
  const lastFrame = useRef<number | null>(null);
  const rail = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    elapsed.current = 0;
    lastFrame.current = null;
    setProgress(0);
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    let frame: number;
    lastFrame.current = null;
    const resetClock = () => { lastFrame.current = null; };
    document.addEventListener('visibilitychange', resetClock);
    const tick = (time: number) => {
      if (lastFrame.current !== null && !paused && !document.hidden) {
        elapsed.current = Math.min(SLIDE_DURATION_MS, elapsed.current + time - lastFrame.current);
        setProgress(elapsed.current / SLIDE_DURATION_MS);
        if (elapsed.current >= SLIDE_DURATION_MS) {
          goTo(active + 1);
          return;
        }
      }
      lastFrame.current = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); document.removeEventListener('visibilitychange', resetClock); };
  }, [active, paused, goTo]);

  useEffect(() => {
    const container = rail.current;
    const selected = container?.querySelector<HTMLButtonElement>(`[data-slide="${active}"]`);
    if (!container || !selected) return;

    const current = container.scrollLeft;
    const selectedLeft = selected.offsetLeft;
    const selectedRight = selectedLeft + selected.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let target = current;

    if (selectedLeft < current) {
      target = selectedLeft;
    } else if (selectedRight > current + container.clientWidth) {
      const firstTab = container.querySelector<HTMLButtonElement>('.showreel-tab');
      const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
      const step = (firstTab?.offsetWidth || selected.offsetWidth) + gap;
      while (selectedRight > target + container.clientWidth && target < maxScroll) {
        target = Math.min(target + step, maxScroll);
      }
    }

    if (Math.abs(target - current) > 1) container.scrollTo({ left: target, behavior: 'smooth' });
  }, [active]);

  useEffect(() => {
    const container = rail.current;
    if (!container) return;
    const updateOverflow = () => setHasOverflowRight(container.scrollWidth > container.clientWidth + container.scrollLeft + 1);
    updateOverflow();
    container.addEventListener('scroll', updateOverflow, { passive: true });
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(container);
    return () => {
      container.removeEventListener('scroll', updateOverflow);
      observer.disconnect();
    };
  }, []);

  return <section className="home-showreel" aria-roledescription="слайдер" aria-label="Направления работы Артели">
    {slides.map((slide, index) => <article id={`showreel-slide-${index}`} className={`showreel-slide ${index === active ? 'is-active' : ''}`} key={slide.preview} aria-hidden={index !== active}>
      <img className="showreel-photo" src={slide.image} alt={index === active ? slide.imageAlt : ''} style={{ objectPosition: slide.position }} fetchPriority={index === 0 ? 'high' : undefined}/>
      <div className="showreel-copy">
        {index === 0 ? <h1>Обследование, экспертиза<br/>и проектирование зданий</h1> : <h2>{slide.title}</h2>}
      </div>
    </article>)}
    <div className="showreel-actions" aria-label="Связаться с Артелью">
      <a className="showreel-action-primary" href="#contact">Написать нам</a>
      <a className="showreel-action-secondary" href="https://max.ru/" target="_blank" rel="noreferrer">Написать в MAX<img src={publicAsset('/images/max-logo.svg')} alt="" aria-hidden="true"/></a>
    </div>
    <div className="showreel-controls" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
      <div className={`showreel-pagination ${hasOverflowRight ? 'has-overflow-right' : ''}`} ref={rail} role="tablist" aria-label="Слайды">
        {slides.map((slide, index) => <button key={slide.preview} data-slide={index} className={`showreel-tab ${index === active ? 'is-active' : ''}`} type="button" role="tab" aria-selected={index === active} aria-controls={`showreel-slide-${index}`} aria-label={`Слайд ${index + 1}: ${slide.preview}`} onClick={() => goTo(index)}>
          <span className="showreel-progress" aria-hidden="true"><span style={{ width: `${index === active ? progress * 100 : 0}%` }}/></span>
          <span className="showreel-tab-content"><img className="showreel-tab-thumb" src={slide.thumbnail} alt="" aria-hidden="true" loading="lazy"/><span className="showreel-tab-copy"><span className="showreel-tab-number">{String(index + 1).padStart(2, '0')}</span><span className="showreel-tab-name">{slide.preview}</span></span></span>
        </button>)}
      </div>
      <div className="showreel-arrows"><button type="button" aria-label="Предыдущий слайд" onClick={() => goTo(active - 1)}><ArrowIcon direction="left"/></button><button type="button" aria-label="Следующий слайд" onClick={() => goTo(active + 1)}><ArrowIcon/></button></div>
    </div>
  </section>;
}
