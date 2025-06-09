import { View, Text, FlatList, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
// import chatHistory from "../../../assets/data/chatHistory.json";
import ChatInput from "../../components/ChatInput";
import MessageItem from "../../components/MessageItem";
import { useChatStore } from "../../store/useChatStore";

export default function ChatScreen() {
	const { id } = useLocalSearchParams();

	const chatHistory = useChatStore((s) => s.chatHistory);
	const addNewMessage = useChatStore((s) => s.addNewMessage);

	const chat = chatHistory.find((chat) => chat.id === id);

	const handleSend = (message) => {
		console.log("message", message);
		addNewMessage(chat.id, {
			id: Date.now().toString(),
			role: "user",
			message,
		});
	};

	// if (!chat) {
	// 	return (
	// 		<View className="flex-1 justify-center items-center">
	// 			<Text className="text-white">Chat not found</Text>
	// 		</View>
	// 	);
	// }

	return (
		<ImageBackground
			source={require("../../../assets/images/k_2.jpeg")}
			style={{ flex: 1 }}
			resizeMode="cover" // or "contain", "stretch", "repeat", "center"
		>
			<View style={{ flex: 1 }}>
				{/* <Text style={{ color: "white" }}>{chat.id}</Text> */}
				<FlatList
					data={chat?.messages || []}
					renderItem={({ item }) => <MessageItem messageItem={item} />}
					contentContainerStyle={{ paddingTop: 15, marginHorizontal: 16 }}
				/>
				<ChatInput onSend={handleSend} />
			</View>
		</ImageBackground>
	);
}
