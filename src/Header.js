import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {

    const [{basket, user}, dispatch] = useStateValue();

    const authHandle = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header-container">
            <Link to="/"> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" className="logo"/>
            </Link>
            <div className="header-search-container">
                <input type="text" className="header-search"/>
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <Link to={!user && "/login"}>
                    <div onClick={authHandle} className="header-option">
                        <span className="option-lineone">Hello Guest</span>
                        <span className="option-linetwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="option-lineone">Returns</span>
                    <span className="option-linetwo">&Orders</span>
                </div>
                <div className="header-option">
                    <span className="option-lineone">Your</span>
                    <span className="option-linetwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header-basket-option">
                        <ShoppingBasketIcon />
                        <span className="option-linetwo header-basket-count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
