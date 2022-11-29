import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ButtonGradient from "../ButtonGradient/ButtonGradient";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hello</Text>
        <Text style={styles.subTitle}>Sign In to your account</Text>
        <TextInput placeholder="weather@gmail.com" style={styles.textInput}></TextInput>
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
        ></TextInput>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <ButtonGradient style={styles.button} />
        <Text style={styles.forgotPassword}>Dont have an account?</Text>
        <StatusBar style="auto" /> {/*modo white o dark */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //clases para estilos de los componentes viene por default
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    padding: 14,
    color: "gray",
    marginTop: 20,
  },
  button: {},
});