import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupedBlock from "./components/groupedblock";
import "../../styles/deckguide.css";

const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key] || "ungrouped";
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

const GuideWrapper = () => {
  const { deckId } = useParams();
  const { format } = useParams();
  const [content, setContent] = useState([]);
  const grouped = groupBy(content, "group");
  const groupKeys = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

  useEffect(() => {
    import(`./data/${deckId}.json`)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => {
        console.error(`Failed to load JSON data for ${deckId}:`, error);
      });
  }, [deckId]);

  return (
    <div className={`content ${format}-bg`}>
      {groupKeys.map((groupKey) => (
        <GroupedBlock key={groupKey} items={grouped[groupKey]} />
      ))}
    </div>
  );
};

export default GuideWrapper;
