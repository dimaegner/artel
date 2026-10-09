'use client';
/* oxlint-disable next/no-img-element -- The local logo SVG keeps its exact proportions in the fixed header. */
import { useEffect, useState } from 'react';
import { publicAsset } from '@/lib/public-asset';

export default function SiteHeader(){
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{
  const update=()=>setScrolled(window.scrollY>64);
  update();
  window.addEventListener('scroll',update,{passive:true});
  return ()=>window.removeEventListener('scroll',update);
 },[]);
 return <header className={"header container floating-header"+(scrolled?" is-scrolled":"")}>
<a className="brand" href="#home" aria-label="Артель — на главную"><img className="brand-logo" src={publicAsset('/images/artel-logo.svg')} alt="Артель" width="2000" height="498"/></a>
<nav className="desktop-nav" aria-label="Основная навигация"><a href="#services">Услуги</a><a href="#about">О компании</a><a href="#projects">Реализованные проекты</a><a href="https://arteltmn.ru/tehnicheskaja-baza/" target="_blank" rel="noreferrer">Техническая база</a><a href="#contact">Контакты</a></nav>
<div className="header-actions"><a className="header-social" href="https://max.ru/" target="_blank" rel="noreferrer" aria-label="Артель в MAX"><img src={publicAsset('/images/max-logo.svg')} alt="" aria-hidden="true"/></a><a className="header-social" href="https://vk.com/" target="_blank" rel="noreferrer" aria-label="Артель во ВКонтакте"><img src={publicAsset('/images/vk-logo.svg')} alt="" aria-hidden="true"/></a><a className="header-contact" href="tel:+73452606055" aria-label="Позвонить в Артель: +7 (3452) 60-60-55"><img className="header-phone-icon" src={publicAsset('/images/phone-icon.svg')} alt="" aria-hidden="true"/><span>+7 3452 60 60 55</span></a></div>
</header>;
}
