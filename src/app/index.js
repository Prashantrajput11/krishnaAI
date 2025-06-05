import "../../global.css";
import { View, Text } from "react-native";
import React from "react";
import ChatInput from "../components/ChatInput";

export default function HomeScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Text className="text-center text-3xl">Home</Text>

			<ChatInput />
		</View>
	);
}
