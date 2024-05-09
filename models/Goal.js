const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  goal_name: String
});

module.exports = mongoose.model('Goal', goalSchema);