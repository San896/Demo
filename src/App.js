
import './App.css';
import 'normalize.css';
import { BrowserRouter } from "react-router-dom";
import { AuthComp } from './auth/AuthComp';
import LogIn from './components/LogIn';

function App() {
  return (
    <BrowserRouter>
      <AuthComp/>
    </BrowserRouter>
      

  );
}

export default App;
