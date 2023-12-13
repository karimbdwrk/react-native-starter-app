import React, { useEffect } from "react";
import { View } from "react-native";
import { VStack, Image, Text, Button } from "swiftui-react-native";

import { useAuth } from "../auth/AuthContext";

const HelloScreen = ({ navigation }) => {
	const { login, logout, token } = useAuth();

	useEffect(() => {
		token && navigation.navigate("HomeTabs");
	}, [token]);

	return (
		<>
			<VStack spacing={5}>
				{/* <Image systemName='face.smiling' fontSize={50} /> */}
				<Text font='title'>Hello World!</Text>
			</VStack>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Text>{token}</Text>
				{token ? (
					<Button
						title="Let's go !"
						action={() => navigation.navigate("HomeTabs")}
					/>
				) : (
					<>
						<Button
							title='Sign in'
							action={() => navigation.navigate("SignIn")}
							buttonStyle='bordered'
						/>
						<Button
							title='Sign up'
							action={() => navigation.navigate("SignUp")}
						/>
					</>
				)}
			</View>
		</>
	);
};

export default HelloScreen;
