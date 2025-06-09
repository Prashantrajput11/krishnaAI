import "../../global.css";
import { View, Text, ImageBackground } from "react-native";
import React from "react";
import ChatInput from "../components/ChatInput";
import { useChatStore } from "../store/useChatStore";
import { router } from "expo-router";

export default function HomeScreen() {
	const createNewChat = useChatStore((s) => s.createNewChat);
	const addNewMessage = useChatStore((s) => s.addNewMessage);

	/**
	 * Handles sending a new message when starting a fresh chat session.
	 *
	 * 1. Takes the user-typed message and creates a new chat session.
	 * 2. Uses the first 40 characters of the message as the chat title.
	 * 3. Navigates the user to the new chat screen via router.
	 *
	 * @param {string} message - The message input by the user to initiate the chat.
	 *
	 */

	const handleSend = (message) => {
		console.log("message", message);

		const newChatId = createNewChat(message.slice(0, 40));

		addNewMessage(newChatId, {
			id: Date.now().toString(),
			role: "user",
			message,
		});

		router.push(`/chat/${newChatId}`);
	};

	return (
		<ImageBackground
			source={require("../../assets/images/k_2.jpeg")}
			style={{ flex: 1 }}
			resizeMode="cover" // or "contain", "stretch", "repeat", "center"
		>
			<ChatInput onSend={handleSend} loading={false} />
		</ImageBackground>
	);
}
