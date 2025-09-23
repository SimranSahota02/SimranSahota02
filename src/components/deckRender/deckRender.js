import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/deckRender.css";

const DeckRender = () => {
  const { format, deckId } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    import(`./data/${format}/${deckId}.json`)
      .then((module) => setContent(module.default))
      .catch((err) => console.error("Error loading article:", err));
  }, [format, deckId]);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "title":
        return <h1 key={index}>{block.content}</h1>;
      case "subtitle":
        return <h2 key={index}>{block.content}</h2>;
      case "paragraph":
        return <p key={index}>{block.content}</p>;
      case "image":
        return <img key={index} src={block.src} alt={block.alt || ""} />;
      case "imageCaption":
        return (
          <p key={index} className="image-caption">
            {block.content}
          </p>
        );
      default:
        return null;
    }
  };

  return <div className="deck-article">{content.map(renderBlock)}</div>;
};

export default DeckRender;
