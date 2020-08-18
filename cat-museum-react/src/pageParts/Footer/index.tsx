import '../../wdyr';

import './footer.scss';
import React from 'react';
import YandexMap from "../../components/YandexMap";

const Footer: React.FC = () => (
    <div className="footer-container">
        <div>
            <div className="content-container">
                <h2>Контакты</h2>
                <div>
                    <img src="map-pointer.svg" alt="адресс"/>
                    <span>Республика Беларусь <br/> г. Минск, ул. Интернациональная, 23</span>
                </div>
                <div>
                    <img src="clock-icon.svg" alt="часы работы"/>
                    <span>понедельник: выходной <br/> вторник — воскресение: с 11:00 до 20:00</span>
                </div>
                <div>
                    <img src="phone-icon.svg" alt="телефон"/>
                    <a href="tel:+375 29 642 31 83">+375 29 642 31 83</a>
                </div>
                <div>
                    <img src="email-logo.svg" alt="почта"/>
                    <a href="mailto:catmuseumby@gmail.com">catmuseumby@gmail.com</a>
                </div>
                <div className="socials">
                    <span>Подпишись на наши социальные сети</span>
                    <div>
                        <a href="https://vk.com/catmuseumby">
                            <img src="vk-black-logo.svg" alt="vk"/>
                        </a>
                        <a href="https://www.facebook.com/catmuseumby">
                            <img src="facebook-black-logo.svg" alt="facebook"/>
                        </a>
                        <a href="https://twitter.com/catmuseumby">
                            <img src="twitter-black-logo.svg" alt="twitter"/>
                        </a>
                        <a href="https://www.instagram.com/catmuseumby/">
                            <img src="instagram-black-logo.svg" alt="instagram"/>
                        </a>
                    </div>
                </div>
            </div>
            <YandexMap/>
        </div>
    </div>
);

export default Footer;