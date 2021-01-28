import React from 'react';
import "./CheckoutProduct.css"

const CheckoutProduct = ({id, image, title, price, rating}) => {
    return (
        <div className="chekout-product-container">
            <img src={image} alt="checkout image" className="checkout-image"/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="checkout-product-rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button>Remove from basket</button>
        </div>
    );
}

export default CheckoutProduct;
