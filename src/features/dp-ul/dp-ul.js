import "../../styles/tcg-guides.css";
import FormatPanel from "../../components/formatpanel";
import { Link } from "react-router-dom";

function DpUl() {
  return (
    <div className="content dpul-bg">
      <FormatPanel body={"yappayappa"} href={"throw.gif"} />
      <li style={{ margin: "100px 0" }}>
        <Link to="/dpul/decks/2010GG">Gardevoir Gallade</Link>
      </li>
    </div>
  );
}

export default DpUl;
