import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Fontisto } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const MainTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        shadowOpacity: 0,
        elevation: 0,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatoryStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen name="Chats" component={ChatsScreen} />
      <MainTab.Screen name="Status" component={TabTwoNavigator} />
      <MainTab.Screen name="Calls" component={TabTwoNavigator} />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

// function TabOneNavigator() {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="TabOneScreen"
//         component={TabOneScreen}
//         options={{ headerTitle: "Tab One Title" }}
//       />
//     </TabOneStack.Navigator>
//   );
// }

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
