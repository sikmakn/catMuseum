import '../../wdyr';

import './aboutMuseum.scss';
import React from "react";
import AboutCards from "../../components/AboutCards";
import ArrowLink from "../../components/ArrowLink";

const AboutMuseum: React.FC = () => (
    <div className="about-container">
        <div>
            <div className="text-info">
                <h2>О музее</h2>
                <div>
                    <p>Музей Кота появился в Минске в 2015-ом году. С того времени он сменил не одну прописку, но
                        никогда не забывал о своей первостепенной цели: сблизить животных с людьми и воспитать в
                        последних гуманность. </p>
                    <p>Котики здесь - полноценные хозяева, посетители нисколько не смущают их
                        своим присутствием, напротив, пушистые экспонаты наслаждаются вниманием. Приглашаем вас
                        чудесно провести время в компании очаровательных котов и кошек! </p>
                </div>
            </div>
            <AboutCards/>
            <div className="link">
                <ArrowLink color="#FFD256" linkText="Посетить музей" path="/visit"/>
            </div>
            {/*todo colors and links to global*/}
        </div>
    </div>
);

export default AboutMuseum;