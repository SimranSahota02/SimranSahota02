import "../styles/tcg-guides.css";
import Home from "../features/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DpUl from "../features/dp-ul/dp-ul";
import SumLot from "../features/sum-lot/sum-lot";
import Glc from "../features/glc/glc";
import BstPaf from "../features/bst-paf/bst-paf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dp-ul" element={<DpUl />} />
      <Route path="/sum-lot" element={<SumLot />} />
      <Route path="/bst-paf" element={<BstPaf />} />
      <Route path="/glc" element={<Glc />} />
    </Routes>
  );
}

export default App;
