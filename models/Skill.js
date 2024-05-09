const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  skill_name: String
});

module.exports = mongoose.model('Skill', skillSchema);