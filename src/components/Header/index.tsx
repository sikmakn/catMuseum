import '../../wdyr';

import './header.scss';
import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

const Header: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkBackground, setIsDarkBackground] = useState(true);

    useEffect(() => {
        function detectedBackground() {
            let backElem = document.elementFromPoint(window.pageXOffset + 2, window.pageYOffset + 60) as HTMLElement;

            while (backElem && backElem.parentElement?.id !== 'root')
                backElem = backElem.parentElement as HTMLElement;

            if (isDarkBackground && (!backElem || !backElem.style.backgroundColor)) {
                setIsDarkBackground(false)
            } else if (!isDarkBackground) {
                setIsDarkBackground(true);
            }
        }

        function headerView() {
            if (scrollY - window.pageYOffset >= 0 && !isVisible) {
                setIsVisible(true);
            } else if (scrollY - window.pageYOffset <= 0 && isVisible) {
                setIsVisible(false);
            }
            setScrollY(window.pageYOffset);
            detectedBackground()
        }

        window.addEventListener('scroll', headerView);
        return () => window.removeEventListener('scroll', headerView);
    }, [scrollY, isVisible, isDarkBackground]);

    return (
        <CSSTransition
            in={isVisible}
            timeout={300}
            classNames={'header'}
            mountOnEnter
        >
            <header>
                <NavLink exact to="/" className="logo">Музей кота</NavLink>
                <Navbar isDarkBackground={isDarkBackground}/>
            </header>
        </CSSTransition>
    );
};

export default Header;