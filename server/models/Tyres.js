const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
  width: Number,
  radius: Number,
  height: Number,
});

const TyresSchema = new Schema({
  season: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  size: SizeSchema,
  price: Number,
  imgSrc: String,
  count: Number,
});

const model = mongoose.model("Tyres", TyresSchema, "tyres");

module.exports = model;
