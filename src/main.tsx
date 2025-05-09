import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Making sure the webpage reloads automatically on save.
// Help got from:
// https://stackoverflow.com/questions/70996320/enable-hot-reload-for-vite-react-project-instead-of-page-reload
// Worked even after commenting this line.
// import.meta.hot;

// Base Styles
import "./index.css";
import "./styles/fonts.css";

// Form Styles
import "./styles/form/FormInput.css";
import "./styles/form/FormButton.css";

// Layout Styles
import "./styles/layout/CustomNavbar.css";
import "./styles/layout/CustomFooter.css";
import "./styles/layout/PageWrapper.css";

// Page Styles
import "./styles/pages/Error.page.css";

// Utilities Styles
import "./styles/utils/CheckBox.css";

// Other Styles
import "./styles/SearchBox.css";
import "./styles/DarkModeButton.css";
import "./styles/test.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
