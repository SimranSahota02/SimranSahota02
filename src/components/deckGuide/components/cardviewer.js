import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/deckguide.css";

function CardViewer({ cardId, className = "" }) {
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

  if (loading) return <p>Loading...</p>;
  if (!card) return <p>Card not found</p>;

  return (
    <div className={`card ${className}`}>
      <img src={card.images.large} alt={card.name} className="card-image" />
    </div>
  );
}

export default CardViewer;
