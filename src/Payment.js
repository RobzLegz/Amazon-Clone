import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [suceeded, setSuceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    
    const handleCardSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSuceeded(true);
            setError(null);
            setProcessing(false);
            history.replace("/orders");
        })
    }

    const handleCardChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
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
                        <form onSubmit={handleCardSubmit}>
                            <CardElement onChange={handleCardChange} />
                            <div className="paymentPriceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Total: <strong>{value}</strong></p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || suceeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
