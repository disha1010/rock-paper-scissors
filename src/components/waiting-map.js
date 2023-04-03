import '../scss/circle.scss';
import '../scss/choose-map.scss';
import {ORIGINAL_RSP} from '../cards.js';

function WaitingMap(props) {
  const selectedCard = props.selectedCard;
  const houseCard = props.houseCard;

  return (
    <main className="answer waiting-map">
      <div className="player player-1">
        <p className="title">Your picked</p>
          <div className={`circle ${selectedCard}`}>
            <img className={`icon icon-${selectedCard}`} src={ORIGINAL_RSP[selectedCard].iconSrc} alt={`${selectedCard} icon`} />
          </div>
      </div>
      <div className="player player-2">
        <p className="title">The house picked</p>
          <div className="circle empty"></div>
      </div> 
    </main>
  );
}

export default WaitingMap;