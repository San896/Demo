import React from 'react';
import { Route, Switch } from "react-router-dom"
import Commerce from '../components/Commerce';
import Home from '../components/Home';
import LogIn from '../components/LogIn';
import { Profile } from '../components/Profile';


function Rutas(props) {
    return (
        <div>
            <Switch >
             <Route exact path='/' component= { Home } />
             <Route exact path='/login' component= {LogIn} />
             <Route exact path='/profile' component= {Profile} />
             <Route exact path='/commerce' component= {Commerce} />
            </Switch>
        </div>
    );
}

export default Rutas;