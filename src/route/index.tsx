import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { EventStack } from "~/modules/events";
import { DonationScreen } from "~/modules/donation";

const Tab = createBottomTabNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="EventStack"
          component={EventStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="calendar" />,
          }}
        />
        <Tab.Screen
          name="Donate"
          component={DonationScreen}
          options={{
            tabBarIcon: () => <Feather name="credit-card" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
