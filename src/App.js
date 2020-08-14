import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <>
      <div>
        <h1>Tic Tac Toe in React.js</h1>
        <h2>Pick a Weapon</h2>
      </div>
      <div>

        <div class="card">
          <h2>CHOOSE YOUR WEAPON</h2>
          <div class="input-group" >
            <div>
              <input type="text" aria-label="First name" class="form-control" placeholder="Player 1 username" /> <br />
              <button type="button" class="btn btn-dark"><i class="fas fa-times"></i></button>
            </div>
            <div>
              <input type="text" aria-label="Last name" class="form-control" placeholder="Player 2 username" /> <br />
              <button type="button" class="btn btn-dark"><i class="far fa-circle"></i></button>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default App;
