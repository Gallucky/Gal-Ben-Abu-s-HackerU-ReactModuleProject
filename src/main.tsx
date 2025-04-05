import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/CustomNavbar.css";
import "./styles/SearchBox.css";
import "./styles/DarkModeButton.css";
import "./styles/fonts.css";
import "./styles/CustomFooter.css";
import "./styles/test.css";
import "./styles/Error.page.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
