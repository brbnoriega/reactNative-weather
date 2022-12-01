import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Detail = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          
        }}
      >
        Detail
      </Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("HomeScreen")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Detail;
