import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function _Modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="Modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Jared Wight
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>I am a web developer. I have a passion for finding innovative, efficient,
        dynamic solutions. My understanding and innate skill with React, Node.js,
        Express.js, MySQL, MongoDB, and RESTful API creation or consumption allow
        me to do just that.</p> 
      
        <p>I am a quick learner. I have demonstrated this by my
        growth at the University of Utah full-stack web development boot-camp. I
        was one of the top students in my class and after graduation I have
        continued to crave more.</p>
      
        <p>My ambition and passion for coding, and my desire
        to provide for my family are helping me pursue my career in the tech
        industry. Not only do I have the technical expertise to exceed as a
        developer but the combination of my logical strategy and emotional
        intelligence make me a powerful asset who would add great value and
        efficiency to any team.</p>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default _Modal;