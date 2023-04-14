import '../scss/header.scss'

function Header(props) {
  const score = props.score;

  return (
    <header className="header">
      <h1 className="game-name">rock<br/>paper<br/>scissors</h1>
      <div className="score">
        <div className="score-title">score</div>
        <div className="score-number">{score}</div>
      </div>
    </header>
  );
}

export default Header;