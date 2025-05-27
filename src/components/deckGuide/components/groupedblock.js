import React from "react";
import CardViewer from "./cardviewer";
import CardHover from "./cardhover";
import cardReferences from "../data/cardrefs.json";

const renderParagraph = (text) => {
  const parts = [];
  let lastIndex = 0;

  const entries = Object.entries(cardReferences);
  const regex = new RegExp(
    `\\b(${entries.map(([name]) => name).join("|")})\\b`,
    "gi"
  );

  let match;
  while ((match = regex.exec(text)) !== null) {
    const matchText = match[0];
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const id = cardReferences[matchText];
    parts.push(<CardHover key={matchIndex} name={matchText} id={id} />);

    lastIndex = matchIndex + matchText.length;
  }

  parts.push(text.substring(lastIndex));

  return <p>{parts}</p>;
};

const GroupedBlock = ({ items }) => {
  return (
    <div className="grouped-block">
      {items.map((item, index) => {
        if (item.type === "section") {
          return (
            <div key={index} className="deck-section">
              <h2>{item.title}</h2>
              {renderParagraph(item.paragraph)}
            </div>
          );
        }

        if (item.type === "card") {
          const className = `${item.size || ""} ${item.align || ""}`.trim();
          return (
            <CardViewer key={index} cardId={item.id} className={className} />
          );
        }

        return null;
      })}
    </div>
  );
};

export default GroupedBlock;
