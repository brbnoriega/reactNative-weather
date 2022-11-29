//logueado --> muestra los favs del user

//sin loguearse---> que muestre todos las cards con los climas y el detalle pero no puede poner favs

import ButtonGradient from '../ButtonGradient/ButtonGradient'
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <ButtonGradient/>
    </View>
  )
}


export default Home;