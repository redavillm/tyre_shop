const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisksSchema = new Schema({
  type: String,
  brand: String,
  model: String,
  diametr: Number,
  mount: String,
  width: String,
  offset: String,
  hole: String,
  color: String,
  price: Number,
  imgSrc: String,
  count: Number,
});

const model = mongoose.model("Disk", DisksSchema, "disks");

module.exports = model;
