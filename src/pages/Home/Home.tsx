import React from 'react';
import './home.scss';
import '../../text.scss';
import {Slider} from "../../components/Slider/Slider";
import CircleImagesGrid from "../../components/CircleImagesGrid/CircleImagesGrid";

const Home: React.FC = () => (
    <>
        <div className="main-grid">
            <div>
                <div className="main-text-container">
                    <h1>дом котиков и кошек</h1>
                    <h3>Выставки, конкурсы, котокафе</h3>
                </div>
            </div>
            <div className="cat-croped"></div>
            <div><Slider images={[//todo fetch
                'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg',
                'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
                'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg',
                'https://pmcdeadline2.files.wordpress.com/2019/12/cats-2-1.jpg',
                'https://www.iams.com/images/default-source/article-image/article_stomach-issues-in-cats-why-cats-vomit-and-what-to-do_header.jpg',
            ]}/></div>
            <div>
                <div className="about-text-container">
                    <h3>О музее</h3>
                    <p>В Музее Кота вы встретите дружелюбных котов и кошек, а также познакомитесь с произведениями
                        искусства на кошачью тематику.</p>
                    <p>В соответствии с рекомендациями специалистов, четвероногие обитатели музея питаются лучшими на
                        сегодняшний день кошачьими кормами, которые содержат все необходимые для здоровья животных
                        компоненты. Все котики привиты и регулярно проходят осмотры у ветеринарного врача. Наши
                        сотрудники
                        внимательно следят за тем, чтобы посетители бережно обращались с животными. Также в музее
                        предусмотрены места, где коты могут уединиться, если почувствуют в этом необходимость.</p>
                    <p>Приходите к нам в гости полюбоваться произведениями искусства и пообщаться с обворожительными
                        котами
                        и кошками!</p>
                    <a href="/tickets">Посетить музей&nbsp; <img src="/arrow-black-right.svg" alt="Посетить музей"/></a>
                </div>
            </div>
        </div>
        <div className="cats-list">
            <h2 className="cats-list-header">Наша кошачья команда</h2>
            <CircleImagesGrid data={[//todo fetch
                {id: '1', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '2', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '3', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '4', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '5', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '6', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '7', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '8', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '9', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '10', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '11', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
                {id: '12', name: 'Пончик', imageUrl: 'https://wired.me/wp-content/uploads/2020/01/Science_Cats.jpg'},
            ]}/>
        </div>
    </>
);

export default Home;