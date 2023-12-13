import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { useAuth } from "../auth/AuthContext";

export const SignUpForm = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { logup, token } = useAuth();

	const handleLogin = () => {
		logup(username, email, password);
	};

	useEffect(() => {
		token && navigation.navigate("HomeTabs");
	}, [token]);

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				value={username}
				onChangeText={(text) => setUsername(text)}
				placeholder='username'
				type='text'
			/>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={(text) => setEmail(text)}
				placeholder='email'
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
			<Button title='Sign up' onPress={handleLogin} />
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
