import Player from "../Player/Player";
import GamePlay from "../GamePlay/GamePlay";
import "./DiceGame.css";
import React from "react";

class DiceGame extends React.Component {
  state = {
    currentScore: [0, 0],
    globalScore: [0, 0],
  };

  updateCurrentScore = (newCurrentScore) => {
    this.setState({ currentScore: newCurrentScore });
  };
  updateGlobalScore = (newGlobalScore) => {
    this.setState({ globalScore: newGlobalScore });
  };

  render() {
    return (
      <div className="DiceGame">
        <Player
          activePlayer="active-player"
          playerNumber={1}
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
        />
        <GamePlay
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
          updateCurrentScore={(newCurrentScore) =>
            this.updateCurrentScore(newCurrentScore)
          }
          updateGlobalScore={(newGlobalScore) =>
            this.updateGlobalScore(newGlobalScore)
          }
        />
        <Player
          playerNumber={2}
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
        />
      </div>
    );
  }
}

export default DiceGame;
