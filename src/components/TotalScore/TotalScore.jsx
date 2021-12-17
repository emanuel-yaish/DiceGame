import React from "react";
import "./TotalScore.css";

class TotalScore extends React.Component {
  totalScoreType = () => {
    if (!this.props.gameStarted)
      return (
        <input
          onChange={(e) => this.props.updateWinnerScore(e.target.value)}
          type="number"
          className="total-score-input"
          placeholder="Final Score"
        />
      );

    return <div className="total-score">{this.props.winnerScore}</div>;
  };

  render() {
    return this.totalScoreType();
  }
}

export default TotalScore;
