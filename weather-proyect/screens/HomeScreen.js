import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
// const { API_KEY } = process.env;

const HomeScreen = ({ navigation }) => {
  const [weather, setWeather] = useState("");

  function onSearch(city) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55123518c0e80767f6c32f238a63fc6b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setWeather({
            ...weather,
            city: [...new Set([...weather, target.value])],
          });
          console.log("Aca esta CITY", city);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "City not found!",
          });
        }
      });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SafeAreaView>
        <TextInput
          type="text"
          placeholder="City..."
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />
        <Button title="Add" onPress={() => onSearch(weather)} />
      </SafeAreaView>

      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        HomeScreen
      </Text>

      {/* {weather.map((c) => (
        <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        />
      ))} */}

      <Button title="Go to Detail!" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};

export default HomeScreen;
