import { type Event } from "./api";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { EventScreen, EventDetailScreen } from "./screens";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

type EventStackParamList = {
  Event: undefined;
  EventDetails: { event: Event };
};

type ScreenName = keyof EventStackParamList;

export type ScreenProps<SN extends ScreenName> = StackScreenProps<
  EventStackParamList,
  SN
>;

const Stack = createStackNavigator<EventStackParamList>();

export const EventStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailScreen}
        options={({ navigation, route }) => ({
          headerTitle: route.params.event.title,
          headerLeft: () => (
            <Pressable className="pl-2" onPress={() => navigation.goBack()}>
              <Feather name="chevron-left" size={20} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
