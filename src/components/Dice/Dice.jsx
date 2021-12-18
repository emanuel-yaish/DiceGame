import "./Dice.css";

function Dice(props) {
  return <div className={`dice dice-${props.diceNumber}`}></div>;
}

export default Dice;
