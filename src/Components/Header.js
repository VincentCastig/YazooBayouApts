import React from 'react';
import '../styles/header.scss';
import logoImage from '../Img/logo/yb-logo.png';

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-header__brand">
                    <img className="site-header__logo" alt="Yazoo Bayou Apartments logo" src={logoImage} />
                    <h1>Yazoo Bayou <span>Apartments</span></h1>
                </div>
                <a className="site-header__call" href="tel:+12287623874">Call 228.762.3874</a>
            </div>
        </header>
    );
};

export default Header;
