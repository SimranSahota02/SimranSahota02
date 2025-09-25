import "../styles/tcg-guides.css";
import Home from "../features/home";
import { Routes, Route } from "react-router-dom";
import DpUl from "../features/dp-ul/dp-ul";
import SumLot from "../features/sum-lot/sum-lot";
import Glc from "../features/glc/glc";
import BstPaf from "../features/bst-paf/bst-paf";
import RsPk from "../features/rs-pk/rs-pk";
import XySts from "../features/xy-sts/xy-sts";
import BwPlf from "../features/bw-plf/bw-plf";
import BsFo from "../features/bs-fo/bs-fo";
import DeckRender from "../components/deckRender/deckRender";
import FormatLayout from "../globals/formatLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<FormatLayout />}>
        <Route path="/:format/decks/:deckId" element={<DeckRender />} />
        <Route path="/dp-ul" element={<DpUl />} />
        <Route path="/rs-pk" element={<RsPk />} />
        <Route path="/bw-plf" element={<BwPlf />} />
        <Route path="/xy-sts" element={<XySts />} />
        <Route path="/sum-lot" element={<SumLot />} />
        <Route path="/bst-paf" element={<BstPaf />} />
        <Route path="/glc" element={<Glc />} />
        <Route path="/bs-fo" element={<BsFo />} />
      </Route>
    </Routes>
  );
}

export default App;
