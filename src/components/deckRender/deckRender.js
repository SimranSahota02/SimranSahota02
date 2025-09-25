import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/deckRender.css";

const blockRenderers = {
  title: (block, i) => (
    <h1 key={i} id={`${i}`}>
      {block.content}
    </h1>
  ),
  heading: (block, i) => (
    <h2 key={i} id={`${i}`}>
      {block.content}
    </h2>
  ),
  subheading: (block, i) => <h3 key={i}>{block.content}</h3>,
  paragraph: (block, i) => <p key={i}>{block.content}</p>,
  imageCaption: (block, i) => (
    <p key={i} className="image-caption">
      {block.content}
    </p>
  ),
  image: (block, i) => (
    <img
      key={i}
      src={`${process.env.PUBLIC_URL}${block.src}`}
      alt={block.alt || ""}
    />
  ),
  link: (block, i) => (
    <a key={i} href={`https://${block.href}`} target="_blank">
      {block.content}
    </a>
  ),
};

const DeckRender = () => {
  const { format, deckId } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    import(`./data/${format}/${deckId}.json`)
      .then((module) => setContent(module.default))
      .catch((err) => console.error("Error loading article:", err));
  }, [format, deckId]);

  const headings = content
    .map((block, i) => {
      if (block.type === "title" || block.type === "heading") {
        return {
          id: `${i}`,
          text: block.content,
          type: block.type,
          index: i,
        };
      }
    })
    .filter(Boolean);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="deck-wrapper">
      <nav className="deck-menu">
        <ul>
          {headings.map((h, i) => (
            <li key={i} className={h.type}>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(h.id);
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="deck-article-container">
        <div className="deck-article">
          {content.map(
            (block, i) => blockRenderers[block.type]?.(block, i) || null
          )}
        </div>
      </div>
    </div>
  );
};

export default DeckRender;
