import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
      <Button title="Messages Screen" onPress={() => {}} />
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

export default MessagesScreen;
