const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  company_name: String,
  role: String,
  start_date: Date,
  end_date: Date
});

module.exports = mongoose.model('WorkExperience', workExperienceSchema);