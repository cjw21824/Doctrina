import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
 state = {
   cards:  []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

 render() {
    return(
      <div>
        <Form buttonPressed={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}


const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img width='150' src={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
          <div>{props.company}</div> 
      </div>
    </div>
  );
};



const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};


export class Form extends Component {
  state={
    userName: ''
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
      this.props.buttonPressed(resp.data);
      this.setState({userName: ''});
    });
  };

  render() {
    return(
     <form style={{padding: 20}} onSubmit={this.handleSubmit}>
       <input type="text" value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})} placeholder="Github Username"/>
       <button type='submit'>Add Card</button>
     </form>
    );
  }
}


export default App;

