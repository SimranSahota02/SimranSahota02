import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "../components/header";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  );
}

export default Main;
