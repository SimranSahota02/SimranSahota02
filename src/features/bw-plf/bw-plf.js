import React, { useState } from "react";
import "../../styles/tcg-guides.css";
import FormatPanel from "../../components/formatpanel";
import CardViewer from "../../components/cardviewer";

function BwPlf() {
  const [inputValue, setInputValue] = useState("");
  const [submittedCardId, setSubmittedCardId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSubmittedCardId(inputValue.trim());
    }
  };

  return (
    <div className="content dpul-bg">
      <div className="format-panel">
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <label htmlFor="card-id">Card ID:</label>
          <br />
          <input
            id="card-id"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="bw9-31"
            style={{ padding: "0.5rem", width: "200px", marginTop: "0.5rem" }}
          />
          <br />
          <button
            type="submit"
            style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
          >
            View Card
          </button>
        </form>

        {submittedCardId && (
          <div>
            <CardViewer cardId={submittedCardId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BwPlf;
