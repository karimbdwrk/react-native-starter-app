import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "../auth/AuthContext";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
	const { login, logout, token, userMe } = useAuth();

	useEffect(() => {
		console.log("home screen isAuth", token);
		console.log("home screen Me", userMe);
	}, []);

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 15,
			}}>
			<Text>Home Screen</Text>
			<Text>
				Hello {userMe?.username} - id: {userMe?.id}
			</Text>
			<Text>{token}</Text>
			{token ? (
				<Text>is authenticated</Text>
			) : (
				<Text>is not authenticated</Text>
			)}
		</View>
	);
};

export default HomeScreen;
