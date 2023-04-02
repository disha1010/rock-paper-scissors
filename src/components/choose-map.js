import React from "react";

import '../scss/circle.scss';
import '../scss/choose-map.scss';
import {ORIGINAL_RSP} from '../cards.js';

class ChooseMap extends React.Component {
  handleSelectCard(name) {
    this.props.onCardSelected(name);
  };

  render() {
    return (
      <main className="triangle">
        {Object.keys(ORIGINAL_RSP).map((selectedCard) => 
          <button key={ORIGINAL_RSP[selectedCard].id} className={`circle ${ORIGINAL_RSP[selectedCard].title}`} onClick={() => this.handleSelectCard(ORIGINAL_RSP[selectedCard].title)}>
            <img className={`icon icon-${ORIGINAL_RSP[selectedCard].title}`} src={ORIGINAL_RSP[selectedCard].iconSrc} alt={`${ORIGINAL_RSP[selectedCard].title} icon`} />
          </button>
        )}
      </main>
    );
  }
}

export default ChooseMap;