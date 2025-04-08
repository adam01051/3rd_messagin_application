import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "./pages/SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SignupPage /> {/* need to change it to <App /> */}
    </BrowserRouter>
  </StrictMode>
);
