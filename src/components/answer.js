import React from "react";

import '../scss/answer.scss';
import '../scss/circle.scss';
import '../scss/choose-map.scss';
import {ORIGINAL_RSP} from '../cards.js';

class Answer extends React.Component {
  handlePlayAgain = () => {
    this.props.onPlayAgain();
  }

  render() {
    const selectedCard = this.props.selectedCard;
    const houseCard = this.props.houseCard;
    const answerText = this.props.answerText;

    return (
      <main className="answer">
        <div className="player player-1">
          <p className="title">Your picked</p>
          <div className={`circle ${selectedCard}`}>
            <img className={`icon icon-${selectedCard}`} src={ORIGINAL_RSP[selectedCard].iconSrc} alt={`${selectedCard} icon`} />
          </div>
        </div>
        <div className="play-again">
          <h2 className="winner-title">{answerText}</h2>
          <button className="button success" onClick={() => this.handlePlayAgain()}>Play again</button>
        </div>
        <div className="player player-2">
          <p className="title">The house picked</p>
          <div className={`circle ${houseCard}`}>
            <img className={`icon icon-${houseCard}`} src={ORIGINAL_RSP[houseCard].iconSrc} alt={`${houseCard} icon`} />
          </div>
        </div> 
      </main>
    );
  }
}

export default Answer;