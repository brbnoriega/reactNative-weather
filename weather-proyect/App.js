import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonGradient from './components/ButtonGradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput
        placeholder='weather@gmail.com'
        style={styles.textInput}
      ></TextInput>

      <TextInput
        placeholder='password'
        style={styles.textInput}
        secureTextEntry={true}
      ></TextInput>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <ButtonGradient />
      <Text style={styles.forgotPassword}>Dont have an account?</Text>
      <StatusBar style="auto" /> {/*modo white o dark */}
    </View>
  );
}

const styles = StyleSheet.create({  //clases para estilos de los componentes viene por default
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
