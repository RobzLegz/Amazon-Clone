import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

const Product = ({title,image,price,rating, id}) => {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        console.log("hello");
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

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
            <button onClick={addToBasket} className="cart-button-add">Add to basket</button>
        </div>
    )
}

export default Product;
