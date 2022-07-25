import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Image} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Layout style={styles.layout}>
        <Image
          style={styles.logo}
          source={require('../Assets/Logo.png')}
          resizeMode={'contain'}
        />
        <Text category={'h4'} style={styles.signUpText}>
          Sign Up
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
        <Input
          size="large"
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={nextValue => setConfirmPassword(nextValue)}
        />
        <Button
          style={styles.button}
          size="large"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Sign Up
        </Button>
        <Text category={'p1'} style={styles.divider}>
          .............................. OR ..............................
        </Text>
        <Button
          style={styles.googleLoginButton}
          size="large"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Continue With Google
        </Button>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  input: {
    width: '70%',
    marginTop: '2%',
  },
  button: {
    width: '70%',
    marginTop: '5%',
  },
  divider: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  googleLoginButton: {marginTop: '0%', marginBottom: '5%', width: '70%'},
  signUpText: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    fontWeight: '700',
  },
  logo: {
    width: '50%',
    height: '10%',
    marginTop: '10%',
  },
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default SignUpScreen;
