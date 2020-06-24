import React from 'react';
import './home.scss';
import '../../text.scss';
import HorizontalSlider from "../../components/HorizontalScrollSlider";

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
                <div className="icons-info-container">
                    <div>
                        <img src="collar-logo.svg" alt="дружелюбные коты"/>
                        <p>Дружелюбные коты и кошки</p>
                    </div>
                    <div>
                        <img src="health-logo.svg" alt="здоровые котики"/>
                        <p>Все котики здоровы</p>
                    </div>
                    <div>
                        <img src="cafe-logo.svg" alt="котокафе"/>
                        <p>Котокафе</p>
                    </div>
                    <div>
                        <img src="art-logo.svg" alt="выставки"/>
                        <p>Выставки и конкурсы</p>
                    </div>
                    <div>
                        <img src="help-logo.svg" alt=""/>
                        <p>Благотворительная помощь</p>
                    </div>
                </div>
                <div className="link-container">
                    <a href="/visit">
                        <span>Посетить музей</span>
                        <div className="arrow-square"><img src="arrow-white-right.svg" alt="посетить"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="yellow-scroll">
            <HorizontalSlider images={[
                'https://previews.123rf.com/images/dolgachov/dolgachov1803/dolgachov180300887/97201038-happy-young-woman-with-cat-in-bed-at-home.jpg',
                'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/08/GettyImages-937808484-e1566545143388.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1',
                'https://cff2.earth.com/uploads/2019/08/23130727/Research-proves-that-the-%E2%80%98Crazy-Cat-Lady%E2%80%99-stereotype-is-false-730x410.jpg',
                'https://iheartcats.com/wp-content/uploads/2020/02/woman-carrying-brown-tabby-cat-3356488-scaled-e1581438118730.jpg',
                'https://kulturologia.ru/files/u18476/koshatnitsy-foto-0.jpg',
                'https://4fun.one/uploads/posts/t/1560537013.jpeg'
            ]}/>
        </div>
    </>
);

export default Home;