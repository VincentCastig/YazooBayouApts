import Map from './map';
import kitchenImage from '../Img/kitchen.jpg';
import bedroomImage from '../Img/bedroom.jpg';

const Home = () => {
    return (
        <div className="home-body-wrapper">
            <section className="image-container">
                <div className="image-container-text">
                    <h2>Your home on the bayou</h2>
                    <p>Eight apartments in Pascagoula, Mississippi. Water included, at $775 a month.</p>
                    <div className="hero-actions">
                        <a className="btn" href="tel:+12287623874">Call 228.762.3874</a>
                    </div>
                </div>
            </section>

            <main id="apartments" className="section">
                <div className="wrap">
                    <div className="intro-grid">
                        <article className="home-paragraph-wrapper">
                            <h2>Yazoo Bayou</h2>
                            <p>Welcome to Yazoo Bayou Apartments, where comfort meets convenience in the heart of Pascagoula, MS. Our apartments offer a serene atmosphere, making it the perfect place to call home. Enjoy peaceful living with scenic bayou views and easy access to local attractions in Pascagoula.</p>
                        </article>

                        <div>
                            <dl className="facts">
                                <div><dt>Apartments</dt><dd>8 units</dd></div>
                                <div><dt>Rent</dt><dd>$775 per month</dd></div>
                                <div><dt>Water</dt><dd>Included</dd></div>
                                <div><dt>Parking</dt><dd>On-site</dd></div>
                            </dl>
                            <div className="facts-call">
                                <p>For inquiries, call Liquors Unlimited.</p>
                                <a className="btn btn--teal" href="tel:+12287623874">Call 228.762.3874</a>
                            </div>
                        </div>
                    </div>

                    <div className="photo-row">
                        <figure>
                            <img src={bedroomImage} loading="lazy" alt="Bedroom in a Yazoo Bayou apartment" />
                            <figcaption>Bedroom</figcaption>
                        </figure>
                        <figure>
                            <img src={kitchenImage} loading="lazy" alt="Kitchen in a Yazoo Bayou apartment" />
                            <figcaption>Kitchen</figcaption>
                        </figure>
                    </div>
                </div>
            </main>

            <section className="location section">
                <div className="wrap">
                    <h2>Location</h2>
                    <p className="address">611 Sarrazin Ave, Pascagoula, MS 39567</p>
                    <Map />
                </div>
            </section>
        </div>
    );
};

export default Home;
