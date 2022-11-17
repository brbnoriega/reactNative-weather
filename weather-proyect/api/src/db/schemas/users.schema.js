const { Schema } = require("mongoose");

export const usersSchema = new Schema({
  personInCharge: {
    type: String,
    trim: true,
    default: "",
  },

  name: { type: String, trim: true, require: true, default: "" },

  lastname: { type: String, trim: true, require: true, default: "" },

  nickname: { type: String, trim: true, require: true, default: "" },

  isAdmin: { type: Boolean, require: true, default: false },

  email: { type: String, trim: true, require: true, unique: true },

  password: { type: String, require: true },

  city: [
    {
      city: { type: String },
    },
  ],

  favourites: [
    {
      city: { type: String },
    },
  ],
  image: {
    type: String,
    require: false,
    default: "https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png",
  },

  disabled: { type: Boolean, default: false },
});

module.exports = placeSchema;
