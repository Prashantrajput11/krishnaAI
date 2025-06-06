import "../../global.css";
import { View, Text, ImageBackground } from "react-native";
import React from "react";
import ChatInput from "../components/ChatInput";

export default function HomeScreen() {
	const handleSend = (message) => {
		console.log("message", message);
	};
	return (
		<ImageBackground
			source={require("../../assets/images/k_2.jpeg")}
			style={{ flex: 1 }}
			resizeMode="cover" // or "contain", "stretch", "repeat", "center"
		>
			<ChatInput onSend={handleSend} loading={true} />
		</ImageBackground>
	);
}
