import ListDecks from "../../components/listDecks";
import "../../styles/tcg-guides.css";

function BstPaf() {
  const decks = [];
  const format = "bst-paf";

  return (
    <div className="content bst-paf-bg">
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
          <p>NO Supporter card.</p>
          <p className="belowpad">MAY play Trainer, Tool and Stadium cards.</p>
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

export default BstPaf;
