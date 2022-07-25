import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardView} behavior="height">
        <Layout style={styles.layout}>
          <Image
            style={styles.logoImage}
            source={require('../Assets/Logo.png')}
            resizeMode={'contain'}
          />
          <Text category={'h4'} style={styles.loginText}>
            Login
          </Text>
          <Input
            size="large"
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
          />
          <Input
            size="large"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={nextValue => setPassword(nextValue)}
          />
          <Button
            style={styles.button}
            size="large"
            onPress={() => {
              navigation.navigate('Drawer');
            }}>
            Login
          </Button>
          <Text category={'p1'} style={styles.separator}>
            .............................. OR ..............................
          </Text>
          <Button
            style={styles.loginButton}
            size="large"
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Continue With Google
          </Button>
          <Button
            style={styles.loginButton}
            size="large"
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Sign Up
          </Button>
        </Layout>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  keyboardView: {flex: 1},
  input: {
    width: '70%',
    marginTop: '2%',
  },
  button: {
    width: '70%',
    marginTop: '5%',
  },
  loginButton: {marginTop: '0%', marginBottom: '5%', width: '70%'},
  separator: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    fontWeight: '700',
  },
  logoImage: {
    width: '50%',
    height: '10%',
    marginTop: '10%',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
