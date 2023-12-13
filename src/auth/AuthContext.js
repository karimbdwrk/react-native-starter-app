import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { storeToken, checkToken, clearToken } from "../helpers";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [userMe, setUserMe] = useState(null);
	const [isEdited, setIsEdited] = useState(false);

	const login = async (username, password) => {
		// Effectuer la requête d'authentification ici avec fetch ou toute autre bibliothèque
		const value = {
			identifier: username,
			password,
		};

		try {
			// Supposons que le serveur renvoie un token après une authentification réussie
			const response = await fetch(
				"http://localhost:1337/api/auth/local",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(value),
				}
			);

			const data = await response.json();

			if (response.ok) {
				const authToken = data.jwt;
				setToken(authToken);
				await storeToken(authToken);
			} else {
				console.error("Authentication failed:", data.error);
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	const logup = async (username, email, password) => {
		// Effectuer la requête d'authentification ici avec fetch ou toute autre bibliothèque
		const value = {
			username,
			email,
			password,
		};

		try {
			// Supposons que le serveur renvoie un token après une authentification réussie
			const response = await fetch(
				"http://localhost:1337/api/auth/local/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(value),
				}
			);

			const data = await response.json();

			if (response.ok) {
				const authToken = data.jwt;
				setToken(authToken);
				await storeToken(authToken);
			} else {
				console.error("Authentication failed:", data.error);
			}
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	const logout = async () => {
		// Effectuer les actions nécessaires lors de la déconnexion
		setToken(null);
		await clearToken();
	};

	useEffect(() => {
		retrieveToken();
	}, []);

	useEffect(() => {
		getMe(token);
		setIsEdited(false);
	}, [token, isEdited]);

	const retrieveToken = async () => {
		try {
			const storedToken = await AsyncStorage.getItem("authToken");
			if (storedToken) {
				setToken(storedToken);
			}
		} catch (error) {
			console.error("Error retrieving token:", error);
		}
	};

	const getMe = async (jwt) => {
		try {
			// Supposons que le serveur renvoie un token après une authentification réussie
			const response = await fetch("http://localhost:1337/api/users/me", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt}`,
				},
			});

			const data = await response.json();
			console.log("data me :", data);
			setUserMe(data);
		} catch (error) {
			console.error("Error during authentication:", error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				login,
				logup,
				logout,
				userMe,
				setUserMe,
				setIsEdited,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
