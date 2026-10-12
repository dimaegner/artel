import ArrowIcon from './arrow-icon';
import { publicAsset } from '@/lib/public-asset';

export function ProjectsSection() {
  return <section className="projects-section" id="projects" aria-labelledby="projects-title">
    <div className="projects-heading"><h2 id="projects-title">Реализованные проекты</h2><a className="projects-more" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><span>Больше готовых проектов,<br/>разделённых по направлениям</span><i><ArrowIcon/></i></a></div>
    <div className="project-cases">
      <a className="project-case" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><img src={publicAsset('/images/design-reference/ref-07.webp')} alt="БЦ «Нобель-Парк»" loading="lazy"/><span className="project-label"><span>БЦ «НОБЕЛЬ-ПАРК»</span><small>СТРОИТЕЛЬНО-ТЕХНИЧЕСКАЯ ЭКСПЕРТИЗА</small></span></a>
      <a className="project-case" href="https://arteltmn.ru/realizovannye-obekty/" target="_blank" rel="noreferrer"><img src={publicAsset('/images/design-reference/ref-08.webp')} alt="ТЦ «Сити Молл»" loading="lazy"/><span className="project-label"><span>ТЦ «СИТИ МОЛЛ»</span><small>ОБСЛЕДОВАНИЕ КОНСТРУКЦИЙ</small></span></a>
    </div>
  </section>;
}

export function ContactSection() {
  return <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <h2 id="contact-title">Контакты и адрес</h2>
    <div className="contact-layout">
      <address className="contact-details">
        <div className="contact-item"><span>Телефон</span><a href="tel:+73452606055">+7 3452 60 60 55</a><a href="tel:+73452605960">+7 3452 60 59 60</a></div>
        <div className="contact-item"><span>Эл. почта</span><a href="mailto:info@arteltmn.ru">info@arteltmn.ru</a></div>
        <div className="contact-item"><span>Адрес офиса</span><p>Тюмень, ул. Республики, 14/1, 3 этаж</p><a className="contact-outline" href="https://yandex.ru/maps/?text=%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%2C%2014%2F1" target="_blank" rel="noreferrer"><span>Проложить маршрут</span><i><img src={publicAsset('/images/map-open-icon.svg')} alt="" aria-hidden="true"/></i></a></div>
      </address>
      <div className="contact-actions">
        <a className="contact-primary" href="mailto:info@arteltmn.ru">Написать нам</a>
        <div className="contact-socials">
          <a className="contact-social-button" href="https://max.ru/" target="_blank" rel="noreferrer"><span>Написать в MAX</span><img src={publicAsset('/images/max-logo.svg')} alt="" aria-hidden="true"/></a>
          <a className="contact-social-button" href="https://vk.com/" target="_blank" rel="noreferrer"><span>Группа в ВК</span><img src={publicAsset('/images/vk-logo.svg')} alt="" aria-hidden="true"/></a>
        </div>
      </div>
    </div>
  </section>;
}

export function SiteFooter({ homePath = '' }: { homePath?: string }) {
  const href = (section: string) => `${homePath}#${section}`;
  return <footer className="footer-catalog" id="footer">
    <div className="footer-main">
      <div className="footer-brand"><a href={homePath || '#home'} aria-label="Артель — на главную"><img src={publicAsset('/images/artel-logo.svg')} alt="Артель — региональный центр строительных исследований"/></a><p>© 2026 РЦСИ «Артель»</p></div>
      <nav className="footer-column" aria-label="Сайт"><h2>Сайт</h2><a href={href('home')}>Главная</a><a href={href('services')}>Услуги</a><a href={href('projects')}>Реализованные объекты</a><a href={href('about')}>О компании</a><a href={href('news')}>Новости</a><a href={href('contact')}>Контакты</a></nav>
      <nav className="footer-column" aria-label="Услуги"><h2>Услуги</h2><a href={href('services')}>Обследование зданий и сооружений</a><a href={href('services')}>Строительно-техническая судебная экспертиза</a><a href={href('services')}>Проектирование зданий и сооружений</a><a href={href('services')}>Геодезические работы</a><a href={href('services')}>Сопровождение строительства</a></nav>
      <nav className="footer-column" aria-label="О компании"><h2>О компании</h2><a href={href('contact')}>Реквизиты</a><a href="https://arteltmn.ru/o-nas/" target="_blank" rel="noreferrer">Команда</a><a href="https://arteltmn.ru/tehnicheskaja-baza/" target="_blank" rel="noreferrer">Техническая база</a><a href={href('licenses')}>Лицензии и сертификаты</a><a href={href('reviews')}>Наши клиенты</a><a href={href('reviews')}>Благодарственные письма и отзывы</a></nav>
      <nav className="footer-column" aria-label="Проекты"><h2>Проекты</h2><a href={href('projects')}>Экспертизы</a><a href={href('projects')}>Обследования</a><a href={href('projects')}>Проектирование</a></nav>
    </div>
    <div className="footer-legal"><p>ИНН 7204159747　 КПП 720301001　 ОГРН 1107232034282</p><div><a href="https://arteltmn.ru/politika-konfidencialnosti/" target="_blank" rel="noreferrer">Политика обработки персональных данных</a><a href="https://arteltmn.ru/politika-konfidencialnosti/" target="_blank" rel="noreferrer">Согласие на обработку персональных данных</a></div><span className="footer-credit">Сайт разработан 3LL</span></div>
  </footer>;
}
