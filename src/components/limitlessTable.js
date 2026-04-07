import React from "react";
import { useGetSceptileExDecksQuery } from "../api/limitless/limitlessapi";

const LimitlessTable = () => {
  const { data: decks, isLoading, error } = useGetSceptileExDecksQuery();

  if (isLoading) return <p>Loading Sceptile decks...</p>;
  if (error || !decks?.length)
    return <p>No players found with Sceptile in EX tournaments.</p>;

  // Group by player
  const grouped = decks.reduce((acc, d) => {
    const player = d.playerName || "Unknown Player";
    if (!acc[player]) acc[player] = [];
    acc[player].push({
      deckName: d.name || "Unknown Deck",
      tournamentName: d.tournamentName || "Unknown Tournament",
    });
    return acc;
  }, {});

  return (
    <div>
      <h2>Players who played Sceptile in EX tournaments</h2>
      {Object.entries(grouped).map(([player, entries]) => (
        <div key={player} style={{ marginBottom: "1em" }}>
          <h3>
            {player} — {entries.length} deck(s)
          </h3>
          <ul>
            {entries.map((e, idx) => (
              <li key={idx}>
                {e.deckName} — {e.tournamentName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LimitlessTable;
