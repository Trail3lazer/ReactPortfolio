import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import './App.css';

function App() {

  return (

    <div className="jumboHolder">
      <div class="container p-3">
      </div>
      <Jumbotron className="mt-5 bg-dark text-light mx-auto col-md-8 jumbotron text-center">
     
          jaredrwight@gmail.com 
          <br/>
          <a href="https://github.com/Trail3lazer"><i className="fab fa-github"></i> Github</a>
          <br />
          <a href="https://www.codewars.com/users/Trail3lazer"><i class="fab fa-node-js"></i> Code Wars</a>
    
      </Jumbotron>
    </div>
  );
}

export default App;