const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partsInventory = new Schema({
  brand_name: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0
  },
  pic: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  }
});

const Inventory_item = mongoose.model('inventory_item', partsInventory);

module.exports = Inventory_item;