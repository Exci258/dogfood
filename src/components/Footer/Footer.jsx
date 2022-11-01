import React from 'react';
import Logo from '../Logo';
import classes from './footer.module.css';
import Instagram from './img/Instagram';
import WhatsApp from './img/WhatsApp';
import Viber from './img/Viber';
import Telegram from './img/Telegram';
import VK from './img/VK';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__logo}>
                <Logo />
                <span className={classes.footer__description}>
                    &#169; "Интернет магазин DogFood.ru"
                </span>
            </div>
            <div className=''>
                <ul className={classes.footer__items}>
                    <li>
                        <a href='/'>Каталог</a>
                    </li>
                    <li>
                        <a href='/'>Акции</a>
                    </li>
                    <li>
                        <a href='/'>Новости</a>
                    </li>
                    <li>
                        <a href='/'>Отзывы</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul className={classes.footer__items}>
                    <li>
                        <a href='/'>Оплата и доставка</a>
                    </li>
                    <li>
                        <a href='/'>Часто спрашивают</a>
                    </li>
                    <li>
                        <a href='/'>Обратная связь</a>
                    </li>
                    <li>
                        <a href='/'>Контакты</a>
                    </li>
                </ul>
            </div>
            <div className={classes.footer__items}>
                <h3 className={classes.footer__title}>Мы на связи</h3>
                <a href='tel:+7(999)000000' className={classes.footer__tel}>
                    8 (999) 00-00-00
                </a>
                <a href='mailto:dogfood.ru@gmail.com'>dogfood.ru@gmail.com</a>
                <div className={classes.footer__icons}>
                    <a href='/'>
                        <WhatsApp />
                    </a>
                    <a href='/'>
                        <Viber />
                    </a>
                    <a href='/'>
                        <Instagram />
                    </a>
                    <a href='/'>
                        <VK />
                    </a>
                    <a href='/'>
                        <Telegram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
