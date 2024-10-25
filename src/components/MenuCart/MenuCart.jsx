// src/components/MenuCart.jsx
import React, { useState } from 'react';
import './MenuCart.css'; // Import the CSS file

const MenuCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0.00);

    const menuItems = [
        {
            image: 'fastfood.webp',
            name: 'Luxury Pizza',
            price: 2.4,
            description: 'Feel like a wow!',
        },
        {
            image: 'burger 1.avif',
            name: 'Luxury Burger',
            price: 1.5,
            description: 'A delicious treat for burger lovers!',
        },
        {
            image: 'noodles1.jpg',
            name: 'Luxury Noodles',
            price: 3.5,
            description: 'Noodles cooked to perfection with spices.',
        },
        {
            image: 'sandwich1.jpg',
            name: 'Luxury Sandwich',
            price: 2.5,
            description: 'A hearty sandwich filled with fresh ingredients.',
        },
        {
            image: 'spicy pasta.jpg',
            name: 'Luxury Spicy Pasta',
            price: 1.4,
            description: 'Spicy pasta that packs a flavorful punch!',
        },
        {
            image: 'omlate.jpg',
            name: 'Luxury Omelette',
            price: 4.5,
            description: 'Fluffy omelette made with fresh eggs.',
        },
        {
            image: 'chicken1.jpg',
            name: 'Luxury Chicken',
            price: 6.2,
            description: 'Grilled chicken served with savory spices.',
        },
        {
            image: 'chocolawa1.jpg',
            name: 'Luxury Chocolawa',
            price: 2.5,
            description: 'A decadent dessert for chocolate lovers.',
        },
    ];

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalAmount((prevTotal) => prevTotal + item.price);
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        const itemToRemove = cartItems[index];
        const updatedTotal = totalAmount - itemToRemove.price;

        setCartItems(updatedCart);
        setTotalAmount(updatedTotal);
    };

    return (
        <div>
            <section id="menu" className="shops">
                <h2>Our Special Menu</h2>
                <div className="shop-container">
                    {menuItems.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>Starting At ${item.price.toFixed(2)}</p>
                            <p>{item.description}</p>
                            <button 
                                className="add-to-cart" 
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section id="cart" className="cart">
                <h2>Your Cart</h2>
                <div className="cart-items">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <img src={item.image} alt={item.name} width="50" />
                                <span>{item.name} - ${item.price.toFixed(2)}</span>
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <p>No items in the cart.</p>
                    )}
                </div>
                <h3>Total: $<span id="total-amount">{totalAmount.toFixed(2)}</span></h3>
                <button className="checkout-btn">Checkout</button>
            </section>
        </div>
    );
};

export default MenuCart;
