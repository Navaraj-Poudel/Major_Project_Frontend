import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/home';
import About from './component/About/About';
import Patient from './component/Patient/Patient';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Doctor from './component/Doctor/Doctor';
import Admin from './component/Admin/Admin';
import Contactus from './component/Contactus/Contactus';
import l3 from './component/images/l3.png'

const App = ()=> {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      
      <Routes>
          <Route path="/" index element = { <Home/>} />
          <Route path="/about" element = { <About/>} />
          <Route path="/doctor" element = { <Doctor/>} />
          <Route path="/patient" element = { <Patient/>} />
          <Route path="/admin" element = { <Admin/>} />
          <Route path="/contactus" element = {<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </div>

 )
}

export default App;
