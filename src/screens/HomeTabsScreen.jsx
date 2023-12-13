import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import { useAuth } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const HomeTabsScreen = ({ navigation }) => {
	const { login, logout, token } = useAuth();
	const { darkMode, setDarkMode } = useTheme();

	useEffect(() => {
		console.log(token ? "isAuth" : "!isAuth");
	}, []);

	const handleLogOut = async () => {
		try {
			logout();
		} catch (error) {
			console.error(
				"Clear // Erreur lors de la vérification du token:",
				error
			);
		}
		navigation.navigate("Hello");
	};

	return (
		<Tab.Navigator
			screenOptions={{
				headerRight: () => (
					<>
						<TouchableOpacity
							style={styles.button}
							onPress={handleLogOut}
							color='#303030'>
							<Ionicons
								name='md-power-outline'
								size={24}
								color={darkMode ? "#F7F7F7" : "#101010"}
							/>
						</TouchableOpacity>
					</>
				),
				headerStyle: {
					backgroundColor: darkMode ? "#101010" : "#F7F7F7",
				},
				headerTintColor: darkMode ? "#F7F7F7" : "#101010",
				tabBarStyle: {
					backgroundColor: darkMode ? "#101010" : "#F7F7F7",
				},
				tabBarActiveTintColor: darkMode ? "#F7F7F7" : "#101010",
				tabBarInactiveTintColor: darkMode ? "#B7B7B7" : "#606060",
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: () => (
						<Ionicons
							name='home-outline'
							size={24}
							color={darkMode ? "#F7F7F7" : "#101010"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Account'
				component={AccountScreen}
				options={{
					tabBarIcon: () => (
						<Ionicons
							name='person-outline'
							size={24}
							color={darkMode ? "#F7F7F7" : "#101010"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
});

export default HomeTabsScreen;
