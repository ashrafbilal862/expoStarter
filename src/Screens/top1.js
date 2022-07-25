import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const MenuIcon = props => <Icon {...props} name="arrow-back" />;

const Top1Screen = ({navigation}) => {
  const navigateBack = () => {
    navigation.navigate('Drawer');
  };
  const BackAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={styles.fullScreen}>
      <TopNavigation
        title="Top1"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text>Top1 page</Text>
        <Button
          size="large"
          onPress={() => {
            navigation.navigate('Drawer');
          }}>
          Goto Top 2 Page
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: {flex: 1},
});

export default Top1Screen;
