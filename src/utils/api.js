import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuthToken = async () => {
	try {
		const token = await AsyncStorage.getItem("authToken");
		if (token) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		} else {
			delete strapiAPI.defaults.headers.common["Authorization"];
		}
	} catch (error) {
		console.error("Error setting auth token:", error);
	}
};

const getAuthToken = async () => {
	try {
		return await AsyncStorage.getItem("authToken");
	} catch (error) {
		console.error("Error retrieving auth token:", error);
		return null;
	}
};

const api = axios.create({
	baseURL: "http://localhost:1337",
	headers: {
		"Content-Type": "application/json",
	},
});

getAuthToken().then((authToken) => {
	if (authToken) {
		api.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
	}
});

export default api;
