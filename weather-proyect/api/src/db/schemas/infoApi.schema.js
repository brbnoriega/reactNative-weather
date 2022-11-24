const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const infoApiSchema = new Schema({
  // personInCharge: {
  //   type: String,
  //   trim: true,
  //   default: "",
  // },

  city: [
    {
      id: { type: Number, trim: true },
      name: { type: String, trim: true },
      lon: { type: Number, trim: true },
      lat: { type: Number, trim: true },
    },
  ],
});

module.exports = Info = mongoose.model("info", infoApiSchema);
