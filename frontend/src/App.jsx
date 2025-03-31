// import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
// import { useAuthStore } from "./lib/useAuthStore";

function App() {
	// const { authUser, checkAuth } = useAuthStore();
	

	// useEffect(() => {
	// 	checkAuth()
	// }, [checkAuth])

	return (
		
		<div>

			<Navbar />
			
			<Routes>
				
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/setting" element={<SettingsPage />} />
				<Route path="/profilepage" element={<ProfilePage />} />
			</Routes>
		</div>
	);
}

export default App;
