import PlayerTitle from "../PlayerTitle/PlayerTitle";
import TurnScore from "../TurnScore/TurnScore";
import CurrentScore from "../CurrentScore/CurrentScore";
import "./Player.css";

function Player() {
  return (
    <div className="Player">
      <PlayerTitle className="PlayerTitle" text={"playerTitle"} />
      <TurnScore />
      <CurrentScore />
    </div>
  );
}

export default Player;
