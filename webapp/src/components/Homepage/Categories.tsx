import React from 'react'
import './Categories.css';
import fruit from "../../img/fruit.png"
import meat from "../../img/meat.png"
import fish from "../../img/fish.png"
import vegetable from "../../img/vegetable.png"
import {Link} from "react-router-dom";


const Categories = () => {

    return (
        <div className="Container">
            <h2>OUR PRODUCTS</h2>
            <div className="content">
                <ul>
                    <li className="category">
                        <Link to="/products?category=fruit">
                        <a>
                            <img src={fruit}/>
                            <p data-testid={"fruitFilter"}>FRUIT</p>
                        </a>
                        </Link>
                    </li>
                    <li className="category">
                        <Link to="/products?category=meat">
                        <a>
                            <img src={meat}/>
                            <p data-testid={"meatFilter"}>MEAT</p>
                        </a>
                        </Link>
                    </li>
                    <li className="category">
                        <Link to="/products?category=fish">
                        <a>
                            <img src={fish}/>
                            <p data-testid={"fishFilter"}>FISH</p>
                        </a>
                        </Link>
                    </li>
                    <li className="category">
                        <Link to="/products?category=vegetable">
                        <a>
                            <img src={vegetable}/>
                            <p data-testid={"vegetablesFilter"}>VEGETABLES</p>
                        </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories