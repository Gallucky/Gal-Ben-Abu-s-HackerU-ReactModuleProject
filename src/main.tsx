import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Making sure the webpage reloads automatically on save.
// Help got from:
// https://stackoverflow.com/questions/70996320/enable-hot-reload-for-vite-react-project-instead-of-page-reload
// Worked even after commenting this line.
// import.meta.hot;

import "./index.css";
import "./styles/CustomNavbar.css";
import "./styles/SearchBox.css";
import "./styles/DarkModeButton.css";
import "./styles/fonts.css";
import "./styles/CustomFooter.css";
import "./styles/test.css";
import "./styles/pages/Error.page.css";
import "./styles/pages/Login.page.css";
import "./styles/FormInput.css";
import "./styles/FormButton.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
