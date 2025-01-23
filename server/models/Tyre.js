const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
  width: Number,
  radius: Number,
  height: Number,
});

const TyresSchema = new Schema({
  season: String,
  brand: String,
  model: String,
  size: SizeSchema,
  price: Number,
  imgSrc: String,
  count: Number,
  isSpiked: { type: Boolean, default: undefined },
});

const model = mongoose.model("Tyre", TyresSchema, "tyres");

module.exports = model;
