import React, { useState } from "react";

import '../scss/circle.scss';
import '../scss/choose-map.scss';
import iconPaper from '../images/icon-paper.svg';
import iconScissors from '../images/icon-scissors.svg';
import iconRock from '../images/icon-rock.svg';

const ORIGINAL_RSP = {
  rock: {
  id: 1,
  title: 'rock',
  iconSrc: iconRock,
  }, 
  paper: {
    id: 2,
    title: 'paper',
    iconSrc: iconPaper,
  }, 
  scissors: {
    id: 3,
    title: 'scissors',
    iconSrc: iconScissors,
  }
};

function ChooseMap() {
  const handleSelectCard = (name) => {
    // this.setState({isLoggedIn: name});
    console.log(name)
  };

  const GAME_ITEMS = Object.keys(ORIGINAL_RSP).map((selectedCard) => 
    <button key={ORIGINAL_RSP[selectedCard].id} className={`circle ${ORIGINAL_RSP[selectedCard].title}`} onClick={() => handleSelectCard(ORIGINAL_RSP[selectedCard].title)}>
      <img className={`icon icon-${ORIGINAL_RSP[selectedCard].title}`} src={ORIGINAL_RSP[selectedCard].iconSrc} alt={`${ORIGINAL_RSP[selectedCard].title} icon`} />
    </button>
  );

  return (
    <main className="triangle">
      {GAME_ITEMS}
    </main>
  );
}

export default ChooseMap;