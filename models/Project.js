const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  project_name: String,
  project_description: String,
  role: String,
  start_date: Date,
  end_date: Date
});

module.exports = mongoose.model('Project', projectSchema);