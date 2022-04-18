import React, {useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './Slider.css';
import {sliderItems} from "../../helper/sliderData";
import styled from "styled-components";


interface Prop {
    index:number;
}

const Wrapper = styled.div<Prop> `
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.index * -100}vw);
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] =useState(0);
    const handleClick = (direction:string) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="SliderContainer">
            <div className="Arrow" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon/>
            </div>
            <Wrapper index={slideIndex}>
                {sliderItems.map(item =>(
                    <div className="Slide">
                        <div className="ImageContainer">
                            <div className="Image">
                                <img src={item.img}/>
                            </div>
                        </div>
                        <div className="InfoContainer">
                            <h1 className="Title">{item.title}</h1>
                            <p className="Description">{item.description}</p>
                            <Link to="/products">
                                <button className="Button">SHOP NOW</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Wrapper>
            <div className="Arrow" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
}

export default Slider