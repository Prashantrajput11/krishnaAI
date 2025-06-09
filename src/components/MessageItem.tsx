import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";

const MessageItem = ({ messageItem }) => {
	const isUserMessage = messageItem.role === "user";

	console.log("messageItem", messageItem);

	return (
		<View
			style={[
				styles.bubbleContainer,
				isUserMessage ? styles.userBubble : styles.otherBubble,
			]}
		>
			<Markdown style={{ body: { color: "#000" } }}>
				{messageItem.message}
			</Markdown>
		</View>
	);
};

export default MessageItem;

const styles = StyleSheet.create({
	bubbleContainer: {
		maxWidth: "75%",
		padding: 10,
		borderRadius: 16,
		marginVertical: 4,
	},
	userBubble: {
		backgroundColor: "#DCF8C6", // WhatsApp-like green
		alignSelf: "flex-end",
		borderTopRightRadius: 0,
	},
	otherBubble: {
		backgroundColor: "#F1F0F0", // Light gray
		alignSelf: "flex-start",
		borderTopLeftRadius: 0,
	},
	messageText: {
		fontSize: 16,
		color: "#000",
	},
});
