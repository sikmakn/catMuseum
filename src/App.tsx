import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Help from "./pages/Help/Help";
import Reviews from "./pages/Reviews";
import Tickets from "./pages/Tickets";

const App: React.FC = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/help" exact component={Help}/>
            <Route path="/reviews" exact component={Reviews}/>
            <Route path="/tickets" exact component={Tickets}/>
        </Switch>
    </BrowserRouter>
);

export default App;
