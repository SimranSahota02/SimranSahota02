import React, { useState } from "react";
import CardViewer from "./cardviewer";
import "../../../styles/deckguide.css";

const CardHover = ({ name, id }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="hover-card-name"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
      {hovered && (
        <div className="hover-preview">
          <CardViewer cardId={id} className="large" />
        </div>
      )}
    </span>
  );
};

export default CardHover;
