import React from "react";
import { useParams } from "react-router-dom";

const DECK_DATA = {
  fire: {
    title: "Fire Deck",
    description: "A blazing deck filled with aggressive plays.",
  },
  water: {
    title: "Water Deck",
    description: "A cool deck with control and healing strategies.",
  },
};

function GuideWrapper() {
  const { deckId } = useParams();
  const deck = DECK_DATA[deckId];

  if (!deck) {
    return <div>Deck not found</div>;
  }

  return (
    <div className="content dpul-deck">
      <h1>{deck.title}</h1>
      <p>{deck.description}</p>
    </div>
  );
}

export default GuideWrapper;
