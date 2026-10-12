import type { Metadata } from 'next';
import { Camera, ClipboardCheck, ScanEye } from 'lucide-react';
import SiteHeader from '../../site-header';
import { ContactSection, ProjectsSection, SiteFooter } from '../../shared-home-sections';
import { InspectionSection, OutlineAction, Typography } from '../../inspection-ui';
import { publicAsset } from '@/lib/public-asset';
import '../../redesign.css';
import '../../reference-page.css';
import '../../closing-sections.css';
import './service-page.css';

/* oxlint-disable next/no-img-element -- These editorial images are art-directed with fixed crops and role-based labels. */

export const metadata: Metadata = {
  title: 'Обследование зданий и сооружений — РЦСИ «Артель»',
  description: 'Визуальное и инструментальное обследование зданий и сооружений. Оценка технического состояния, дефектов и рекомендации по дальнейшей эксплуатации.',
};

const contents = [
  ['short', 'Краткое описание обследования'],
  ['visual', 'Визуальное обследование'],
  ['instrumental', 'Инструментальное обследование'],
  ['goals', 'Задачи обследования здания'],
  ['result', 'Техническое заключение и рекомендации'],
  ['projects', 'Примеры выполненных объектов'],
  ['advantages', 'Преимущества компании'],
  ['price', 'Стоимость'],
  ['contact', 'Контакты и адрес'],
] as const;

const goals = [
  'Выявить дефекты, разрушения, износ и деформации конструкций.',
  'Оценить состояние инженерных конструкций и систем.',
  'Определить необходимость и срочность ремонта.',
  'Понять, можно ли изменить назначение здания.',
  'Оценить состояние незавершённого строительства.',
  'Проверить соответствие объекта проектной документации и требованиям.',
];

