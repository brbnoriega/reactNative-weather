import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation(){
return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
)
}

