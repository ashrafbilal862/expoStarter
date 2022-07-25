import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Events Screen</Text>
      <Button title="Events Screen" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsScreen;
