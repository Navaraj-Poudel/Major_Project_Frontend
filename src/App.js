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
// import l3 from './component/images/l3.png'
import Doctor1 from './component/doctor1/Doctor1';
import Patient1 from './component/Patient/Patient1';
import Admin1 from './component/Admin/Admin1';
import Treatedp from './component/doctor1/Treatedp';
import Upcomingp from './component/doctor1/Upcomingp';
import Newreg from './component/Admin/Newreg';
import Addpatient from './component/Admin/Addpatient'
import Yourinfo from './component/Patient/Yourinfo';
import Previoustr from './component/Patient/Previoustr';
import Latesttr from './component/Patient/Latesttr';

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
          <Route path="/doctor1" element = {<Doctor1/>} />
          <Route path="/Patient1" element = {<Patient1/>} />
          <Route path="/Admin1" element = {<Admin1/>} />
          <Route path="/Treatedp" element = {<Treatedp/>} />
          <Route path="/Upcomingp" element = {<Upcomingp/>} />
          <Route path="/Newreg" element = {<Newreg/>}/>
          <Route path="/Addpatient" element = {<Addpatient/>} />
          <Route path="/Yourinfo" element = {<Yourinfo/>} />
          <Route path="/Previoustr" element = {<Previoustr/>} />
          <Route path="/Latesttr" element = {<Latesttr/>} />
          <Route path="/Yourinfo" element = {<Yourinfo/>} />
        </Routes>
      </BrowserRouter>
    </div>

 )
}

export default App;
