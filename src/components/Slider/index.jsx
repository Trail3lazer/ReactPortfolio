import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./slider.css"

let picArray = [
    "https://d1p0m2aj917ekc.cloudfront.net/slider/C97A4562.webp",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/IMG_7554.webp",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/IMG_7582-photo.JPG",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/C97A4446.webp"
]

const Slider = (props) => {
    return (
        <Carousel className="Slider">
            {picArray.map((value, index) => {
                return <Carousel.Item key={index} className="postition-relative">
                        <img
                            className="img-fluid"
                            src={value}
                            alt={index}
                        />
                    <div className="FadeAway" />

                    <Carousel.Caption>
                        <Button variant="dark"
                            className="aboutBtn"
                            onClick={props.modal}>
                            About Me
                                </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>
    );
}


export default Slider;
