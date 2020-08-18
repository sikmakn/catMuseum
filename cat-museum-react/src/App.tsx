import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import Buy from './pages/Buy';
import Contacts from './pages/Contacts';
import {PATHS} from './constants';
import Album from './pages/Album';

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path={PATHS.PHOTO_ALBUM} exact component={Album}/>
            <Route path={PATHS.HELP} exact component={Help}/>
            <Route path={PATHS.BUY} exact component={Buy}/>
            <Route path={PATHS.CONTACTS} exact component={Contacts}/>
            <Route path="" exact component={Home}/>
        </Switch>
    </BrowserRouter>
);

export default App;
