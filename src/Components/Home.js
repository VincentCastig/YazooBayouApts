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
                <div className="home-paragraph">
                    {/* Add any introductory text here */}
                </div>
                <div className="home-wine-container">
                    <div className="content-row">
                        <Col xs={12} md={6} className="slider">
                            <img className="home-main-image slide1" src={apartment1Image} alt="Apartment unit 7 and 6" />
                            <img className="home-main-image slide2" src={kitchenImage} alt="Apartment Kitchen" />
                            <img className="home-main-image slide3" src={bedroomImage} alt="Apartment Bedroom and Bathroom" />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className="red-header">8 Unit Apartment Complex</h3>
                            <h3 className="red-header">Rates: $675 and $725 Per Month</h3>
                            <h3 className="red-header">On Site Parking</h3>
                            <h3 className="red-header">Water Included</h3>
                            <h3 className="red-header">For Inquiries, Call Liquors Unlimited at 228.762.3874</h3>
                        </Col>
                    </div>
                    <div id="content-row2">
                        <div className="mapHeader">
                            <h4 className="red-header">Apartments are located at 611 Sarazzin Ave, Pascagoula, MS 39567</h4>
                        </div>
                        <Map />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
