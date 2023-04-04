import React from "react";

import '../scss/button.scss';
import rulesImage from '../images/image-rules.svg';
import '../scss/rules-modal.scss';

class RulesModal extends React.Component {
  handleCloseRulesModal = () => {
    this.props.onRulesModalClose();
  }

  render() {
    return (
      <div className="rules-modal">
        <button className="button close" onClick={() => this.handleCloseRulesModal()}></button>
        <h2 className="modal-title">Rules</h2>
        <img src={rulesImage} alt="Rules image" className="rules-image" />
      </div>
    );
  }
}

export default RulesModal;