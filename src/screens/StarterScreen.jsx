import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { VStack, Image, Text, Button } from "swiftui-react-native";

import { useAuth } from "../auth/AuthContext";

const StarterScreen = ({ navigation }) => {
	const { token } = useAuth();

	useEffect(() => {
		setTimeout(() => {
			token
				? navigation.navigate("HomeTabs")
				: navigation.navigate("Hello");
		}, 5000);
	}, [token]);

	return (
		<SafeAreaView>
			<VStack spacing={5}>
				{/* <Image systemName='face.smiling' fontSize={50} /> */}
				<Text font='title' style={{ color: "#303030" }}>
					Starter Screen
				</Text>
			</VStack>
		</SafeAreaView>
	);
};

export default StarterScreen;
