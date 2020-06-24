import '../../wdyr';

import './navbar.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';

interface NavbarProps {
    isDarkBackground: boolean
}

const Navbar: React.FC<NavbarProps> = ({isDarkBackground}) => (
    <nav>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to="/photo">Фотоальбом</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to="/help">Помощь животным</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to="/reviews">Отзывы</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to="/contacts">Контакты</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to="/tickets">Купить билет</NavLink>
    </nav>
);

export default Navbar;