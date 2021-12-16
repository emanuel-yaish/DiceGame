import GameAction from "../GameAction/GameAction";
import Dice from "../Dice/Dice";
import TotalScore from "../TotalScore/TotalScore";
import "./GamePlay.css";

function GamePlay() {
  return (
    <div className="GamePlay">
      <GameAction label="New Game" />
      <Dice />
      <Dice />
      <GameAction label="Roll Dice" />
      <GameAction label="Hold" />
      <TotalScore />
    </div>
  );
}

export default GamePlay;
