import React, { Component } from 'react';
import './css/all.min.css';
import './css/bootstrap.min.css';
import './css/App.css';
import lodash from 'lodash'

class App extends Component {
  render() {
    return (
      <div>
      <Game />
      </div>
    );
  }
}
 const Numbers = (props) => {
   return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i) => <span key={i}>{number}</span>)}
      </div>
    </div>
   );
 }
 Numbers.list = lodash.range(1,10);

class Game extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Star Game </h1> 
        <hr />
        <div className = 'row'>
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

const Stars = (props) => {
  const numberOfStars = 1+ Math.floor(Math.random()*9);
  return(
    <div className='col-5'>
      {lodash.range(numberOfStars).map(i => <i key={i} className='fa fa-star'></i>)}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className='col-2'>
     <button>=</button> 
    </div>
  );
}

const Answer = (props) => {
  return(
    <div className='col-5'>
      <span>5</span>
      <span>6</span>
    </div>
  );
}

export default App;
