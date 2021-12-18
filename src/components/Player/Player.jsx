import PlayerTitle from "../PlayerTitle/PlayerTitle";
import GlobalScore from "../GlobalScore/GlobalScore";
import CurrentScore from "../CurrentScore/CurrentScore";
import "./Player.css";

function Player(props) {
  const activePlayer = () =>
    props.playerNumber === props.currentPlayer ? "player active" : "player";
  return (
    <div className={activePlayer()}>
      <div className="top-player-container">
        <PlayerTitle text={props.PlayerTitle} />
        <GlobalScore globalScore={props.globalScore[props.playerNumber - 1]} />
      </div>
      <CurrentScore score={props.currentScore[props.playerNumber - 1]} />
    </div>
  );
}

export default Player;
