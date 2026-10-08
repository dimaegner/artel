'use client';
/* oxlint-disable next/no-img-element -- The local logo SVG keeps its exact proportions in the fixed header. */
import { useEffect, useState } from 'react';
import { ChevronDown, MessageCircleMore, Phone, Send } from 'lucide-react';
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
<nav className="desktop-nav" aria-label="Основная навигация"><a href="#services">Услуги <ChevronDown size={14} aria-hidden="true"/></a><a href="#about">О компании</a><a href="#projects">Реализованные проекты</a><a href="https://arteltmn.ru/tehnicheskaja-baza/" target="_blank" rel="noreferrer">Техническая база</a><a href="#contact">Контакты</a></nav>
<div className="header-actions"><a className="header-social" href="#contact" aria-label="Контакты для связи в MAX"><MessageCircleMore size={20}/></a><a className="header-social" href="#contact" aria-label="Контакты для связи в Telegram"><Send size={20}/></a><a className="header-contact" href="tel:+73452606055" aria-label="Позвонить в Артель: +7 (3452) 60-60-55"><Phone size={18} aria-hidden="true"/><span>+7 3452 60 60 55</span></a></div>
</header>;
}
