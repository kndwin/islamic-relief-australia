import { Text, ScrollView, View, Pressable } from "react-native";
import { format, parseISO } from "date-fns";
import { Feather } from "@expo/vector-icons";

import { useEventQuery, type Event } from "./api";
import type { ScreenProps } from "./stack";
import { Image } from "~/components";

export const EventScreen = ({ navigation }: ScreenProps<"Event">) => {
  const query = useEventQuery();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ScrollView className="flex p-4 flex-1 max-h-[80vh]">
        <Image
          style={{ width: "100%", height: 100, marginBottom: 20 }}
          source={{
            uri: "https://islamicrelief.org.au/wp-content/themes/marlin/assets/images/logo-dark.png",
          }}
          contentFit="contain"
          transition={1000}
        />

        {query.data?.map((event) => (
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
        contentFit="cover"
        transition={1000}
      />
      <View className="p-4 flex items-start">
        <Text className="text-2xl font-bold tracking-tight text-gray-900">
          {event.title}
        </Text>
        <View className="items-start mt-4">
          <View className="flex-row items-center">
            <Feather name="map-pin" />
            <Text className="text-xs ml-2">{event.location}</Text>
          </View>
          <View className="flex-row items-center mt-2">
            <Feather name="calendar" />
            <Text className="text-xs ml-2">
              {format(parseISO(event.date), "MMMM do, yyyy")}
            </Text>
          </View>
        </View>
        <Text className="text-left mt-8 text-base">{event.description}</Text>
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
      <View className="border border-slate-200 shadow rounded-lg my-2 overflow-hidden w-full">
        <Image
          style={{ width: "100%", height: 200 }}
          source={{ uri: event.imageSrc }}
          contentFit="cover"
          transition={1000}
        />
        <View className="p-4 flex w-full items-start bg-white">
          <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {event.title}
          </Text>
          <View className="flex-row items-center">
            <Feather name="calendar" />
            <Text className="text-xs ml-2">
              {format(parseISO(event.date), "MMMM do, yyyy")}
            </Text>
          </View>
          <Text className="mt-4 mb-2 font-normal text-gray-700">
            {event.summary}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
