import Player from "../Player/Player";
import GamePlay from "../GamePlay/GamePlay";
import "./DiceGame.css";
import React from "react";

class DiceGame extends React.Component {
  state = {
    currentScore: [0, 0],
    globalScore: [0, 0],
    playersTitle: ["player1", "player2"],
    winnerPlayerNumber: 0,
    currentPlayer: 1,
  };

  updateCurrentPlayer = (playerNumber) => {
    this.setState({ currentPlayer: playerNumber });
  };

  updateWinnerPlayer = (winnerPlayerNumber) => {
    const playersTitle = ["player1", "player2"];

    if (winnerPlayerNumber !== 0) {
      playersTitle[winnerPlayerNumber - 1] = "winner";
    }

    this.setState({ playersTitle: playersTitle });
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
          currentPlayer={this.state.currentPlayer}
          PlayerTitle={this.state.playersTitle[0]}
          playerNumber={1}
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
        />
        <GamePlay
          currentPlayer={this.state.currentPlayer}
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
          updateCurrentPlayer={(playerNumber) =>
            this.updateCurrentPlayer(playerNumber)
          }
          updateCurrentScore={(newCurrentScore) =>
            this.updateCurrentScore(newCurrentScore)
          }
          updateGlobalScore={(newGlobalScore) =>
            this.updateGlobalScore(newGlobalScore)
          }
          updateWinnerPlayer={(winnerPlayerNumber) =>
            this.updateWinnerPlayer(winnerPlayerNumber)
          }
        />
        <Player
          currentPlayer={this.state.currentPlayer}
          PlayerTitle={this.state.playersTitle[1]}
          playerNumber={2}
          currentScore={this.state.currentScore}
          globalScore={this.state.globalScore}
        />
      </div>
    );
  }
}

export default DiceGame;
