import { Routes, Route } from "react-router-dom";
import React from "react";

// User
import Login_user from './Menu/Login';
import Singin from './Menu/Singin';
import Home from './Menu/Home'
import Food_user from './Menu/Food'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login_user />} />
      <Route path="/food" element={<Food_user />} />
      <Route path="/singin" element={<Singin />} />
    </Routes>
  );
}
// import logo from './logo.svg';
// import './App.css';

// import Nav from './Component/Nav';
// import Footer from './Component/Footer';
// import Login from './Menu/Login';
// import Singin from './Menu/Singin';
// import Home from './Menu/Home'

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
