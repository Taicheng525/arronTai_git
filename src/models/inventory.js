const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partsInventory = new Schema({
  brand_name: {
    type: String,
    required: true
  },
  version: String,
  price: Number,
  pic: String,
  description: String
});

const Inventory_item = mongoose.model('inventory_item', partsInventory);

module.exports = Inventory_item;