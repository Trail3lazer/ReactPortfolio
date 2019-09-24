import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import "../CSS/slider.css"

let picArray = [
    "https://d1p0m2aj917ekc.cloudfront.net/slider/C97A4562.jpg",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/IMG_7554-photo.png",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/IMG_7582-photo.JPG",
    "https://d1p0m2aj917ekc.cloudfront.net/slider/C97A4446.jpg"
]

const Slider = (props) => {
    return (
            <Carousel>
                {picArray.map((value, index) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="img-fluid"
                            src={value}
                            alt={index}
                        />
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
