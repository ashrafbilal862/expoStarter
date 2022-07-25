import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Layout,
  Text,
  Button,
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const MenuIcon = (props) => <Icon {...props} name="menu" />;

const HomeScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.toggleDrawer();
  };
  const MenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={styles.fullScreen}>
      <TopNavigation
        title="Home"
        alignment="center"
        accessoryLeft={MenuAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text>Home page</Text>
        <Button
          size="large"
          onPress={() => {
            navigation.navigate("Top1");
          }}
        >
          Home Page
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreen: { flex: 1, marginTop: 60 },
});

export default HomeScreen;
