import React from 'react';
import './home.scss';
import '../../text.scss';
import PhotoGallery from "../../components/PhotoGallery";
import AboutCards from "../../components/AboutCards";

const Home: React.FC = () => (
    <>
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
                <div className="link-container">
                    <a href="/visit">
                        <span>Посетить музей</span>
                        <div className="arrow-square">
                            <img src="arrow-white-right.svg" alt="посетить"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="yellow-scroll">
            <PhotoGallery/>
        </div>
    </>
);

export default Home;