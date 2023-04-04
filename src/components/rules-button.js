import React from "react";

import '../scss/button.scss';
import '../scss/footer.scss';

class RulesButton extends React.Component {
  handleOpenRulesModal = () => {
    this.props.onRulesModalOpen();
  }

  render() {
    return (
      <footer className="footer">
        <button className="button secondary" onClick={() => this.handleOpenRulesModal()}>Rules</button>
      </footer>
    );
  }
}

export default RulesButton;