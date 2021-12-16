import PlayerTitle from "../PlayerTitle/PlayerTitle";
import TurnScore from "../TurnScore/TurnScore";
import CurrentScore from "../CurrentScore/CurrentScore";
import "./Player.css";

function Player() {
  return (
    <div className="Player">
      <div className="top-player-container">
        <PlayerTitle className="PlayerTitle" text={"playerTitle"} />
        <TurnScore />
      </div>
      <CurrentScore />
    </div>
  );
}

export default Player;
