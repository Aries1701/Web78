const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const WorkExperience = require('../models/WorkExperience');
const Hobby = require('../models/Hobby');
const Goal = require('../models/Goal');

// API endpoint to create a new profile
router.post('/profiles', (req, res) => {
  const profile = new Profile(req.body);
  profile.save((err, profile) => {
    if (err) {
      res.send(err);
    }
    res.json(profile);
  });
});

// API endpoint to get all profiles
router.get('/profiles', (req, res) => {
  Profile.find({}, (err, profiles) => {
    if (err) {
      res.send(err);
    }
    res.json(profiles);
  });
});

// API endpoint to get a specific profile by ID
router.get('/profiles/:id', (req, res) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.json(profile);
  });
});

// API endpoint to update a profile
router.put('/profiles/:id', (req, res) => {
  Profile.findByIdAndUpdate(req.params.id, req.body, (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.json(profile);
  });
});

// API endpoint to delete a profile
router.delete('/profiles/:id', (req, res) => {
  Profile.findByIdAndRemove(req.params.id, (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Profile successfully deleted' });
  });
});

// API endpoints for Skills
router.route('/profiles/:id/skills')
  .post((req, res) => {
    const skill = new Skill(req.body);
    skill.profile_id = req.params.id;
    skill.save((err, skill) => {
      if (err) {
        res.send(err);
      }
      res.json(skill);
    });
  })
  .get((req, res) => {
    Skill.find({ profile_id: req.params.id }, (err, skills) => {
      if (err) {
        res.send(err);
      }
      res.json(skills);
    });
  });

// API endpoints for Projects
router.route('/profiles/:id/projects')
  .post((req, res) => {
    const project = new Project(req.body);
    project.profile_id = req.params.id;
    project.save((err, project) => {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  })
  .get((req, res) => {
    Project.find({ profile_id: req.params.id }, (err, projects) => {
      if (err) {
        res.send(err);
      }
      res.json(projects);
    });
  });

// API endpoints for Work Experiences
router.route('/profiles/:id/work_experiences')
  .post((req, res) => {
    const workExperience = new WorkExperience(req.body);
    workExperience.profile_id = req.params.id;
    workExperience.save((err, workExperience) => {
      if (err) {
        res.send(err);
      }
      res.json(workExperience);
    });
  })
  .get((req, res) => {
    WorkExperience.find({ profile_id: req.params.id }, (err, workExperiences) => {
      if (err) {
        res.send(err);
      }
      res.json(workExperiences);
    });
  });

// API endpoints for Hobbies
router.route('/profiles/:id/hobbies')
  .post((req, res) => {
    const hobby = new Hobby(req.body);
    hobby.profile_id = req.params.id;
    hobby.save((err, hobby) => {
      if (err) {
        res.send(err);
      }
      res.json(hobby);
    });
  })
  .get((req, res) => {
    Hobby.find({ profile_id: req.params.id }, (err, hobbies) => {
      if (err) {
        res.send(err);
      }
      res.json(hobbies);
    });
  });

// API endpoints for Goals
router.route('/profiles/:id/goals')
  .post((req, res) => {
    const goal = new Goal(req.body);
    goal.profile_id = req.params.id;
    goal.save((err, goal) => {
      if (err) {
        res.send(err);
      }
      res.json(goal);
    });
  })
  .get((req, res) => {
    Goal.find({ profile_id: req.params.id }, (err, goals) => {
      if (err) {
        res.send(err);
      }
      res.json(goals);
    });
  });

module.exports = router;