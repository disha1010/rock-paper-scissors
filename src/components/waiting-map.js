import '../scss/circle.scss';
import '../scss/choose-map.scss';
import iconPaper from '../images/icon-paper.svg';
import iconScissors from '../images/icon-scissors.svg';
import iconRock from '../images/icon-rock.svg';

function WaitingMap() {
  return (
    <main className="waiting-map">
      <div className="player-1">
        <p>Your picked</p>
        <div className="circle paper">
          <img className="icon icon-paper" src={iconPaper} alt="paper icon" />
        </div>
      </div>
      <div className="player-2">
        <p>The house picked</p>
        <div className="circle"></div>
      </div> 
    </main>
  );
}

export default WaitingMap;