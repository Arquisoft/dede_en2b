import * as React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import featuredProduct1 from '../img/shirt1.jpg';
import featuredProduct2 from '../img/mask1.png';
import featuredProduct3 from '../img/book1.jpg';
import Slider from "./Homepage/Slider";

export default function HomePage(): JSX.Element {


    return (
        <Slider/>
    );

}
