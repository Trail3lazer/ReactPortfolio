import React from 'react';
import Slider from "./components/Slider";
import Modal from "./components/AboutMeModal"
import './App.css';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    
      <div className="App">
        <Slider modal={() => { setModalShow(true) }} />
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
  );
}

export default App;
