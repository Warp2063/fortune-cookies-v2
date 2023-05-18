const mongoose = require("mongoose");
const { Schema } = mongoose;

const cookieSchema = new Schema({
  fortune: String,
  category: String,
});

const Cookie = mongoose.model("Cookie", cookieSchema);

module.exports = Cookie;
