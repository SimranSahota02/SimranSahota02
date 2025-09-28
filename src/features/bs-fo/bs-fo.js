import ListDecks from "../../components/listDecks";
import "../../styles/tcg-guides.css";

function BsFo() {
  const decks = [];
  const format = "bs-fo";

  return (
    <div className="content">
      <div className="three-panel">
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Resources</h1>
          <p>
            <a
              href="https://ptcgarchive.com/wotc-decks/base-fossil/"
              target="_blank"
            >
              PTCG Archive BS-FO Decks
            </a>
          </p>
        </div>

        <div className="panel textbox">
          <h1>Format Rules</h1>
        </div>
      </div>
    </div>
  );
}

export default BsFo;
