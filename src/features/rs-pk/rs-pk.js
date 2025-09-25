import "../../styles/tcg-guides.css";
import ListDecks from "../../components/listDecks";

function RsPk() {
  const decks = ["BombTar", "DragTile", "Imprison", "RayLer"];
  const format = "rs-pk";

  return (
    <div className="content rs-pk-bg">
      <div className="three-panel">
        <div className="panel textbox">
          <h1>Format Resources</h1>
          <p>
            <a
              href="https://ofecho.substack.com/p/the-standard-players-guide-to-rs"
              target="_blank"
              rel="noreferrer"
            >
              The Standard Player's Guide to RS-PK
            </a>
          </p>
          <p>
            <a
              href="https://holonresearchtower.com/"
              target="_blank"
              rel="noreferrer"
            >
              Holon Research Tower
            </a>
          </p>
        </div>
        <ListDecks decks={decks} format={format} />
        <div className="panel textbox">
          <h1>Format Rules</h1>
          <h2>Turn 1 Going first</h2>
          <p>NO draw for turn</p>
          <p>NO Supporter card</p>
          <p>MAY attack</p>
          <p>MAY play Trainer, Tool, Stadium cards</p>
        </div>
      </div>
    </div>
  );
}

export default RsPk;
