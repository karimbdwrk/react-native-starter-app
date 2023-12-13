import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "swiftui-react-native";

import api from "../utils/api";
import { useAuth } from "../auth/AuthContext";
import { PUT_USER } from "../queries/putUser";

const EditAccountScreen = ({ navigation, route }) => {
	const { userMe, setUserMe, setIsEdited, token } = useAuth();

	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState(route.params.username);
	const [email, setEmail] = useState(route.params.email);

	const putData = async (id, username, email) => {
		setLoading(true);
		try {
			const response = await api.post(
				"/graphql",
				PUT_USER(id, username, email)
			);
			setUserMe(response.data.data.updateUsersPermissionsUser.data);
			setIsEdited(true);
			navigation.navigate("Account");
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error("Error fetching data:", error);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 15,
			}}>
			{loading && <Text>Loading ...</Text>}
			<View style={styles.form}>
				<Text>{userMe.id}</Text>
				<Text>{token}</Text>
				<TextInput
					style={styles.input}
					value={username}
					placeholder='username'
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					style={styles.input}
					value={email}
					placeholder='email'
					onChangeText={(text) => setEmail(text)}
				/>
				<Button
					title='Edit'
					action={() => putData(userMe.id, username, email)}
					buttonStyle='borderedProminent'
				/>
			</View>
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

export default EditAccountScreen;
