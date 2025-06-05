import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname, router } from "expo-router";
import chatHistory from "../../assets/data/chatHistory.json";

export default function CustomDrawerContent(props) {
	const pathname = usePathname();

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />

			{chatHistory?.map((item) => {
				const isActive = pathname === `/chat/${item.id}`;

				return (
					<DrawerItem
						key={item.id}
						label={item.title}
						// inactiveTintColor="white"
						onPress={() => router.push(`/chat/${item.id}`)}
						focused={isActive}
					/>
				);
			})}
		</DrawerContentScrollView>
	);
}
