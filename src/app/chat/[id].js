import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import chatHistory from "../../../assets/data/chatHistory.json";

export default function ChatScreen() {
	const { id } = useLocalSearchParams();

	const chat = chatHistory.find((h) => h.id === id);
	return (
		<View>
			<Text>ChatScreen {chat.id}</Text>
			<Text style={{ color: "white" }}>ChatScreen {chat.title}</Text>
		</View>
	);
}
