'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { publicAsset } from '@/lib/public-asset';

const documents = [
  { image: 'license-sro.png', title: 'Свидетельство о допуске к работам', alt: 'Свидетельство о допуске Артели к строительным работам' },
  { image: 'license-sro-details.png', title: 'Перечень работ', alt: 'Перечень работ в свидетельстве о допуске' },
  { image: 'license-sro-appendix.png', title: 'Приложение к свидетельству', alt: 'Приложение к свидетельству Артели' },
  { image: 'license-quality.png', title: 'Сертификат соответствия', alt: 'Сертификат соответствия системы менеджмента качества' },
];

export default function LicensesSlider() {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const firstCard = track.current?.querySelector<HTMLElement>('.license-document');
    if (!track.current || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track.current).columnGap) || 20;
    track.current.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
  }

  return <div className="licenses-gallery">
    <div className="licenses-controls">
      <button type="button" onClick={() => move(-1)} aria-label="Предыдущий документ"><ArrowLeft size={18}/></button>
      <button type="button" onClick={() => move(1)} aria-label="Следующий документ"><ArrowRight size={18}/></button>
    </div>
    <div className="licenses-track" ref={track}>
      {documents.map((document) => <figure className="license-document" key={document.image}>
        <img src={publicAsset(`/images/design-reference/${document.image}`)} alt={document.alt} loading="lazy"/>
        <figcaption>{document.title}</figcaption>
      </figure>)}
    </div>
  </div>;
}
