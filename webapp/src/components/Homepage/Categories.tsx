import React from 'react'
import './Categories.css';
import fruit from "../../img/fruit.png"
import meat from "../../img/meat.png"
import fish from "../../img/fish.png"
import vegetable from "../../img/vegetable.png"


const Categories = () => {

    return (
        <div className="Container">
            <h2>OUR PRODUCTS</h2>
            <div className="content">
                <ul>
                    <li className="category">
                        <a href="/products?category=fruit">
                            <img src={fruit}/>
                            <p>FRUIT</p>
                        </a>
                    </li>
                    <li className="category">
                        <a href="/products?category=meat">
                            <img src={meat}/>
                            <p>MEAT</p>
                        </a>
                    </li>
                    <li className="category">
                        <a href="/products?category=fish">
                            <img src={fish}/>
                            <p>FISH</p>
                        </a>
                    </li>
                    <li className="category">
                        <a href="/products?category=vegetable">
                            <img src={vegetable}/>
                            <p>VEGETABLES</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories