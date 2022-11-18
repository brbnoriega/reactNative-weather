const mongoose = require("mongoose");

import userSchema from "../schemas/user.schema";
import infoApiSchema from "../schemas/infoApi.schema";

export const user = mongoose.model("user", userSchema);
export const info = mongoose.model("info", infoApiSchema);
