import "./CurrentScore.css";

function CurrentScore(props) {
  return (
    <div className="current-score">
      <h4 className="current-score-title">Current</h4>
      <p className="current-score-value">{props.score}</p>
    </div>
  );
}

export default CurrentScore;
