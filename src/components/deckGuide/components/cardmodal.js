import CardViewer from "./cardviewer";
import "../../../styles/deckguide.css";

const CardModal = ({ cardId, onClose }) => {
  if (!cardId) return null;

  return (
    <div className="card-modal-overlay" onClick={onClose}>
      <CardViewer cardId={cardId} className="large" />
    </div>
  );
};

export default CardModal;
