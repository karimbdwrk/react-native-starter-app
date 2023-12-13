import React from "react";
import { View, Text, Button } from "react-native";

import { SignUpForm } from "../components/SignUpForm";

const SignUpScreen = () => {
	return (
		<View>
			<Text>Sign Up Page</Text>
			<SignUpForm navigation={navigation} />
			<Button onPress={() => navigation.goBack()} title='Dismiss' />
		</View>
	);
};

export default SignUpScreen;
