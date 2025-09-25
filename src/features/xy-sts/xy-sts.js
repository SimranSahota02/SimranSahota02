import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function XySts() {
  const decks = [];
  const format = "xy-sts";

  return (
    <div className="content xy-sts-bg">
      <div className="three-panel">
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Resources</h1>
        </div>

        <div className="panel textbox">
          <h1>Format Rules</h1>
          <p className="belowpad">
            Winner of coin flip chooses who goes first, determined before setup.
          </p>
          <h2>Turn 1 Going first</h2>
          <p>NO attack.</p>
          <p className="belowpad">
            MAY play Trainer, Tool, Stadium and Supporter cards.
          </p>
          <h2>Special Conditions</h2>
          <p>
            Burn: Pokemon stays burned between turns. Flip a coin between turns,
            if tails the burned Pokemon takes 20 damage.
          </p>
          <p>All other conditions same as modern.</p>
        </div>
      </div>
    </div>
  );
}

export default XySts;
