import * as React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import featuredProduct1 from '../img/shirt1.jpg';
import featuredProduct2 from '../img/mask1.png';
import featuredProduct3 from '../img/book1.jpg';

export default function HomePage(): JSX.Element {


    return (
        <div className="home">
            <h1>Welcome to DeDe!</h1>
            <p>The DeDe retail system is a way of buying online without giving away any of your information. What are you waiting for? These are some examples of the products we sell</p>
            <div className="featuredProducts">
                <section>
                    <img src={featuredProduct1} alt="featuredProduct1"/>
                    <img src={featuredProduct2} alt="featuredProduct2"/>
                    <img src={featuredProduct3} alt="featuredProduct3"/>
                </section>
            </div>
            <Link to="/products">
                <button type="button">
                    Take me to the shop!
                </button>
            </Link>
        </div>
    );

}
