import "../../global.css";
import { View, Text, ImageBackground } from "react-native";
import React from "react";
import ChatInput from "../components/ChatInput";

export default function HomeScreen() {
	return (
		<ImageBackground
			source={require("../../assets/images/k_2.jpeg")}
			style={{ flex: 1 }}
			resizeMode="cover" // or "contain", "stretch", "repeat", "center"
		>
			<View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
				{/* Optional overlay */}
				<Text className="text-center text-3xl text-white">Home</Text>
			</View>
			<ChatInput />
		</ImageBackground>
	);
}
