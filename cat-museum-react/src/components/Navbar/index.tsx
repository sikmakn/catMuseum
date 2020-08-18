import '../../wdyr';

import './navbar.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATHS} from "../../constants";

interface NavbarProps {
    isDarkBackground: boolean
}

const Navbar: React.FC<NavbarProps> = ({isDarkBackground}) => (
    <nav>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to={PATHS.PHOTO_ALBUM}>Фотоальбом</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to={PATHS.HELP}>Помощь животным</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to={PATHS.CONTACTS}>Контакты</NavLink>
        <NavLink className={isDarkBackground ? 'light' : 'dark'} to={PATHS.BUY}>Купить билет</NavLink>
    </nav>
);

export default Navbar;