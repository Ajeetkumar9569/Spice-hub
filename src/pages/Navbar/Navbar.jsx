// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div>
//             <header>
//                 <nav className='bg-gray-500 p-5'>
//                     <ul className='flex gap-10 justify-center'>
//                         <li><NavLink to="/">Home</NavLink></li>
//                         <li><NavLink to="/about">About</NavLink></li>
//                         <li><NavLink to="/contact">Contact</NavLink></li>
//                         <li><NavLink to="/blogs">Blogs</NavLink></li>
//                         <li><NavLink to="/new">New</NavLink></li>
//                         <li><NavLink to="/login">Login</NavLink></li>
//                     </ul>
//                 </nav>
//             </header>
//         </div>
//     )
// }

// export default Navbar;

// components/Navbar/Navbar.js

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <h1>
          Ajeet's <span>Spice Hub</span>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
