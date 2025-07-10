import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
