import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import BottomTabs from '../AppNavigation/BottomNavigation/bottomTabs';
import DrawerScreen from "../AppNavigation/DrawerNavigation/drawerNavigation";
import TopBar from "../AppNavigation/TopbarNavigation/topNavigator";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="TopBar"
          component={TopBar}
          screenOptions={{ headerShown: false }}
          tabBar={() => null}
        />
        <Screen name="Drawer" component={DrawerScreen} />
        {/* <Screen name='BottomBar' component={BottomTabs} /> */}
      </Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
