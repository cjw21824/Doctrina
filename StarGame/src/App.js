import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  return(
    <CardList cards={data}/>
  );
  }
}
const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img width='150' src={props.imgURL}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
          <div>{props.company}</div> 
      </div>
    </div>
  );
};

let data = [
  { name: 'MathWiz', 
    imgURL:'https://avatars0.githubusercontent.com/u/15042658?v=4',
    company: 'Datree'},
  { name: 'Ryan Whytsell',
    imgURL:'https://avatars2.githubusercontent.com/u/19170236?v=4',
    company: 'Datree'},
  
]

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

export class Form extends Component {
  render() {
    return(
     <h1> hello </h1>
    )
  }
}


export default App;

