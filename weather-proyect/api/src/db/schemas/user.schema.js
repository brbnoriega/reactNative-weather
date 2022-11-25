const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  // personInCharge: {
  //   type: String,
  //   trim: true,
  //   default: "",
  // },

  name: { type: String, trim: true, require: true, default: "" },

  lastname: { type: String, trim: true, require: true, default: "" },

  nickname: { type: String, trim: true, require: false, default: "" },

  isAdmin: { type: Boolean, require: false, default: false },

  mail: { type: String, trim: true, require: true, unique: true },

  password: { type: String, require: true },

  city: [
    {
      name: { type: String, trim: true, require: false, unique: true },
      lon: { type: Number, trim: true, require: false },
      lat: { type: Number, trim: true, require: false },
    },
  ],

  favourites: [
    {
      name: { type: String, trim: true, require: false },
    },
  ],
  image: {
    type: String,
    require: false,
    default: "https://www.nicepng.com/png/detail/608-6080578_png-file-svg-icono-de-persona-png.png",
  },

  /* disabled: { type: Boolean, default: false },*/
});

module.exports = User = mongoose.model("user", userSchema);
