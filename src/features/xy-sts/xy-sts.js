import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function XySts() {
  const decks = ["Night March", "M Manectric Garb"];
  const format = "xy-sts";

  return (
    <div className="content xy-sts-bg">
      <div className="three-panel">
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Resources</h1>
          <p>
            <a href="https://limitlesstcg.com/tournaments/140" target="_blank">
              Limitless TCG 2016 Worlds Standings
            </a>
          </p>
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
          <p className="belowpad">All other conditions same as modern.</p>
          <h2>Format Specifics</h2>
          <p>
            Pokemon EX are all Basic Pokemon, and give up 2 Prizes when KOed.
            Pokemon M EX evolve from Pokemon EX and also give up 2 Prizes,
            additionally your turn ends when evolving into a Pokemon M EX.
          </p>
          <p>
            Pokemon BREAK evolve as usual, can use the attacks and abilities
            from the stage below the BREAK card and similarly they inherit the
            Weakness, Resistance and Retreat from the stage below.
          </p>
        </div>
      </div>
    </div>
  );
}

export default XySts;
