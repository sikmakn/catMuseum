import React from 'react';
import './home.scss';
import '../../text.scss';
import YellowScroll from '../../pageParts/YellowScroll';
import AboutMuseum from '../../pageParts/AboutMuseum';
import Top from '../../pageParts/Top';
import Exhibitions from '../../pageParts/Exhibitions';
import AnimalsInDangerous from '../../pageParts/AnimalsInDanger';
import SouvenirShop from '../../pageParts/SouvenirShop';
import Footer from '../../pageParts/Footer';
import Header from '../../components/Header';

const Home: React.FC = () => (
    <>
        <Header isDarkPageArr={[true, false, false, false, true, false, false, false]}/>
        <Top darken={0.1} header="ДОМ КОТИКОВ И КОШЕК" backgroundUrl="cat-main-head.jpg"/>
        <AboutMuseum/>
        <YellowScroll/>
        <Exhibitions/>
        <AnimalsInDangerous/>
        <SouvenirShop/>
        <Footer/>
    </>
);

export default Home;