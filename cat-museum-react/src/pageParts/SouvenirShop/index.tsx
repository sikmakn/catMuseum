import '../../wdyr';

import './souvenir.scss'
import React from "react";
import ArrowLink from "../../components/ArrowLink";
import {COLORS, PATHS} from "../../constants";

const SouvenirShop: React.FC = () => (
    <div className="souvenir-shop-container">
        <div className="red-background"/>
        <img src="souvenir-cat.png" alt="сувениры"/>
        <div className="content-container">
            <h2>Магазин сувениров</h2>
            <div>
                <p>Оригинальные, необычные, креативные подарки предлагает наш <br/>интернет-магазин. Сохранить яркость
                    воспоминаний от посещения музея вам помогут чудесные сувениры, находящиеся в ассортименте. Картины
                    прекрасно продемонстрируют вашу заботу, став сюрпризом для родных и близких.</p>
                <p>Средства, полученные от продажи картин, будет потрачена на покупку корма и других принадлежностей для
                    пушистых обитателей Музея Кота.</p>
                <ArrowLink color={COLORS.RED} linkText={'Посмотреть ассортимент'} path={PATHS.SHOP}/>
            </div>
        </div>
    </div>
);

export default SouvenirShop;