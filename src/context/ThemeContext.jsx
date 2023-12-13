import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		async function loadTheme() {
			const savedTheme = await AsyncStorage.getItem("theme");
			if (savedTheme) {
				setDarkMode(savedTheme === "dark");
			} else {
				setDarkMode("light");
			}
		}
		loadTheme();
	}, []);

	const toggleDarkMode = async () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		await AsyncStorage.setItem("theme", newMode ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
