import { Text, View } from "react-native";
import { Image } from "~/components";

export const AboutUsScreen = () => {
  return (
    <View className="flex-1 items-start justify-start bg-white flex p-4">
      <Text>About Us</Text>
      <Image
        source={{
          uri: "https://islamicrelief.org.au/wp-content/uploads/2023/03/Homepage-Hero.jpg",
        }}
        style={{ width: "100%", height: 100 }}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
};
