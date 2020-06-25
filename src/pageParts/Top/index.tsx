import '../../wdyr';

import './top.scss';
import React from "react";

const Top: React.FC = () => (
    <div className="top-grid">
        <div className="top-grid-content">
            <h1>дом котиков и кошек</h1>
            <div className="socials">
                <a href="https://vk.com/catmuseumby"><img src="vk-logo.png" alt="vk"/></a>
                <a href="https://www.facebook.com/catmuseumby"><img src="facebook-logo.png" alt="facebook"/></a>
                <a href="https://twitter.com/catmuseumby"><img src="twitter-logo.png" alt="twitter"/></a>
                <a href="https://www.instagram.com/catmuseumby/"><img src="insta-logo.png" alt="instagram"/></a>
            </div>
        </div>
    </div>
);

export default Top;