const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  full_name: String,
  birth_date: Date,
  birth_place: String,
  nationality: String,
  education: String,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  work_experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkExperience' }],
  hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hobby' }],
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal' }]
});

module.exports = mongoose.model('Profile', profileSchema);