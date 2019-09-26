import React from 'react';
import Slider from "../Slider";
import Modal from "../Modal"
import './hero.css';

function Hero() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    
      <div className="Hero">
        <Slider modal={() => { setModalShow(true) }} />
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
  );
}

export default Hero;