export default function InspectionServicePage() {
  return <div className="artel-home inspection-page">
    <div className="home-hero-shell inspection-hero" id="home">
      <SiteHeader homePath={publicAsset('/')} />
      <div className="inspection-hero-image"><img src={publicAsset('/images/hero-inspection-generated.png')} alt="Специалист Артели обследует бетонную конструкцию здания" fetchPriority="high"/></div>
      <div className="inspection-hero-content">
        <Typography as="h1" variant="h1">Обследование зданий и сооружений</Typography>
        <Typography as="p" variant="p2" className="inspection-hero-lead">Оценим техническое состояние конструкций, зафиксируем дефекты и подготовим рекомендации для безопасной эксплуатации, ремонта или реконструкции.</Typography>
        <OutlineAction href="#contact" className="inspection-hero-cta">Обсудить задачу</OutlineAction>
      </div>
    </div>

    <main>
      <InspectionSection className="inspection-overview" id="short">
        <div className="inspection-overview-copy">
          <Typography as="h2" variant="h2">Краткое описание обследования</Typography>
          <Typography as="p" variant="p2">Техническое обследование — это комплекс работ по оценке состояния здания или сооружения. Оно помогает разобраться, что происходит с конструкциями, насколько безопасна эксплуатация объекта и какие действия нужны дальше.</Typography>
          <Typography as="p" variant="p2">Обследование проводят как для эксплуатируемых зданий, так и для объектов в процессе строительства. Состав работ зависит от задачи и состояния объекта: сначала специалист оценивает его визуально, а при необходимости выполняет детальное инструментальное исследование.</Typography>
          <OutlineAction href="#visual">Как проходит обследование</OutlineAction>
        </div>
        <aside className="inspection-toc" aria-label="Содержание страницы">
          <Typography as="p" variant="p4">Содержание страницы</Typography>
          <nav>{contents.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
        </aside>
      </InspectionSection>

      <InspectionSection className="inspection-method inspection-method-visual" id="visual">
        <div className="inspection-method-copy">
          <Typography as="h2" variant="h2">Первый этап обследования — визуальный осмотр конструкций</Typography>
          <Typography as="p" variant="p2">Специалист осматривает доступные конструкции и фиксирует видимые признаки повреждений: трещины, деформации, следы протечек, коррозии и другие изменения.</Typography>
          <Typography as="p" variant="p2">Такой осмотр даёт предварительную оценку и помогает определить, нужно ли детальное обследование и какие участки требуют особого внимания.</Typography>
        </div>
        <figure><img src={publicAsset('/images/design-reference/ref-01.webp')} alt="Специалист осматривает строящееся здание" loading="lazy"/></figure>
        <ul className="inspection-checks">
          <li><ScanEye size={24} strokeWidth={1.6}/><Typography as="p" variant="p3">Осмотр конструкций и помещений</Typography></li>
          <li><Camera size={24} strokeWidth={1.6}/><Typography as="p" variant="p3">Фотофиксация обнаруженных дефектов</Typography></li>
          <li><ClipboardCheck size={24} strokeWidth={1.6}/><Typography as="p" variant="p3">Уточнение задачи и программы работ</Typography></li>
        </ul>
      </InspectionSection>

      <InspectionSection className="inspection-method inspection-method-instrumental" id="instrumental">
        <figure><img src={publicAsset('/images/about-instrument.jpg')} alt="Приборы для инструментального обследования конструкций" loading="lazy"/></figure>
        <div className="inspection-method-copy">
          <Typography as="h2" variant="h2">Инструментальные измерения уточняют состояние конструкций</Typography>
          <Typography as="p" variant="p2">Если визуального осмотра недостаточно, специалисты проводят детальное обследование. Необходимые измерения и методы контроля выбирают под конкретный объект и поставленные вопросы.</Typography>
          <Typography as="p" variant="p2">Инструментальные данные позволяют уточнить состояние конструкций и проверить предположения, возникшие во время осмотра. Объём исследования согласуется до начала работ.</Typography>
          <OutlineAction href="https://arteltmn.ru/tehnicheskaja-baza/" external>Оборудование центра</OutlineAction>
        </div>
      </InspectionSection>

      <InspectionSection className="inspection-goals" id="goals">
        <div className="inspection-section-heading"><Typography as="h2" variant="h2">Какие задачи решает обследование здания</Typography></div>
        <div className="inspection-goal-list">{goals.map((goal, index) => <article key={goal}><Typography as="span" variant="p1">{String(index + 1).padStart(2, '0')}</Typography><Typography as="p" variant="p2">{goal}</Typography></article>)}</div>
      </InspectionSection>

      <InspectionSection className="inspection-result" id="result">
        <div className="inspection-result-image"><img src={publicAsset('/images/work-inspection.jpg')} alt="Инженер изучает конструкции здания" loading="lazy"/></div>
        <div className="inspection-result-copy"><Typography as="h2" variant="h2">Техническое заключение с оценкой состояния и рекомендациями</Typography><Typography as="p" variant="p2">По итогам заказчик получает техническое заключение с информацией об объекте и выводами специалистов.</Typography><ul><li>описание исследованных конструкций и выявленных дефектов;</li><li>фотографии и материалы обследования;</li><li>оценка технического состояния в рамках поставленной задачи;</li><li>выводы и рекомендации по дальнейшим действиям.</li></ul><OutlineAction href="#contact">Обсудить состав заключения</OutlineAction></div>
      </InspectionSection>

      <ProjectsSection />

      <InspectionSection className="inspection-advantages" id="advantages">
        <div><Typography as="h2" variant="h2">Преимущества работы с центром «Артель»</Typography></div>
        <div className="inspection-advantage-copy"><Typography as="p" variant="p2">РЦСИ «Артель» проводит обследования зданий и сооружений в Тюмени и регионах. Специалисты опираются на поставленную задачу, фактическое состояние объекта и результаты осмотра и измерений.</Typography><ul><li><Typography as="strong" variant="p3">Практический опыт</Typography><Typography as="span" variant="p3">В портфолио центра — жилые, общественные и производственные объекты.</Typography></li><li><Typography as="strong" variant="p3">Современные приборы</Typography><Typography as="span" variant="p3">Оборудование помогает получать данные для оценки конструкций.</Typography></li><li><Typography as="strong" variant="p3">Понятный результат</Typography><Typography as="span" variant="p3">Выводы и рекомендации привязаны к вопросам заказчика.</Typography></li></ul></div>
      </InspectionSection>

      <InspectionSection className="inspection-price" id="price">
        <div><Typography as="h2" variant="h2">Стоимость обследования зависит от объекта и состава работ</Typography></div>
        <div><Typography as="p" variant="p2">На цену влияют назначение и размеры здания, доступность конструкций, необходимая глубина исследования и состав итоговых материалов. Чтобы рассчитать стоимость, расскажите нам об объекте — специалист уточнит исходные данные и предложит программу работ.</Typography><OutlineAction href="#contact" className="inspection-cta-dark">Запросить расчёт</OutlineAction></div>
      </InspectionSection>

      <ContactSection />
    </main>

    <SiteFooter homePath={publicAsset('/')} />
  </div>;
}
