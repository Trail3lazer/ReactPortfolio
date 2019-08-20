import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import projects from "../resource/projects.js";

const makeCards = () => {
    let cardsArr = [];
    for (let key in projects) {


        cardsArr.push(
            <Card key={key} className="card text-white float-left col-md-5 p-2 m-4">
                <Card.Img src={projects[key].img} alt={projects[key].name + " screenshot"} className="img img-thumbnail" />
                <Card.Title className="text-center">{projects[key].name}</Card.Title>
                <Card.Text>
                    <Button type="button" href={projects[key].deploy} className="float-left btnLink btn">Link to page</Button>
                    <Button type="button" href={projects[key].git} className="float-right btnLink btn">Link to code</Button>
                </Card.Text>
            </Card>)

    }
    return cardsArr;
}

const Cards = () => {


    return (
        <div className="container mt-5 pt-3">
            {makeCards()}
        </div>
    )
}

export default Cards;