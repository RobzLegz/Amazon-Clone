import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <div className="header-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" className="logo"/>
            <div className="header-search-container">
                <input type="text" className="header-search"/>
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="option-lineone">Hello Guest</span>
                    <span className="option-linetwo">Sign In</span>
                </div>
                <div className="header-option">
                    <span className="option-lineone">Returns</span>
                    <span className="option-linetwo">&Orders</span>
                </div>
                <div className="header-option">
                    <span className="option-lineone">Your</span>
                    <span className="option-linetwo">Prime</span>
                </div>
                <div className="header-basket-option">
                    <ShoppingBasketIcon />
                    <spon className="option-linetwo header-basket-count">0</spon>
                </div>
            </div>
        </div>
    )
}

export default Header
