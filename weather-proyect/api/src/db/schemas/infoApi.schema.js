const { Schema } = require("mongoose");

export const infoApiSchema = new Schema({
  personInCharge: {
    type: String,
    trim: true,
    default: "",
  },

  lat: { type: Number, default: "" },

  lon: { type: Number, default: "" },

  timezone: { type: String, default: "" },

  timezone_offset: { type: Number, default: "" },

  current: {
    dt: { type: Number, trim: true, require: false },
    sunrise: { type: Number, trim: true, require: false },
    sunset: { type: Number, trim: true, require: false },
    temp: { type: Number, trim: true, require: false },
    feels_like: { type: Number, trim: true, require: false },
    pressure: { type: Number, trim: true, require: false },
    humidity: { type: Number, trim: true, require: false },
    dew_point: { type: Number, trim: true, require: false },
    uvi: { type: Number, trim: true, require: false },
    clouds: { type: Number, trim: true, require: false },
    visibility: { type: Number, trim: true, require: false },
    wind_speed: { type: Number, trim: true, require: false },
    wind_deg: { type: Number, trim: true, require: false },
    wind_gust: { type: Number, trim: true, require: false },
    weather: [
      {
        id: { type: Number, trim: true, require: false },
        main: { type: String, trim: true, require: false },
        description: { type: String, trim: true, require: false },
        icon: { type: String, trim: true, require: false },
      },
    ],
  },

  minutely: [
    {
      dt: { type: Number, trim: true, require: false },
      precipitation: { type: Number, trim: true, require: false },
    },
  ],

  hourly: [
    {
      dt: { type: Number, trim: true, require: false },
      temp: { type: Number, trim: true, require: false },
      feels_like: { type: Number, trim: true, require: false },
      pressure: { type: Number, trim: true, require: false },
      dew_point: { type: Number, trim: true, require: false },
      uvi: { type: Number, trim: true, require: false },
      clouds: { type: Number, trim: true, require: false },
      visibility: { type: Number, trim: true, require: false },
      wind_speed: { type: Number, trim: true, require: false },
      wind_deg: { type: Number, trim: true, require: false },
      wind_gust: { type: Number, trim: true, require: false },
      weather: [
        {
          id: { type: Number, trim: true, require: false },
          main: { type: String, trim: true, require: false },
          description: { type: String, trim: true, require: false },
          icon: { type: String, trim: true, require: false },
        },
      ],
      pop: { type: Number, trim: true, require: false },
    },
  ],

  daily: [
    {
      dt: { type: Number, trim: true, require: false },
      sunrise: { type: Number, trim: true, require: false },
      sunset: { type: Number, trim: true, require: false },
      moonrise: { type: Number, trim: true, require: false },
      moonset: { type: Number, trim: true, require: false },
      moon_phase: { type: Number, trim: true, require: false },
      temp: {
        day: { type: Number, trim: true, require: false },
        min: { type: Number, trim: true, require: false },
        max: { type: Number, trim: true, require: false },
        night: { type: Number, trim: true, require: false },
        eve: { type: Number, trim: true, require: false },
        morn: { type: Number, trim: true, require: false },
      },
      feels_like: {
        day: { type: Number, trim: true, require: false },
        night: { type: Number, trim: true, require: false },
        eve: { type: Number, trim: true, require: false },
        morn: { type: Number, trim: true, require: false },
      },
      pressure: { type: Number, trim: true, require: false },
      humidity: { type: Number, trim: true, require: false },
      dew_point: { type: Number, trim: true, require: false },
      wind_speed: { type: Number, trim: true, require: false },
      wind_deg: { type: Number, trim: true, require: false },
      wind_gust: { type: Number, trim: true, require: false },
      weather: [
        {
          id: { type: Number, trim: true, require: false },
          main: { type: String, trim: true, require: false },
          description: { type: String, trim: true, require: false },
          icon: { type: String, trim: true, require: false },
        },
      ],
      clouds: { type: Number, trim: true, require: false },
      pop: { type: Number, trim: true, require: false },
      uvi: { type: Number, trim: true, require: false },
    },
  ],

  alerts: [
    {
      sender_name: { type: String, trim: true, require: false },
      event: { type: String, trim: true, require: false },
      start: { type: Number, trim: true, require: false },
      description: { type: String, trim: true, require: false },
    },
  ],
});

module.exports = placeSchema;
