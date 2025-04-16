import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginPage />; <App />
      {/*if we take away SingnupPage the login will not show  */}
      {/* But in order it successfuly created a user we need to take away SignupPage */}
    </BrowserRouter>
  </StrictMode>
);
