import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"

let picArray = ["C97A4562.jpg", "IMG_7554-photo.PNG", "IMG_7582-photo.JPG", "C97A4446.jpg"]

class Slider extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        
        return (
            <React.Fragment>
                <Carousel>
                    {picArray.map((value, index) => {
                        return <Carousel.Item>
                            <img
                                className="img-fluid"
                                src={value}
                                slide={index}
                            />
                            <Carousel.Caption>
                                <Button variant="outline-success"
                                onClick={this.props.modal}>About Me</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
            </React.Fragment>
        );
    }

}

export default Slider;
