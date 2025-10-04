import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function RsPk() {
  const decks = ["BombTar", "DragTile", "Imprison", "RayLer"];
  const format = "rs-pk";

  return (
    <div className="content rs-pk-bg">
      <div className="three-panel">
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Resources</h1>
          <p>
            <a
              href="https://ofecho.substack.com/p/the-standard-players-guide-to-rs"
              target="_blank"
            >
              The Standard Player's Guide to RS-PK
            </a>
          </p>
          <p>
            <a href="https://holonresearchtower.com/" target="_blank">
              Holon Research Tower
            </a>
          </p>
          <p>
            <a href="https://ptcgarchive.com/rs-pk-decks/" target="_blank">
              PTCG Archive RS-PK Decks
            </a>
          </p>
          <p>
            <a href="https://note.com/kanten620" target="_blank">
              Kanten Magic Hand Note
            </a>
          </p>
          <p>
            <a href="https://note.com/littleriver4431" target="_blank">
              Little River Note
            </a>
          </p>
        </div>

        <div className="panel textbox">
          <h1>Format Rules</h1>
          <p className="belowpad">
            Winner of coin flip goes first, determined after setup.
          </p>
          <h2>Turn 1 Going first</h2>
          <p>NO draw for turn.</p>
          <p>NO Supporter card.</p>
          <p>MAY attack.</p>
          <p className="belowpad">MAY play Trainer, Tool and Stadium cards.</p>
          <h2>Special Conditions</h2>
          <p>
            Burn: Pokemon stays burned between turns. Flip a coin between turns,
            if tails the burned Pokemon takes 20 damage.
          </p>
          <p className="belowpad">All other conditions same as modern.</p>
          <h2>Format Specifics</h2>
          <p>Pokemon ex - evolve as usual, give up 2 Prizes when KOed.</p>
          <p>
            Pokemon Delta - evolve as usual, denoted by δ on the card. Can be
            dual type or Pokemon ex/Star.
          </p>
          <p>
            Dark Pokemon - Stage 1 Dark Pokemon evolve as usual, but Stage 2s
            only evolve from the respective Dark Stage 1 Pokemon. Can be dual
            type. Team Magma/Aqua's Pokemon - evolve from respective Team
            Magma/Aqua 's previous stage.
          </p>
          <p>Pokemon Star - capped at one Pokemon Star per deck.</p>
          <p>
            Technical Machines - not Tool cards, and may be attached at the same
            time as a Tool card.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RsPk;
