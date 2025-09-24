import "../../styles/tcg-guides.css";
import { Link } from "react-router-dom";

function RsPk() {
  const decks = ["BombTar", "DragTile", "Imprison"];

  return (
    <div className="content rs-pk-bg">
      <div className="top-section">
        <div className="textbox">
          {decks.map((deckName) => (
            <li key={deckName}>
              <Link to={`/rs-pk/decks/${deckName.toLowerCase()}`}>
                {deckName}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RsPk;
