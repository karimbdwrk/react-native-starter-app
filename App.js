import React from "react";
import { StatusBar } from "expo-status-bar";
import { EnvironmentProvider } from "swiftui-react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider } from "./src/auth/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";

import HomeTabsScreen from "./src/screens/HomeTabsScreen";
import HelloScreen from "./src/screens/HelloScreen";
import StarterScreen from "./src/screens/StarterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import EditAccountScreen from "./src/screens/EditAccountScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ThemeProvider>
			<EnvironmentProvider colorScheme='dark'>
				<NavigationContainer>
					<AuthProvider>
						<StatusBar style='dark' />
						<Stack.Navigator>
							<Stack.Group>
								<Stack.Screen
									name='Starter'
									component={StarterScreen}
									options={{
										headerShown: false,
									}}
								/>
								<Stack.Screen
									name='Hello'
									component={HelloScreen}
									options={{
										headerShown: false,
									}}
								/>
								<Stack.Screen
									name='HomeTabs'
									component={HomeTabsScreen}
									options={{
										headerShown: false,
									}}
								/>
								<Stack.Screen
									name='EditAccount'
									component={EditAccountScreen}
								/>
							</Stack.Group>
							<Stack.Group>
								<Stack.Screen
									name='SignIn'
									component={SignInScreen}
								/>
								<Stack.Screen
									name='SignUp'
									component={SignUpScreen}
								/>
							</Stack.Group>
						</Stack.Navigator>
					</AuthProvider>
				</NavigationContainer>
			</EnvironmentProvider>
		</ThemeProvider>
	);
}
