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
  
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  } 
  
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number,i) =>
           <span key={i} className={numberClassName(number)} onClick={()=> props.selectNumber(number)} >{number}</span>)}
      </div>
    </div>
   );
 }

 Numbers.list = lodash.range(1,10);

class Game extends Component {
  state= {
    selectedNumbers: [],
    numberOfStars: 1+ Math.floor(Math.random()*9),
  };
  
  selectNumber = (clickedNumber) => {
    if(!this.state.selectedNumbers.includes(clickedNumber)){
      this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }))
    }
  }

  undoSelectedNumber= (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }
  
  render() {
    const { selectedNumbers, numberOfStars} = this.state;
    return (
      <div className='container'>
        <h1> Star Game </h1> 
        <hr />
        <div className = 'row'>
          <Stars numberOfStars={numberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers}
                  undoSelectedNumber={this.undoSelectedNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
        selectNumber= {this.selectNumber}/>
      </div>
    );
  }
}

const Stars = (props) => {
  return(
    <div className='col-5'>
      {lodash.range(props.numberOfStars).map(i => <i key={i} className='fa fa-star'></i>)}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className='col-2'>
     <button className='btn' disabled={props.selectedNumbers.length===0}>=</button> 
    </div>
  );
}

const Answer = (props) => {
  return(
    <div className='col-5'>
      {props.selectedNumbers.map((number,i) => <span key={i} onClick={() => props.undoSelectedNumber(number)}>{number}</span>)}
    </div>
  );
}

export default App;
