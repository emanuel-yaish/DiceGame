import Player from "../Player/Player";
import GamePlay from "../GamePlay/GamePlay";
import "./DiceGame.css";

function DiceGame() {
  return (
    <div className="DiceGame">
      <Player activePlayer="active-player" playerNumber={1} />
      <GamePlay />
      <Player playeNumber={2} />
    </div>
  );
}

export default DiceGame;
