import React from 'react';
// import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Map from './map';

const Home = () => {
    return (
        <div className="home-body-wrapper">
            <section className="image-container">
                {/* <img className="home-main-image" src={(require('../Img/backView.JPG'))} alt="Couple drinking red wine"/> */}
                <div className="image-container-text">
                    <h2>Your Home on the Bayou</h2>
                </div>
            </section>

            <main className="container-home">
               
                {/* <h2>{}</h2> */}
                <div className="home-paragraph">
                </div>
                <div className="home-wine-container">
                    <div className="content-row">
                        <Col xs={6} md={6} className="slider">
                            <img className="home-main-image slide1" src={(require('../Img/DSC_0569.JPG'))} alt="Apartment unit 7 and 6" />
                            <img className="home-main-image slide2" src={(("https://lh3.google.com/u/0/d/1K7rvx9tFzD8A9aQqIs-R8QkErmCTl6EY=w1830-h915-iv1"))} alt="Apartment Kitchen" />
                            <img className="home-main-image slide3" src={(("https://lh3.google.com/u/0/d/1KHCDvT-3Gf-TbOQymgVx1jPksC7Kh9y5=w1830-h915-iv1"))} alt="Apartment Bedroom and Bathroom" />
                        </Col>
                        <Col xs={6} md={6}>
                            <h3 className="red-header">8 Unit Apartment Complex</h3>
                            <h3 className="red-header">Rates: $675 and $725 Per Month</h3>
                            <h3 className="red-header">On Site Parking</h3>
                            <h3 className="red-header">Water Included</h3>
                            <h3 className="red-header">For Inqueries, Call Liquors Unlimited at 228.762.3874 </h3>
                            {/* <p>Opening in 1981, The Liquors Unlimited Store is enjoying many years of serving Pascagoula, MS and its surrounding areas. Our liquor store proudly stocks over 2,100 different items and we can special order many more.</p> */}
                        </Col>
                    </div>
                    <div id="content-row2" >
                        <div xs={12} md={12} className="mapHeader">

                            {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p> */}
                            <h4 className="red-header">Apartments are located at 611 Sarazzin Ave, Pascagoula, MS 39567</h4>
                            {/* <p>We are conveniantly located on the corner of Market St and Covenant St. Come by to take a look at our large selection of wine, liquor, and liqueurs.</p> */}

                        </div>
                        <div >
                            <Map />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
