import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";

import AlertsScreen from "../../Screens/alerts";
import MessagesScreen from "../../Screens/messages";
import BottomTabs from "../BottomNavigation/bottomTabs";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
  >
    <DrawerItem title="Alerts" />
    <DrawerItem title="Message" />
  </Drawer>
);

const DrawerNavigator = () => {
  return (
    <Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="StartDrawer" component={BottomTabs} />
      <Screen name="Alerts" component={AlertsScreen} />
      <Screen name="Message" component={MessagesScreen} />
    </Navigator>
  );
};
export default DrawerNavigator;
