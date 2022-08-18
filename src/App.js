import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import EmployeeDetails from './Pages/Home/EmployeeDetails/EmployeeDetails';
import Hierarcy from './Pages/Home/Hierarcy/Hierarcy';
import Navbar from './Pages/Shared/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<EmployeeDetails/>} />
        <Route path="hierarcy" element={<Hierarcy/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
