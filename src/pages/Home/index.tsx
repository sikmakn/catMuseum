import React from 'react';
import './home.scss';
import '../../text.scss';
import YellowScroll from "../../pageParts/YellowScroll";
import AboutMuseum from "../../pageParts/AboutMuseum";
import Top from "../../pageParts/Top";
import Exhibitions from "../../pageParts/Exhibitions";

const Home: React.FC = () => (
    <>
        <Top/>
        <AboutMuseum/>
        <YellowScroll/>
        <Exhibitions/>
    </>
);

export default Home;