import '../../wdyr';

import './navbar.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => (
    <nav>
        <NavLink to="/help">Помощь животным</NavLink>
        <NavLink to="/reviews">Отзывы и благодарности</NavLink>
        <NavLink to="/tickets">Купить билеты</NavLink>
    </nav>
);

export default Navbar;