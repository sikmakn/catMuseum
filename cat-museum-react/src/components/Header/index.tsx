import '../../wdyr';

import './header.scss';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

export interface HeaderProps {
    isDarkPageArr: boolean[]
}

const Header: React.FC<HeaderProps> = ({isDarkPageArr}) => {
    const [isToTop, setIsToTop] = useState(true);
    const [isDarkBackground, setIsDarkBackground] = useState(isDarkPageArr[0]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function headerView() {
            let isDarkPageIndex = Math.floor(window.scrollY / window.innerHeight);
            if (isDarkPageIndex >= isDarkPageArr.length) isDarkPageIndex = isDarkPageArr.length - 1;
            setIsDarkBackground(isDarkPageArr[isDarkPageIndex]);
            setIsToTop(window.scrollY < scrollPosition);
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', headerView);
        return () => window.removeEventListener('scroll', headerView);
    }, [isDarkPageArr, isDarkBackground, scrollPosition]);

    return (
        <CSSTransition
            in={isToTop}
            timeout={{enter: 1000, exit: 500}}
            classNames="header"
            unmountOnExit
        >
            <header>
                <NavLink exact to="/" className="logo">Музей кота</NavLink>
                <Navbar isDarkBackground={isDarkBackground}/>
            </header>
        </CSSTransition>
    );
};

export default Header;