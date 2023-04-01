import { Text, ScrollView, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { getEvents, type Event } from "./utils";
import { format, parseISO } from "date-fns";
import type { ScreenProps } from "./stack";

export const EventScreen = ({ navigation }: ScreenProps<"Event">) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ScrollView className="flex px-4 flex-1 max-h-[80vh]">
        {getEvents().map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onPress={() => navigation.navigate("EventDetails", { event })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const EventDetailScreen = ({ route }: ScreenProps<"EventDetails">) => {
  const event = route.params.event;
  return (
    <ScrollView className="flex-1 bg-white">
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: event.imageSrc }}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <View className="p-4">
        <Text className="text-2xl font-bold">{event.title}</Text>
        <Text>{event.location}</Text>
        <Text>{format(parseISO(event.date), "MMMM do, yyyy")}</Text>
        <Text className="text-left mt-4">{event.description}</Text>
      </View>
    </ScrollView>
  );
};

type EventCardProps = {
  event: Event;
  onPress: () => void;
};

const EventCard = ({ event, onPress }: EventCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <View className="border border-slate-500 shadow rounded my-2 overflow-hidden w-full">
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: event.imageSrc }}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <View className="p-4 flex w-full items-start">
          <Text className="text-2xl font-bold">{event.title}</Text>
          <Text className="text-xs ">
            {format(parseISO(event.date), "MMMM do, yyyy")}
          </Text>
          <Text className="mt-4">{event.summary}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
