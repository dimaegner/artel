'use client';
import { useState, type FormEvent } from 'react';
import ArrowIcon from './arrow-icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm(){
 const [prepared,setPrepared]=useState(false);
 function prepare(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const body=['Имя: '+data.get('name'),'Телефон: '+data.get('phone'),'Объект: '+data.get('object'),'','Задача: '+data.get('task')].join('\n');
  window.location.href='mailto:info@arteltmn.ru?subject='+encodeURIComponent('Заявка на исследование объекта')+'&body='+encodeURIComponent(body);
  setPrepared(true);
 }
 return <form className="contact-form" id="contact-form" onSubmit={prepare}>
 <div className="form-row"><label htmlFor="name">Ваше имя<Input id="name" name="name" placeholder="Как к вам обращаться" autoComplete="name" maxLength={100} required/></label><label htmlFor="phone">Телефон<Input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" autoComplete="tel" maxLength={30} minLength={7} required/></label></div>
 <label htmlFor="object">Расположение объекта<Input id="object" name="object" placeholder="Город или адрес" maxLength={240}/></label>
 <label htmlFor="task">Задача<Textarea id="task" name="task" placeholder="Что необходимо исследовать или проверить?" rows={3} maxLength={2000} required/></label>
 <div className="form-bottom"><Button type="submit" className="form-submit"><span>Отправить</span><i aria-hidden="true"><ArrowIcon/></i></Button></div>
 {prepared&&<p className="form-feedback" role="status">Если почтовое приложение не открылось, напишите на <a href="mailto:info@arteltmn.ru">info@arteltmn.ru</a> или позвоните нам.</p>}
 </form>
}


