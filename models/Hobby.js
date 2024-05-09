const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  hobby_name: String
});

module.exports = mongoose.model('Hobby', hobbySchema);