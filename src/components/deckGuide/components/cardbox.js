import { useState } from "react";
import CardViewer from "./cardviewer";
import CardModal from "./cardmodal";
import "../../../styles/deckguide.css";

const CardBox = ({ ids = [], cardSize = "medium" }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div className="card-box">
        {ids.map((cardId, index) => (
          <div
            key={index}
            className="clickable-card"
            onClick={() => handleCardClick(cardId)}
            style={{ cursor: "pointer" }}
          >
            <CardViewer cardId={cardId} className={cardSize} />
          </div>
        ))}
      </div>
      <CardModal cardId={selectedCard} onClose={closeModal} />
    </>
  );
};

export default CardBox;
