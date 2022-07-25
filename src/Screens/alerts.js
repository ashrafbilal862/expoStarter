import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Alerts Screen</Text>
      <Button title="Alerts Screen" onPress={() => {}} />
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

export default AlertsScreen;
