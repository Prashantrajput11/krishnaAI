import "../../global.css";
import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Drawer } from "expo-router/drawer";
import HistoryChatsDrawer from "../components/HistoryChatsDrawer";

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={HistoryChatsDrawer}
				screenOptions={{
					headerTitle: "",
					drawerStyle: { borderRightColor: "gray" },
				}}
			>
				<Drawer.Screen name="index" options={{ drawerLabel: "Chatgpt" }} />
				{/* <Drawer.Screen name="test" options={{ drawerLabel: "Chat 2" }} /> */}
			</Drawer>
		</GestureHandlerRootView>
	);
}
