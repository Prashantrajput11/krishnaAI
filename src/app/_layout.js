import "../../global.css";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Drawer } from "expo-router/drawer";
import HistoryChatsDrawer from "../components/HistoryChatsDrawer";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
	const myTheme = {
		...DarkTheme,
		colors: {
			...DarkTheme.colors,
			primary: "white",
		},
	};
	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: "#000" }}>
			<ThemeProvider value={myTheme}>
				<Drawer
					drawerContent={HistoryChatsDrawer}
					screenOptions={{
						headerTitle: "",
						headerStyle: { backgroundColor: "black" },
						drawerInactiveTintColor: "white",
						drawerStyle: {
							borderRightColor: "grey",
							borderWidth: StyleSheet.hairlineWidth,
						},
					}}
				>
					<Drawer.Screen
						name="index"
						options={{
							drawerLabel: "Krishna AI",
							drawerIcon: () => (
								<MaterialCommunityIcons name="atom" size={24} color="white" />
							),
						}}
					/>
					<Drawer.Screen
						name="chat/[id]"
						options={{ drawerItemStyle: { display: "none" } }}
					/>
				</Drawer>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
