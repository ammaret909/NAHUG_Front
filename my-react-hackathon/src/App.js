import { Routes, Route } from "react-router-dom";
import React from "react";

// User
import Login_user from './Menu/Login';
import Singin from './Menu/Singin';
import Home from './Menu/Home'
import Food_user from './Menu/Food'
import AddCat from './Menu/AddCat'
import EditCat from './Menu/EditCat'
import Profile from './Menu/Profile'
import AdminHome from './Admin/AdminHome'
import AdminBrand from './Admin/AdminBrand'
import AdminEditBrand from './Admin/AdminEditBrand'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminFood from './Admin/AdminFood'
import AdminAddFood from './Admin/AdminAddFood'
import AdminEditFood from './Admin/AdminEditFood'


export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login_user />} />
      <Route path="/food" element={<Food_user />} />
      <Route path="/singin" element={<Singin />} />
      <Route path="/addcat" element={<AddCat />} />
      <Route path="/editcat" element={<EditCat />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/adminbrand" element={<AdminBrand />} />
      <Route path="/admineditbrand" element={<AdminEditBrand />} />
      <Route path="/adminaddbrand" element={<AdminAddBrand />} />
      <Route path="/adminfood" element={<AdminFood />} />
      <Route path="/admineditfood" element={<AdminEditFood />} />
      <Route path="/adminaddfood" element={<AdminAddFood />} />
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
