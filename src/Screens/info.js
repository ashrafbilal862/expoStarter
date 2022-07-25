import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Button title="Info Screen" onPress={() => {}} />
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

export default InfoScreen;
