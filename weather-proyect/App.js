import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
