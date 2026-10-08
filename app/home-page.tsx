import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SiteHeader from './site-header';
import HomeSlider from './home-slider';
import { publicAsset } from '@/lib/public-asset';
import './redesign.css';
import './reference-page.css';

const services = [
  { title: 'Обследование зданий и сооружений', image: 'ref-01.webp', href: 'https://arteltmn.ru/2019/07/28/obsledovanie-tehnicheskogo-sostojanija-zdanij-i-sooruzhenij/' },
  { title: 'Строительно-техническая судебная экспертиза', image: 'ref-02.webp', href: 'https://arteltmn.ru/2019/07/31/sudebnaja-stroitelno-tehnicheskaja-jekspertiza/' },
  { title: 'Проектирование зданий и сооружений', image: 'ref-04.webp', href: '#projects' },
  { title: 'Геодезические работы', image: 'ref-05.webp', href: '#projects' },
  { title: 'Сопровождение строительства', image: 'ref-06.webp', href: '#projects' },
];

const situations = [
  { title: 'На здании появились трещины или деформации', image: 'ref-09.webp' },
  { title: 'Возник спор о качестве строительных работ', image: 'ref-10.webp' },
  { title: 'Планируется строительство или реконструкция', image: 'ref-11.webp' },
  { title: 'Строительство уже идёт и требует контроля', image: 'ref-12.webp' },
];

const reviews = ['ref-14.webp', 'ref-15.webp', 'ref-16.webp', 'ref-17.webp'];
const news = [
  { title: 'РЦСИ АРТЕЛЬ 15 ЛЕТ', note: 'ДЕНЬ РОЖДЕНИЯ КОМПАНИИ', image: 'ref-18.webp' },
  { title: 'ОБУЧЕНИЕ ПК ЛИРА-САПР', note: 'РАСЧЁТ СТРОИТЕЛЬНЫХ КОНСТРУКЦИЙ НА УСТОЙЧИВОСТЬ К ПРОГРЕССИРУЮЩЕМУ ОБРУШЕНИЮ', image: 'ref-19.webp' },
  { title: 'ТАХЕОМЕТР TRIMBLE SX10', note: 'ПОЗВОЛЯЕТ СОЗДАВАТЬ ДЕТАЛИЗИРОВАННЫЕ 3D-МОДЕЛИ ОБЪЕКТОВ', image: 'ref-20.webp' },
];

export default function HomePage() {
  return <div className="artel-home">
    <div className="home-hero-shell" id="home"><SiteHeader/><HomeSlider/></div>
    <main>
      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-grid">
          <header className="services-intro">
            <h2 id="services-title">Чем можем помочь</h2>
            <p>Пять направлений работы для зданий, сооружений и строительных проектов.</p>
          </header>
          {services.map((service, index) => <a className={`service-card service-card-${index + 1}`} href={service.href} key={service.title}>
            <div className="service-card-copy"><h3>{service.title}</h3><span className="outline-action">Подробнее <i><ArrowRight size={18}/></i></span></div>
            <img src={publicAsset(`/images/design-reference/${service.image}`)} alt="" loading="lazy"/>
          </a>)}
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading"><h2 id="projects-title">Реализованные проекты</h2><a className="projects-more" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><span>Больше готовых проектов,<br/>разделённых по направлениям</span><i><ArrowRight size={18}/></i></a></div>
        <div className="project-cases">
          <a className="project-case" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><img src={publicAsset('/images/design-reference/ref-07.webp')} alt="БЦ «Нобель-Парк»" loading="lazy"/><span className="project-label"><span>БЦ «НОБЕЛЬ-ПАРК»</span><small>СТРОИТЕЛЬНО-ТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА</small></span></a>
          <a className="project-case" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><img src={publicAsset('/images/design-reference/ref-08.webp')} alt="ТЦ «Сити Молл»" loading="lazy"/><span className="project-label"><span>ТЦ «СИТИ МОЛЛ»</span><small>ОБСЛЕДОВАНИЕ КОНСТРУКЦИЙ</small></span></a>
        </div>
      </section>

      <section className="situations-section" id="when" aria-labelledby="situations-title">
        <h2 id="situations-title">Когда стоит обратиться</h2>
        <div className="situation-grid">{situations.map((item) => <article className="situation-card" key={item.title}><div className="situation-copy"><h3>{item.title}</h3><a className="outline-action" href="#services">Подробнее <i><ArrowRight size={18}/></i></a></div><img src={publicAsset(`/images/design-reference/${item.image}`)} alt="" loading="lazy"/></article>)}</div>
      </section>

      <section className="about-section" id="about" aria-label="О компании и показатели">
        <div className="about-photo" role="img" aria-label="Строительная площадка с возводимым зданием" style={{ backgroundImage: `url('${publicAsset('/images/design-reference/ref-13.webp')}')` }}/>
        <div className="about-copy"><h2>Артель — региональный центр строительных исследований. Работаем с 2010 года: проводим экспертизы и обследования, выполняем инженерные изыскания и проектирование, сопровождаем строительство. Работаем с судами, организациями и частными заказчиками, а исследования проводим по научно обоснованным методикам с применением специализированного оборудования.</h2><a className="outline-action" href="https://arteltmn.ru/o-nas/" target="_blank" rel="noreferrer">Подробнее <i><ArrowRight size={18}/></i></a></div>
        <div className="metrics-row"><div><strong>2010</strong><span>год основания</span></div><div><strong>1700</strong><span>проведённых экспертиз</span></div><div><strong>139</strong><span>завершённых проектов</span></div></div>
      </section>

      <section className="reviews-section" id="reviews" aria-label="Отзывы клиентов и благодарственные письма">
        <div className="reviews-heading"><p>ОТЗЫВЫ КЛИЕНТОВ И<br/>БЛАГОДАРСТВЕННЫЕ ПИСЬМА<br/>О НАШЕЙ РАБОТЕ</p><div className="reviews-arrows"><button type="button" aria-label="Предыдущий отзыв"><ArrowRight size={17}/></button><button type="button" aria-label="Следующий отзыв"><ArrowRight size={17}/></button></div></div>
        <div className="review-documents">{reviews.map((image, index) => <div className="review-document" key={image}><img src={publicAsset(`/images/design-reference/${image}`)} alt={`Благодарственное письмо или отзыв ${index + 1}`} loading="lazy"/></div>)}</div>
      </section>

      <section className="news-section" id="news" aria-labelledby="news-title">
        <div className="news-heading"><h2 id="news-title">События и новости компании</h2><a className="projects-more" href="https://arteltmn.ru/novosti/" target="_blank" rel="noreferrer"><span>Больше готовых проектов,<br/>разделённых по направлениям</span><i><ArrowRight size={18}/></i></a></div>
        <div className="news-grid">{news.map((item) => <a className="news-card" href="https://arteltmn.ru/novosti/" key={item.title} target="_blank" rel="noreferrer"><img src={publicAsset(`/images/design-reference/${item.image}`)} alt="" loading="lazy"/><span className="news-badges"><span>{item.title}</span><small>{item.note}</small></span></a>)}</div>
      </section>
    </main>
  </div>;
}
