import { type Event } from "./utils";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { EventScreen, EventDetailScreen } from "./screens";

type EventStackParamList = {
  Event: undefined;
  EventDetails: { event: Event };
};

export type ScreenProps<T extends keyof EventStackParamList> = StackScreenProps<
  EventStackParamList,
  T
>;

const Stack = createStackNavigator<EventStackParamList>();

export const EventStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};
