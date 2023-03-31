import '../scss/header.scss'

function Header() {
  return (
    <header className="header">
      <h1 className="game-name">rock<br/>paper<br/>scissors</h1>
      <div className="score">
        <div className="score-title">score</div>
        <div className="score-number">1</div>
      </div>
    </header>
  );
}

export default Header;