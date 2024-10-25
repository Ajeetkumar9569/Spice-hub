// App.js
// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import MainSection from './components/MainSection/MainSection';
// import MenuCart from './components/MenuCart/MenuCart';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Footer from './pages/Footer/Footer';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <section id="home">
//         <MainSection />
//       </section>
//       <section id="menu">
//         <MenuCart />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default App;










//  ===================== important ===================================

import MainSection from './components/MainSection/MainSection'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'

import MenuCart from './components/MenuCart/MenuCart'
import Navbar from './pages/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <MenuCart/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
























// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import './App.css'
// import Navbar from "./pages/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Error from "./Error";

// const App = () => {

//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="*" element={<Error/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
