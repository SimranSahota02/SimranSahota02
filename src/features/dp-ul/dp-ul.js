import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function DpUl() {
  const decks = [];
  const format = "dp-ul";

  return (
    <div className="content dp-ul-bg">
      <div className="three-panel">
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Resources</h1>
        </div>

        <div className="panel textbox">
          <h1>Format Rules</h1>
          <p className="belowpad">
            Winner of coin flip goes first, determined after setup.
          </p>
          <h2>Turn 1 Going first</h2>
          <p>NO Trainer, Tool, Stadium or Supporter cards.</p>
          <p className="belowpad">MAY attack.</p>
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

export default DpUl;
