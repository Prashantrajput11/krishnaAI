import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useChatStore = create(
	persist(
		(set) => ({
			chatHistory: [],

			createNewChat: (title) => {
				const id = Date.now().toString();
				const newChat = {
					id,
					title,
					messages: [],
				};

				set((state) => ({
					chatHistory: [newChat, ...state.chatHistory],
				}));

				return newChat.id;
			},

			addNewMessage: (chatId, message) => {
				set((state) => ({
					chatHistory: state.chatHistory.map((chat) =>
						chat.id === chatId
							? { ...chat, messages: [...chat.messages, message] }
							: chat
					),
				}));
			},
		}),
		{
			name: "chat-storage", // unique name for storage key

			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
