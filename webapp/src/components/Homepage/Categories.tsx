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
                        <img src={fruit}/>
                        <p>FRUIT</p>
                    </li>
                    <li className="category">
                        <img src={meat}/>
                        <p>MEAT</p>
                    </li>
                    <li className="category">
                        <img src={fish}/>
                        <p>FISH</p>
                    </li>
                    <li className="category">
                        <img src={vegetable}/>
                        <p>VEGETABLES</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories