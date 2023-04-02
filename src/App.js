import React from "react";

import './scss/content.scss';
import Header from './components/header';
import ChooseMap from './components/choose-map';
import Answer from './components/answer';
// import WaitingMap from './components/waiting-map';
import RulesButton from './components/rules-button';
import {ORIGINAL_RSP} from './cards.js';

const CARDS_LIST = Object.keys(ORIGINAL_RSP);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answerText: '',
      selectedCard: '',
      houseCard: '',
    }
  }

  cardSelected = (cardSelected) => {
    let houseCard = CARDS_LIST[Math.floor(Math.random()*CARDS_LIST.length)];
    let answer = '';
    if (ORIGINAL_RSP[cardSelected].power > ORIGINAL_RSP[houseCard].power) {
      answer = 'You win';
    } else if (ORIGINAL_RSP[cardSelected].power < ORIGINAL_RSP[houseCard].power) {
      answer = 'You lose';
    } else {
      answer = 'Dead heat';
    }

    this.setState({
      answerText: answer,
      selectedCard: cardSelected,
      houseCard: houseCard,
    });

    console.log(cardSelected);
    console.log(houseCard);
    console.log(answer);
  }

  playAgain = () => {
    this.setState({
      answerText: '',
      selectedCard: '',
      houseCard: '',
    });
  }

  render () {
    return (
      <div className="content">
        <Header />        
        {!this.state.selectedCard
          ? <ChooseMap onCardSelected={this.cardSelected} />
          : <Answer 
            answerText={this.state.answerText} 
            selectedCard={this.state.selectedCard}
            houseCard={this.state.houseCard}
            onPlayAgain={this.playAgain}
          />
        }
        {/* <WaitingMap /> */}
        
        <RulesButton />
      </div>
    );
  }
}

export default App;
