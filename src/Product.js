import React from 'react';
import "./Product.css";

const Product = ({title,image,price,rating}) => {
    return (
        <div className="product-container">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}                    
                </div>
            </div>
            <img src={image} alt="product image" className="product-image"/>
            <button className="cart-button-add">Add to basket</button>
        </div>
    )
}

export default Product
