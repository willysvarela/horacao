import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../screens/HomeScreen";
import PrayerDetailScreen from "./../screens/PrayerDetailScreen";
import AddPrayerScreen from "./../screens/AddPrayerScreen";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Orações" }}
      />
      <HomeStack.Screen
        name="AddPrayer"
        component={AddPrayerScreen}
        options={{
          title: "Novo Pedido"
        }}
      />
      <HomeStack.Screen name="Detail" component={PrayerDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
