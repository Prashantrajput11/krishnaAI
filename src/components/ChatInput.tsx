import {
	View,
	TextInput,
	Text,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
	const insets = useSafeAreaInsets();
	const [message, setMessage] = useState("");

	const handleSend = async () => {
		setMessage("");
		try {
			await onSend(message);
		} catch (error) {
			console.log("error", error);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1 }}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : undefined}
					keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
				>
					<View
						style={{
							backgroundColor: "#262626",
							borderTopLeftRadius: 16,
							borderTopRightRadius: 16,
							paddingBottom: insets.bottom,
							marginTop: "auto", // Optional: Push to bottom
						}}
					>
						<TextInput
							placeholder="Ask anything"
							placeholderTextColor="#fff"
							color="#fff"
							multiline
							style={{
								paddingTop: 24,
								paddingBottom: 8,
								paddingHorizontal: 16,
							}}
							value={message}
							onChangeText={setMessage}
						/>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: 16,
							}}
						>
							<MaterialCommunityIcons name="plus" size={24} color="white" />

							{message ? (
								<View
									style={{
										flexDirection: "row",
										marginLeft: "auto",
										backgroundColor: "white",
										borderRadius: 9999,
										padding: 8,
										alignItems: "center",
										gap: 4,
									}}
								>
									<MaterialCommunityIcons
										name="send"
										size={15}
										color="black"
										disabled={loading}
										onPress={handleSend}
									/>
								</View>
							) : (
								<View
									style={{
										flexDirection: "row",
										marginLeft: "auto",
										backgroundColor: "white",
										borderRadius: 9999,
										padding: 8,
										alignItems: "center",
										gap: 4,
									}}
								>
									<MaterialCommunityIcons
										name="account-voice"
										size={15}
										color="black"
									/>
									<Text style={{ color: "black", fontSize: 12 }}>Voice</Text>
								</View>
							)}
						</View>
					</View>
				</KeyboardAvoidingView>
			</View>
		</TouchableWithoutFeedback>
	);
}
