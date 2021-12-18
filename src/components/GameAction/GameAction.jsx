import React from "react";
import "./GameAction.css";

class GameAction extends React.Component {
  render() {
    return (
      <div className="game-action" onClick={this.props.action}>
        <i className={`${this.props.icon} game-action-icon`}></i>
        <span className="game-action-description">{this.props.actionName}</span>
      </div>
    );
  }
}

export default GameAction;
