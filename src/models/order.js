const mongoose = require('mongoose');
const Inventory_item = require('./inventory');
const Schema = mongoose.Schema;

const userOrder = new Schema({
  email: {
    type: String,
    required: true
  },
  order_name: {
    type: String,
    required: true
  },
  created_order_time: {
    type: Date,
    required: true,
    default: Date.now
  },
  total_price: {
    type: Number,
    required: true
  },
  in_process: {
    type: Boolean,
    required: true,
    default: false
  },
  end_time: {
    type: Date,
  },
  user_name: {
    type: String
  },
  order_number: {
    type: Number,
    required: true
  },
  cpu: { brand_name: String, version: String, price: Number, pic: String },
  motherboard: { brand_name: String, version: String, price: Number, pic: String },
  memory: { brand_name: String, version: String, price: Number, pic: String },
  power_core: { brand_name: String, version: String, price: Number, pic: String },
  video_card: { brand_name: String, version: String, price: Number, pic: String },
  case: { brand_name: String, version: String, price: Number, pic: String },
  fan: { brand_name: String, version: String, price: Number, pic: String },
  wifi_adapter: { brand_name: String, version: String, price: Number, pic: String },
  cpu_cooler: { brand_name: String, version: String, price: Number, pic: String },
  hard_drive: { brand_name: String, version: String, price: Number, pic: String },

  list: Inventory_item
});

const Order = mongoose.model('Order', userOrder);
module.exports = Order;