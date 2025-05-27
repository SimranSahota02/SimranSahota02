import "../styles/tcg-guides.css";

function FormatPanel({ body, image, title, body2 = "" }) {
  return (
    <div className="format-panel">
      <div>{body}</div>
    </div>
  );
}

export default FormatPanel;
