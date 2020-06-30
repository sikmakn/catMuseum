import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Help from "./pages/Help/Help";
import Reviews from "./pages/Reviews";
import Tickets from "./pages/Tickets";
import Contacts from "./pages/Contacts";
import {PATHS} from "./constants";
import Album from "./pages/Album";

const App: React.FC = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path={PATHS.PHOTO_ALBUM} exact component={Album}/>
            <Route path={PATHS.HELP} exact component={Help}/>
            <Route path={PATHS.REVIEWS} exact component={Reviews}/>
            <Route path={PATHS.BUY} exact component={Tickets}/>
            <Route path={PATHS.CONTACTS} exact component={Contacts}/>
        </Switch>
    </BrowserRouter>
);

export default App;
