import React from 'react';
import { Route, Routes } from "react-router-dom"
import Commerce from '../components/Commerce';
import Home from '../components/Home';
import LogIn from '../components/LogIn';
import { Profile } from '../components/Profile';


function Rutas(props) {
    return (
        <div>
            <Routes >
             <Route exact path='/' element= { <Home/> } />
             <Route exact path='/login' element= {<LogIn/>} />
             <Route exact path='/profile' element= {<Profile/>} />
             <Route exact path='/commerce' element= {<Commerce/>} />
            </Routes>
        </div>
    );
}

export default Rutas;