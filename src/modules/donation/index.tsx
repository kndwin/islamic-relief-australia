import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

export const DonationScreen = () => {
  const [name, setName] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  return (
    <View className="flex-1 items-start justify-start bg-white flex p-4">
      <Text>Name</Text>
      <TextInput
        className="h-10 w-full border border-black placeholder:text-slate-900 px-2 py-1"
        placeholder="Name"
        placeholderTextColor="black"
        onChangeText={setName}
        value={name}
      />
      <Text className="mt-4">Card Details</Text>
      <TextInput
        className="h-10 w-full border border-black placeholder:text-slate-900 px-2 py-1"
        placeholder="Card Details"
        onChangeText={setCardDetails}
        placeholderTextColor="black"
        value={cardDetails}
      />

      <Pressable className="bg-black w-full h-10 rounded flex items-center justify-center mt-4">
        <Text className="text-white">Donate</Text>
      </Pressable>
    </View>
  );
};
