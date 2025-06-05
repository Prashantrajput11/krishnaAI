import { View, TextInput, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ChatInput() {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				backgroundColor: "#262626",
				borderTopLeftRadius: 16,
				borderTopRightRadius: 16,
				paddingBottom: insets.bottom,
			}}
		>
			<TextInput
				placeholder="Ask anything"
				placeholderTextColor="grey"
				multiline
				style={{ paddingTop: 24, paddingBottom: 8, paddingHorizontal: 16 }}
			/>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<MaterialCommunityIcons name="plus" size={24} color="white" />

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
			</View>
		</View>
	);
}
