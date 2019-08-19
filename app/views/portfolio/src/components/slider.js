import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import "../CSS/slider.css"

let picArray = ["C97A4562.jpg", "IMG_7554-photo.PNG", "IMG_7582-photo.JPG", "C97A4446.jpg"]

const Slider = (props) => {
        return (
            <React.Fragment>
                <Carousel>
                    {picArray.map((value, index) => {
                        return <Carousel.Item>
                            <img
                                className="img-fluid"
                                src={value}
                                alt={index}
                            />
                            <Carousel.Caption>
                                <Button variant="dark" className="aboutBtn"
                                onClick={props.modal}>About Me</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
            </React.Fragment>
        );
    }


export default Slider;
