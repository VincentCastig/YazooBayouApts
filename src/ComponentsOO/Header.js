import React from 'react';
import '../styles/header.scss';
import logoImage from '../Img/logo/yb-logo.png'


const Header = () => {
    return (
        <header>
            <div className="jumbotron">
                <div className="inner">
                    {/* <div className='logo-image left'>
                        <img alt='Yazoo Bayou Apartment Logo - Left' src={logoImage} />
                    </div> */}
                    <h1>Yazoo Bayou Apartments</h1>
                    <div className='logo-image right'>
                        <img alt='Yazoo Bayou Apartment Logo' src={logoImage} />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;