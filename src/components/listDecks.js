import { Link } from "react-router-dom";

const ListDecks = ({ decks, format }) => {
  return (
    <div className="panel textbox">
      <h1>My Decks</h1>
      <ul>
        {decks.map((deckName) => (
          <li key={deckName}>
            <Link to={`/${format}/decks/${deckName.toLowerCase()}`}>
              {deckName}
              <img
                src={`${process.env.PUBLIC_URL}/decks/${format}/${deckName.toLowerCase()}/pixel.png`}
                alt={""}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDecks;
