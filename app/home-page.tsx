import { ArrowRight, ExternalLink } from 'lucide-react';
import SiteHeader from './site-header';
import HomeSlider from './home-slider';
import ContactForm from './contact-form';
import LicensesSlider from './licenses-slider';
import { publicAsset } from '@/lib/public-asset';
import './redesign.css';
import './reference-page.css';
import './closing-sections.css';

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

      <section className="licenses-section" id="licenses" aria-labelledby="licenses-title">
        <h2 id="licenses-title">Лицензии, свидетельства и сертификаты нашей компании</h2>
        <LicensesSlider/>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Частые вопросы</h2>
        <div className="faq-list">
          <details>
            <summary>Когда заказывают обследование зданий?</summary>
            <p>Обследование заказывают, если появились трещины или деформации, перед ремонтом или реконструкцией, при покупке объекта, споре о качестве работ или необходимости оценить безопасность дальнейшей эксплуатации.</p>
          </details>
          <details open>
            <summary>Что входит в результат обследования?</summary>
            <p>По итогам обследования вы получаете техническое заключение о состоянии здания или сооружения. Документ включает результаты визуального и инструментального обследования, выявленные дефекты и повреждения, оценку технического состояния конструкций, фотографии, результаты измерений и расчётов при их проведении. Также заключение содержит выводы специалистов и рекомендации по устранению выявленных недостатков, ремонту, усилению конструкций или дальнейшей безопасной эксплуатации объекта — в зависимости от задач обследования.</p>
          </details>
          <details>
            <summary>Можно ли проверить объём и стоимость строительных работ?</summary>
            <p>Да. Строительно-техническое исследование помогает сопоставить фактически выполненные работы с проектом и сметой, оценить качество и зафиксировать выявленные расхождения.</p>
          </details>
          <details>
            <summary>Как узнать стоимость работ?</summary>
            <p>Стоимость зависит от объекта, состава работ и задачи исследования. Опишите объект и вопрос в форме ниже — специалисты уточнят необходимые исходные данные и подготовят расчёт.</p>
          </details>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Контакты и адрес</h2>
        <div className="contact-layout">
          <address className="contact-details">
            <div className="contact-item"><span>Телефон</span><a href="tel:+73452606055">+7 3452 60 60 55</a><a href="tel:+73452605960">+7 3452 60 59 60</a></div>
            <div className="contact-item"><span>Эл. почта</span><a href="mailto:info@arteltmn.ru">info@arteltmn.ru</a></div>
            <div className="contact-item"><span>Адрес офиса</span><p>Тюмень, ул. Республики, 14/1, 3 этаж</p><a className="contact-outline" href="https://yandex.ru/maps/?text=%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%2C%2014%2F1" target="_blank" rel="noreferrer">Открыть на карте <i><ExternalLink size={16}/></i></a></div>
            <div className="contact-socials">
              <a className="contact-outline" href="https://max.ru/" target="_blank" rel="noreferrer">Написать в MAX <i><img src={publicAsset('/images/max-logo.svg')} alt="" aria-hidden="true"/></i></a>
              <a className="contact-outline" href="https://vk.com/" target="_blank" rel="noreferrer">Написать в VK <i><img src={publicAsset('/images/vk-logo.svg')} alt="" aria-hidden="true"/></i></a>
            </div>
          </address>
          <ContactForm/>
        </div>
      </section>
    </main>
    <footer className="footer-catalog" id="footer">
      <div className="footer-main">
        <div className="footer-brand"><a href="#home" aria-label="Артель — на главную"><img src={publicAsset('/images/artel-logo.svg')} alt="Артель — региональный центр строительных исследований"/></a><p>© 2026 РЦСИ «Артель»</p></div>
        <nav className="footer-column" aria-label="Сайт"><h2>Сайт</h2><a href="#home">Главная</a><a href="#services">Услуги</a><a href="#projects">Реализованные объекты</a><a href="#about">О компании</a><a href="#news">Новости</a><a href="#contact">Контакты</a></nav>
        <nav className="footer-column" aria-label="Услуги"><h2>Услуги</h2><a href="#services">Обследование зданий и сооружений</a><a href="#services">Строительно-техническая судебная экспертиза</a><a href="#services">Проектирование зданий и сооружений</a><a href="#services">Геодезические работы</a><a href="#services">Сопровождение строительства</a></nav>
        <nav className="footer-column" aria-label="О компании"><h2>О компании</h2><a href="#contact">Реквизиты</a><a href="https://arteltmn.ru/o-nas/" target="_blank" rel="noreferrer">Команда</a><a href="https://arteltmn.ru/tehnicheskaja-baza/" target="_blank" rel="noreferrer">Техническая база</a><a href="#licenses">Лицензии и сертификаты</a><a href="#reviews">Наши клиенты</a><a href="#reviews">Благодарственные письма и отзывы</a></nav>
        <nav className="footer-column" aria-label="Проекты"><h2>Проекты</h2><a href="#projects">Экспертизы</a><a href="#projects">Обследования</a><a href="#projects">Проектирование</a></nav>
      </div>
      <div className="footer-legal"><p>ИНН 7204159747　 КПП 720301001　 ОГРН 1107232034282</p><div><a href="https://arteltmn.ru/politika-konfidencialnosti/" target="_blank" rel="noreferrer">Политика обработки персональных данных</a><a href="https://arteltmn.ru/politika-konfidencialnosti/" target="_blank" rel="noreferrer">Согласие на обработку персональных данных</a></div></div>
    </footer>
  </div>;
}
