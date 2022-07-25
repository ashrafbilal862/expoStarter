import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Top1Screen from "../../Screens/top1";
import Top2Screen from "../../Screens/top2";
import LoginScreen from "../../Screens/login";
import SignUpScreen from "../../Screens/signUp";

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="Top1" component={Top1Screen} />
      <Screen name="Top2" component={Top2Screen} />
    </Navigator>
  );
};
export default StackNavigator;
