import "../../styles/tcg-guides.css";
import { Link } from "react-router-dom";

function RsPk() {
  return (
    <div className="content rs-pk-bg">
      <div className="top-section">
        <div className="textbox">
          <Link to="/rs-pk/decks/bombtar">BombTar</Link>
        </div>
      </div>
    </div>
  );
}

export default RsPk;
