import "./PlayerTitle.css";

function PlayerTitle(props) {
  const playerTitleColor = () =>
    props.text === "winner" ? "player-title winner" : "player-title";

  return <div className={playerTitleColor()}>{props.text}</div>;
}

export default PlayerTitle;
