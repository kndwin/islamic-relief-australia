import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { EventStack } from "~/modules/events";
import { DonationScreen } from "~/modules/donation";
import { AboutUsScreen } from "~/modules/about-us";
import { HomeScreen } from "~/modules/home";

const Tab = createBottomTabNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="home" size={16} />,
            tabBarActiveTintColor: "black",
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="EventStack"
          component={EventStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="calendar" size={16} />,
            tabBarActiveTintColor: "black",
            tabBarLabel: "Events",
          }}
        />
        <Tab.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="user" size={16} />,
            tabBarActiveTintColor: "black",
            tabBarLabel: "About Us",
          }}
        />
        <Tab.Screen
          name="Donate"
          component={DonationScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Feather name="credit-card" size={16} />,
            tabBarActiveTintColor: "black",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
