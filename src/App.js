
import './App.css';
import 'normalize.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthComp } from './auth/AuthComp';


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
