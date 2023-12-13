import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { useAuth } from "../auth/AuthContext";

export const SignInForm = ({ navigation }) => {
	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");

	const { login, token } = useAuth();

	const handleLogin = () => {
		login(identifier, password);
	};

	useEffect(() => {
		token && navigation.navigate("HomeTabs");
	}, [token]);

	return (
		<View style={styles.form}>
			<Text>{token}</Text>
			<TextInput
				style={styles.input}
				value={identifier}
				onChangeText={(text) => setIdentifier(text)}
				placeholder='username or email'
				type='text'
			/>
			<TextInput
				style={styles.input}
				value={password}
				onChangeText={(text) => setPassword(text)}
				placeholder='password'
				type='password'
				secureTextEntry={true}
			/>
			<Button title='Sign in' onPress={handleLogin} />
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		padding: 15,
		width: "100%",
	},
	input: {
		fontSize: 16,
		borderWidth: 1,
		borderColor: "#303030",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: "100%",
		marginBottom: 10,
	},
});
