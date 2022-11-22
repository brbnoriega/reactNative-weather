const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const infoApiSchema = new Schema({
  // personInCharge: {
  //   type: String,
  //   trim: true,
  //   default: "",
  // },
  coord: {
    lon: { type: Number, default: "", trim: true },
    lat: { type: Number, default: "", trim: true },
  },

  weather: [
    {
      id: { type: Number, default: "", trim: true },
      main: { type: String, default: "", trim: true },
      description: { type: String, default: "", trim: true },
      icon: { type: String, default: "", trim: true },
    },
  ],

  base: { type: String, default: "", trim: true },

  main: {
    temp: { type: Number, default: "", trim: true },
    feels_like: { type: Number, default: "", trim: true },
    temp_min: { type: Number, default: "", trim: true },
    temp_max: { type: Number, default: "", trim: true },
    pressure: { type: Number, default: "", trim: true },
    humidity: { type: Number, default: "", trim: true },
    sea_level: { type: Number, default: "", trim: true },
    grnd_level: { type: Number, default: "", trim: true },
  },

  visibility: { type: Number, default: "", trim: true },

  wind: {
    speed: { type: Number, default: "", trim: true },
    deg: { type: Number, default: "", trim: true },
    gust: { type: Number, default: "", trim: true },
  },

  rain: {
    "1h": { type: Number, default: "", trim: true },
  },

  clouds: {
    all: { type: Number, default: "", trim: true },
  },

  dt: { type: Number, default: "", trim: true },

  sys: {
    type: { type: Number, default: "", trim: true },
    id: { type: Number, default: "", trim: true },
    country: { type: String, default: "", trim: true },
    sunrise: { type: Number, default: "", trim: true },
    sunset: { type: Number, default: "", trim: true },
  },

  timezone: { type: Number, default: "", trim: true },

  id: { type: Number, default: "", trim: true, require: true },

  name: { type: String, default: "", trim: true, require: true },

  cod: { type: Number, default: "", trim: true },
});

module.exports = Info = mongoose.model("info", infoApiSchema);
