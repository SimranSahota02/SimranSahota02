import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function SumLot() {
  const decks = [
    "BuzzRocTales",
    "Gardevoir GX",
    "Lost March",
    "Malamar",
    "Passimian Spread",
    "ZoroDeciTales",
    "ZoroGyarados",
  ];
  const format = "sum-lot";

  return (
    <div className="content sum-lot-bg">
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
          <h2>Format Specifics</h2>
          <p>
            Pokemon GX - evolve as usual, give up 2 prizes when KOed and have a
            GX attack. You may only use one GX attack per game.
          </p>
          <p>
            Prism cards are capped at one of each per deck and go to the Lost
            Zone when they would be discarded.
          </p>
          <p>
            Ultra Beasts are denoted by the tag "Ultra Beast" near the top right
            of the card.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SumLot;
