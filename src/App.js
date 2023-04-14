import React from "react";

import './scss/content.scss';
import Header from './components/header';
import ChooseMap from './components/choose-map';
import Answer from './components/answer';
import WaitingMap from './components/waiting-map';
import RulesButton from './components/rules-button';
import RulesModal from './components/rules-modal';
import {ORIGINAL_RSP} from './cards.js';

const CARDS_LIST = Object.keys(ORIGINAL_RSP);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answerText: '',
      selectedCard: '',
      houseCard: '',
      isLoaded: false,
      isRulesModalOpen: false,
      score: 1,
    }
  }

  cardSelected = (cardSelected) => {
    let houseCard = CARDS_LIST[Math.floor(Math.random() * CARDS_LIST.length)];
    let answer = '';
    let scoreCounter = this.state.score;

    if ((cardSelected === 'rock' && houseCard === 'scissors') || (cardSelected === 'paper' && houseCard === 'rock') || (cardSelected === 'scissors' && houseCard === 'paper')) {
      answer = 'You win';
      scoreCounter += 1;
    } else if ((cardSelected === 'rock' && houseCard === 'paper') || (cardSelected === 'paper' && houseCard === 'scissors') || (cardSelected === 'scissors' && houseCard === 'rock')) {
      answer = 'You lose';
    }  else {
      answer = 'Dead heat';
    }

    this.setState({
      answerText: answer,
      selectedCard: cardSelected,
      houseCard: houseCard,
    });

    setTimeout(() => this.setState({
      isLoaded: true,
      score: scoreCounter,
    }), 1000);
  }

  playAgain = () => {
    this.setState({
      answerText: '',
      selectedCard: '',
      houseCard: '',
      isLoaded: false,
    });
  }

  rulesModalOpen= () => this.setState({isRulesModalOpen: true});

  rulesModalClose = () => this.setState({isRulesModalOpen: false});

  render () {
    return (
      <div className="content">
        <Header score={this.state.score} />        
        {!this.state.selectedCard
          ? <ChooseMap onCardSelected={this.cardSelected} />
          : <>
              {!this.state.isLoaded 
                ? <WaitingMap selectedCard={this.state.selectedCard} /> 
                : <Answer 
                  answerText={this.state.answerText} 
                  selectedCard={this.state.selectedCard}
                  houseCard={this.state.houseCard}
                  onPlayAgain={this.playAgain}
                />
              } 
            </>
          }

        <RulesButton onRulesModalOpen={this.rulesModalOpen} />

        { !!this.state.isRulesModalOpen && <RulesModal onRulesModalClose={this.rulesModalClose} /> }
      </div>
    );
  }
}

export default App;
