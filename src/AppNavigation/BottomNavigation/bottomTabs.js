import React, { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Text,
  Divider,
} from "@ui-kitten/components";

import HomeScreen from "../../Screens/home";
import SettingsScreen from "../../Screens/settings";
import ProfileScreen from "../../Screens/profile";
import InfoScreen from "../../Screens/info";

const { Navigator, Screen } = createBottomTabNavigator();

const AdminIcon = (props) => <Icon {...props} name="person" />;

const ClientIcon = (props) => <Icon {...props} name="people" />;

const NotificationIcon = (props) => <Icon {...props} name="bell" />;
const HomeIcon = (props) => <Icon {...props} name="home" />;

export const BottomTabBar = ({ navigation, state }) => {
  const [tabState, setTabState] = useState(0);

  const MoveableTabs = useCallback(
    (index) => {
      navigation.navigate(state.routeNames[index]);
      setTabState(index);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tabState]
  );

  return (
    <>
      <Divider />
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={(index) => MoveableTabs(index)}
      >
        <BottomNavigationTab
          title={(props) => <Text {...props}>Home</Text>}
          icon={HomeIcon}
        />
        <BottomNavigationTab
          title={(props) => <Text {...props}>Settings</Text>}
          icon={NotificationIcon}
        />
        <BottomNavigationTab
          title={(props) => <Text {...props}>Profile</Text>}
          icon={ClientIcon}
        />
        <BottomNavigationTab
          title={(props) => <Text {...props}>Info</Text>}
          icon={AdminIcon}
        />
      </BottomNavigation>
    </>
  );
};

const BottomTabs = () => {
  return (
    <Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Info" component={InfoScreen} />
    </Navigator>
  );
};

export default BottomTabs;
