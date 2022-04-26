import * as React from 'react';
import './HomePage.css';

import Slider from "./Homepage/Slider";

import Categories from "./Homepage/Categories";

export default function HomePage(): JSX.Element {


    return (
        <div>
            <Slider/>
            <Categories/>
        </div>
    );

}
