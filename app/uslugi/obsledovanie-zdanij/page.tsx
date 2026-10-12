import type { Metadata } from 'next';
import { ArrowDownRight, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '../../site-header';
import { ContactSection, ProjectsSection, SiteFooter } from '../../shared-home-sections';
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
  ['goals', 'Цели обследования'],
  ['result', 'Результат обследования и заключение'],
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
        <p className="inspection-eyebrow">Услуги / Обследование зданий</p>
        <h1>Обследование зданий и сооружений</h1>
        <p className="inspection-hero-lead">Оценим техническое состояние конструкций, зафиксируем дефекты и подготовим рекомендации для безопасной эксплуатации, ремонта или реконструкции.</p>
        <a className="inspection-hero-cta" href="#contact"><span>Обсудить задачу</span><i><ArrowDownRight size={19}/></i></a>
      </div>
      <a className="inspection-scroll" href="#short"><span>Листайте ниже</span><ArrowRight size={16}/></a>
      <div className="inspection-hero-index"><span>01</span><span>Техническое обследование</span></div>
    </div>

    <main>
      <section className="inspection-overview" id="short">
        <aside className="inspection-toc" aria-label="Содержание страницы">
          <p>На этой странице</p>
          <nav>{contents.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
        </aside>
        <div className="inspection-overview-copy">
          <p className="inspection-kicker">Краткое описание обследования</p>
          <h2>Понимать состояние здания — значит принимать решения на фактах.</h2>
          <p>Техническое обследование — это комплекс работ по оценке состояния здания или сооружения. Оно помогает разобраться, что происходит с конструкциями, насколько безопасна эксплуатация объекта и какие действия нужны дальше.</p>
          <p>Обследование проводят как для эксплуатируемых зданий, так и для объектов в процессе строительства. Состав работ зависит от задачи и состояния объекта: сначала специалист оценивает его визуально, а при необходимости выполняет детальное инструментальное исследование.</p>
          <a className="inspection-text-link" href="#visual">Как проходит обследование <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="inspection-method inspection-method-visual" id="visual">
        <div className="inspection-method-copy">
          <p className="inspection-kicker">01 / Первый этап</p>
          <h2>Визуальное обследование</h2>
          <p>Специалист осматривает доступные конструкции и фиксирует видимые признаки повреждений: трещины, деформации, следы протечек, коррозии и другие изменения.</p>
          <p>Такой осмотр даёт предварительную оценку и помогает определить, нужно ли детальное обследование и какие участки требуют особого внимания.</p>
          <ul className="inspection-checks"><li><Check size={16}/>Осмотр конструкций и помещений</li><li><Check size={16}/>Фотофиксация обнаруженных дефектов</li><li><Check size={16}/>Уточнение задачи и программы работ</li></ul>
        </div>
        <figure><img src={publicAsset('/images/design-reference/ref-01.webp')} alt="Специалист осматривает строящееся здание" loading="lazy"/><figcaption>Сначала — осмотр объекта и оценка видимых признаков</figcaption></figure>
      </section>

      <section className="inspection-method inspection-method-instrumental" id="instrumental">
        <figure><img src={publicAsset('/images/about-instrument.jpg')} alt="Приборы для инструментального обследования конструкций" loading="lazy"/><figcaption>Инструментальные измерения дополняют визуальный осмотр</figcaption></figure>
        <div className="inspection-method-copy">
          <p className="inspection-kicker">02 / Детальное исследование</p>
          <h2>Инструментальное обследование</h2>
          <p>Если визуального осмотра недостаточно, специалисты проводят детальное обследование. Необходимые измерения и методы контроля выбирают под конкретный объект и поставленные вопросы.</p>
          <p>Инструментальные данные позволяют уточнить состояние конструкций и проверить предположения, возникшие во время осмотра. Объём исследования согласуется до начала работ.</p>
          <a className="inspection-text-link" href="https://arteltmn.ru/tehnicheskaja-baza/" target="_blank" rel="noreferrer">Оборудование центра <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="inspection-goals" id="goals">
        <div className="inspection-section-heading"><p className="inspection-kicker">Задачи исследования</p><h2>Что помогает выяснить обследование</h2></div>
        <div className="inspection-goal-list">{goals.map((goal, index) => <article key={goal}><span>{String(index + 1).padStart(2, '0')}</span><p>{goal}</p><ArrowDownRight size={18}/></article>)}</div>
      </section>

      <section className="inspection-result" id="result">
        <div className="inspection-result-image"><img src={publicAsset('/images/work-inspection.jpg')} alt="Инженер изучает конструкции здания" loading="lazy"/></div>
        <div className="inspection-result-copy"><p className="inspection-kicker">Итог работ</p><h2>Результат обследования и заключение</h2><p>По итогам заказчик получает техническое заключение с информацией об объекте и выводами специалистов.</p><ul><li>описание исследованных конструкций и выявленных дефектов;</li><li>фотографии и материалы обследования;</li><li>оценка технического состояния в рамках поставленной задачи;</li><li>выводы и рекомендации по дальнейшим действиям.</li></ul><a className="inspection-text-link" href="#contact">Обсудить состав заключения <ArrowRight size={17}/></a></div>
      </section>

      <ProjectsSection />

      <section className="inspection-advantages" id="advantages">
        <div><p className="inspection-kicker">Почему Артель</p><h2>Инженерный подход и ответственность за выводы</h2></div>
        <div className="inspection-advantage-copy"><p>РЦСИ «Артель» проводит обследования зданий и сооружений в Тюмени и регионах. Специалисты опираются на поставленную задачу, фактическое состояние объекта и результаты осмотра и измерений.</p><ul><li><strong>Практический опыт</strong><span>В портфолио центра — жилые, общественные и производственные объекты.</span></li><li><strong>Современные приборы</strong><span>Оборудование помогает получать данные для оценки конструкций.</span></li><li><strong>Понятный результат</strong><span>Выводы и рекомендации привязаны к вопросам заказчика.</span></li></ul></div>
      </section>

      <section className="inspection-price" id="price">
        <div><p className="inspection-kicker">Расчёт стоимости</p><h2>Стоимость зависит от объекта и задачи</h2></div>
        <div><p>На цену влияют назначение и размеры здания, доступность конструкций, необходимая глубина исследования и состав итоговых материалов. Чтобы рассчитать стоимость, расскажите нам об объекте — специалист уточнит исходные данные и предложит программу работ.</p><a className="inspection-hero-cta inspection-cta-dark" href="#contact"><span>Запросить расчёт</span><i><ArrowDownRight size={19}/></i></a></div>
      </section>

      <ContactSection />
    </main>

    <SiteFooter homePath={publicAsset('/')} />
  </div>;
}
