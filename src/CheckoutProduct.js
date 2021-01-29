import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeCartItem = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    };

    return (
        <div className="chekout-product-container">
            <img src={image} alt="checkout image" className="checkout-image"/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeCartItem}>Remove from basket</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
