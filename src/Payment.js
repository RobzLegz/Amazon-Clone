import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';

const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="paymentContainer">
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="paymentAddress">
                        <p>{user?.email}</p>
                        <p>Ābeles 15</p>
                        <p>Riga Latvia</p>
                    </div>
                </div>
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="paymentItems">
                        {basket.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="paymentDetails">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
