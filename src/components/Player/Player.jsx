import PlayerTitle from "../PlayerTitle/PlayerTitle";
import GlobalScore from "../GlobalScore/GlobalScore";
import CurrentScore from "../CurrentScore/CurrentScore";
import "./Player.css";

function Player(props) {
  return (
    <div className="Player">
      <div className="top-player-container">
        <PlayerTitle
          className="PlayerTitle"
          text={`player${props.playerNumber}`}
        />
        <GlobalScore globalScore={props.globalScore[props.playerNumber - 1]} />
      </div>
      <CurrentScore score={props.currentScore[props.playerNumber - 1]} />
    </div>
  );
}

export default Player;
