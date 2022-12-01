import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
  
      
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",

        }}
      >
        HomeScreen
      </Text>
      <Button
        title="Go to Detail!"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;
