import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import projects from "../../resource/projects.js";

import './card.css'

const makeCards = () => {
    let cardsArr = [];

    for (let key in projects) {

        cardsArr.push(
            <div className="col-md-4" data-aos="slide-up">
                <Card border='dark' text="light" key={key} className="bg-dark  m-2 p-1">
                    <Card.Img src={projects[key].img} alt={projects[key].name + " screenshot"} variant="top" />
                    <Card.Body>
                        <Card.Title className="text-center">{projects[key].name}</Card.Title>
                        <Card.Text className="d-flex justify-content-center align-items-center">
                            <Button variant="link" href={projects[key].deploy}>Page</Button>
                            <div className="px-2">|</div>
                            <Button variant="link" href={projects[key].git}>Code</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>);

    }
    return cardsArr;
}

const Cards = () => {



    return (
        <div className="Cards row d-flex justify-content-center mx-4">
            {makeCards().map((card) => {
                return card;
            })}
        </div>


    )
}

export default Cards;