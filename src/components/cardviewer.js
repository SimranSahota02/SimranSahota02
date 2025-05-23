import React, { useEffect, useState } from "react";
import axios from "axios";

function CardViewer({ cardId }) {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cardId) return;

    const fetchCard = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://api.pokemontcg.io/v2/cards/${cardId}`
        );
        setCard(response.data.data);
      } catch (err) {
        setCard(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [cardId]);
  if (loading) return <p>Loading</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={card.images.large}
        alt={card.name}
        style={{ transform: "scale(0.5)", transformOrigin: "top left" }}
      />
    </div>
  );
}

export default CardViewer;
