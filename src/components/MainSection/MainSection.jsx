// src/components/MainSection.jsx
import React from 'react';
import './MainSection.css'; // Import the CSS file

const MainSection = () => {
    return (
        <section id="home" className="main">
            <div className="mainText">
                <h1>
                    <span>Our</span> Aim <br /> You Feel <span>Comfort</span>
                </h1>
                <button className="order-btn">Order Now</button>
            </div>
        </section>
    );
};

export default MainSection;
