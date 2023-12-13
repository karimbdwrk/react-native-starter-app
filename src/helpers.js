import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
	try {
		await AsyncStorage.setItem("authToken", token);
	} catch (error) {
		console.error("Error storing token:", error);
	}
};

export const checkToken = async () => {
	try {
		const storedToken = await AsyncStorage.getItem("authToken");
		if (storedToken) {
			setToken(storedToken);
		}
	} catch (error) {
		console.error("Error storing token:", error);
	}
};

export const clearToken = async () => {
	try {
		await AsyncStorage.removeItem("authToken");
	} catch (error) {
		console.error("Error clearing token:", error);
	}
};
