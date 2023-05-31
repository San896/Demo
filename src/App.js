
import './App.css';
import 'normalize.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthComp } from './auth/AuthComp';
import LogIn from './components/LogIn';
import Rutas from './rutas/Rutas';
import Home from './components/Home';
import { Profile } from './components/Profile';
import Commerce from './components/Commerce';

function App() {
  return (
    <>
     <BrowserRouter>
       <AuthComp/> 
     </BrowserRouter>
    </>
     

  );
}

export default App;
