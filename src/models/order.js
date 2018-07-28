const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOrder = new Schema({
  user_email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  order_name: {
    type: String,
    required: true
  },
  created_order_time: {
    type: Date,
    default: Date.now
  },
  total_price: {
    type: Number,
    default: 0
  },
  in_process: {
    type: Boolean,
    default: false
  },
  end_time: {
    type: Date,
    default: null
  },
  order_number: {
    type: Number,
    required: true,
    default: 1
  },
  cpu: {
    type: String,
    default: null
  },
  mother_board: {
    type: String,
    default: null
  },
  memory: {
    type: String,
    default: null
  },
  power: {
    type: String,
    default: null
  },
  video_card: {
    type: String,
    default: null
  },
  case: {
    type: String,
    default: null
  },
  fan: {
    type: String,
    default: null
  },
  wifi_adapter: {
    type: String,
    default: null
  },
  cpu_cooler: {
    type: String,
    default: null
  },
  hard_drive: {
    type: String,
    default: null
  }
});

const Order = mongoose.model('Order', userOrder);
module.exports = Order;