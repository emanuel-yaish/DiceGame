import "./Dice.css";

function Dice(props) {
  console.log(props.diceNumber);
  return <div className={`dice dice-${props.diceNumber}`}></div>;
}

export default Dice;
