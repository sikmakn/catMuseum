import '../../wdyr';

import './header.scss';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom';

const Header: React.FC = () => (
    <header>
        <NavLink exact to="/" className="logo">Музей кота</NavLink>
        <Navbar/>
    </header>
);

export default Header;