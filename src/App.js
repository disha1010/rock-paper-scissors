import React from "react";
import './scss/content.scss';
import Header from './components/header';
import ChooseMap from './components/choose-map';
import Answer from './components/answer';
import WaitingMap from './components/waiting-map';
import RulesButton from './components/rules-button';

const CARDS_LIST = ['rock', 'scissors', 'paper'];
// let selectedCard = '';
let houseCard = CARDS_LIST[Math.floor(Math.random()*CARDS_LIST.length)];

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {selectedCardName: ''};
  }

  render () {
    const selectedCardName = this.state.selectedCardName;
    return (
      <div className="content">
        <Header />
        <ChooseMap selectedCardName={selectedCardName} />
        
        {/* <WaitingMap /> */}
        {/* <Answer /> */}
        <RulesButton />
      </div>
    );
  }
}

export default App;
