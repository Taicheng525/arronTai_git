const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  },
  created_user_time: {
    type: Date,
    required: true,
    default: Date.now
  },
  user_admin: {
    type: Boolean,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  user_avatar: {
    type: String,
    default: null
  },
  online: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: null
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User; 