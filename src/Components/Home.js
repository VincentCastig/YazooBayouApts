import React from 'react';
import { Col } from 'react-bootstrap';
import Map from './map';
import apartment1Image from '../Img/apt-far-view.JPG';
import kitchenImage from '../Img/kitchen.jpg';
import bedroomImage from '../Img/bedroom.jpg';

const Home = () => {
    return (
        <div className="home-body-wrapper">
            <section className="image-container">
                <div className="image-container-text">
                    <h2>Your Home on the Bayou</h2>
                    {/* <div className="contact-link-box">
                        <a className="btn" href="#contact">Contact Us</a>
                    </div> */}
                </div>
            </section>

            <main className="container-home">
                <article className="home-paragraph-wrapper">
                    <h2>Yazoo Bayou</h2>
                    <p>Welcome to Yazoo Bayou Apartments, where comfort meets convenience in the heart of Pascagoula, MS. Our apartments offer a serene atmosphere, making it the perfect place to call home. Enjoy peaceful living with scenic bayou views and easy access to local attractions in Pascagoula.</p>
                </article>
                <section className="home-wine-container">
                    <div className="content-row">
                        <Col xs={12} md={6} className="slider">
                            <img className="home-main-image slide1" src={apartment1Image} alt="Apartment units 6 and 7" />
                            <img className="home-main-image slide2" src={kitchenImage} alt="Kitchen in Yazoo Bayou Apartments" />
                            <img className="home-main-image slide3" src={bedroomImage} alt="Bedroom in Yazoo Bayou Apartments" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className="red-header">8 Unit Apartment Complex</h3>
                            <h3 className="red-header">Rates: $675 and $725 Per Month</h3>
                            <h3 className="red-header">On-site Parking</h3>
                            <h3 className="red-header">Water Included</h3>
                            <h3 className="red-header">For Inquiries, Call Liquors Unlimited at 228.762.3874</h3>
                        </Col>
                    </div>
                    <section id="content-row2">
                        <div className="mapHeader">
                            <h4 className="red-header">Located at 611 Sarazzin Ave, Pascagoula, MS 39567</h4>
                        </div>
                        <Map />
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Home;
