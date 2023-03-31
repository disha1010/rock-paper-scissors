import '../scss/circle.scss';
import '../scss/choose-map.scss';
import iconPaper from '../images/icon-paper.svg';
import iconScissors from '../images/icon-scissors.svg';
import iconRock from '../images/icon-rock.svg';

function Answer() {
  return (
    <main className="answer">
      <div className="player-1">
        <p>Your picked</p>
        <div className="circle paper">
          <img className="icon icon-paper" src={iconPaper} alt="paper icon" />
        </div>
      </div>
      <div className="play-again">
        <h2>You Win</h2>
        <button className="button success">Play again</button>
      </div>
      <div className="player-2">
        <p>The house picked</p>
        <div className="circle scissors">
          <img className="icon icon-scissors" src={iconScissors} alt="scissors icon" />
        </div>
      </div> 
    </main>
  );
}

export default Answer;