const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccumulatorsSchema = new Schema({
  brand: String,
  model: String,
  polarity: String,
  width: Number,
  height: Number,
  length: Number,
  capacity: Number,
  price: Number,
  imgSrc: String,
  count: Number,
});

const model = mongoose.model("Accumulator", AccumulatorsSchema, "accumulators");

module.exports = model;
