import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import './App.css';

function App() {

  return (

    <div className="jumboHolder">
      <div class="container p-3">
      </div>
      <Jumbotron className="mt-5 bg-dark text-light mx-auto col-md-8 jumbotron text-center">
        <p>
          <h1>Contact info</h1>
        </p>
        <hr />
        <p>
          jaredrwight@gmail.com
        </p>
    
      </Jumbotron>
    </div>
  );
}

export default App;