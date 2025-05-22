import { HashRouter } from "react-router-dom";
import App from "./App";
import Header from "../components/header";

function Main() {
  return (
    <HashRouter>
      <Header />
      <App />
    </HashRouter>
  );
}

export default Main;
