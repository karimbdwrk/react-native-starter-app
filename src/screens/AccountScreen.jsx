import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, Button, Switch } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
	Toggle,
	useBinding,
	VStack,
	HStack,
	Text,
	useEnvironment,
	Button as Btn,
} from "swiftui-react-native";

import api from "../utils/api";
import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";

// import { styles } from "../styles/styles";

const AccountScreen = ({ navigation }) => {
	const { userMe } = useAuth();
	const { darkMode, toggleDarkMode } = useTheme();
	const { colorScheme, setValues } = useEnvironment();

	const [username, setUsername] = useState(userMe.username);
	const [email, setEmail] = useState(userMe.email);

	useFocusEffect(
		useCallback(() => {
			setUsername(userMe.username);
			setEmail(userMe.email);
			console.log("darkMode :", darkMode);
			console.log("user me :", userMe);
		}, [])
	);

	const styles = {
		text: {
			color: darkMode ? "#F7F7F7" : "#101010",
		},
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				padding: 15,
				backgroundColor: darkMode ? "#303030" : "#F7F7F7",
			}}>
			<View
				style={{
					flex: 1,
				}}>
				<Text style={styles.text}>{userMe.id}</Text>
				<Text style={styles.text}>{username}</Text>
				<Text style={styles.text}>{email}</Text>
				<Button
					title='Edit'
					onPress={() =>
						navigation.navigate("EditAccount", {
							id: userMe.id,
							username: username,
							email: email,
						})
					}
				/>
				<Switch value={darkMode} onValueChange={toggleDarkMode} />
				{/* <Toggle isOn={toggleDarkMode} /> */}
				<Btn
					title={`${colorScheme} mode`}
					action={() => {
						setValues({
							colorScheme:
								colorScheme === "light" ? "dark" : "light",
						});
					}}
				/>
			</View>
		</View>
	);
};

export default AccountScreen;
