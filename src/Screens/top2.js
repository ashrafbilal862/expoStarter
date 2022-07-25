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

const backIcon = props => <Icon {...props} name="arrow-back" />;

const Top2Screen = ({navigation}) => {
  const navigateBack = () => {
    navigation.navigate('Home');
  };
  const BackAction = () => (
    <TopNavigationAction icon={backIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={styles.fullScreen}>
      <TopNavigation
        title="Top2"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Text>Top2 page page</Text>
        <Button
          size="large"
          onPress={() => {
            navigation.navigate('Drawer');
          }}>
          goto Top1 Page
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

export default Top2Screen;
