import React from "react";
import { View } from "react-native";

import { SignInForm } from "../components/SignInForm";
// import LoginFormGQL from "../components/LoginFormGQL";

const SignInScreen = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}>
			<SignInForm navigation={navigation} />
			{/* <LoginFormGQL /> */}
		</View>
	);
};

export default SignInScreen;
