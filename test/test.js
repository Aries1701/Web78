const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Profiles', () => {
  beforeEach((done) => {
    mongoose.connection.collections.profiles.drop(() => {
      done();
    });
  });
  describe('/POST profiles', () => {
    it('it should POST a profile', (done) => {
      let profile = {
        full_name: 'John Doe',
        birth_date: new Date('1990-01-01'),
        birth_place: 'New York',
        nationality: 'American',
        education: 'Bachelor of Science in Computer Science',
        skills: [],
        projects: [],
        work_experiences: [],
        hobbies: [],
        goals: []
      }
      chai.request(server)
        .post('/profiles')
        .send(profile)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Profile successfully added!');
          res.body.should.have.property('profile');
          profile.should.have.property('full_name');
          profile.should.have.property('birth_date');
          profile.should.have.property('birth_place');
          profile.should.have.property('nationality');
          profile.should.have.property('education');
          done();
        });
    });
  });
  describe('/GET profiles', () => {
    it('it should GET all profiles', (done) => {
      chai.request(server)
        .get('/profiles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET/:id profiles', () => {
    it('it should GET a profile by the given id', (done) => {
      let profile = new Profile({
        full_name: 'John Doe',
        birth_date: new Date('1990-01-01'),
        birth_place: 'New York',
        nationality: 'American',
        education: 'Bachelor of Science in Computer Science',
        skills: [],
        projects: [],
        work_experiences: [],
        hobbies: [],
        goals: []
      });
      profile.save((err, profile) => {
        chai.request(server)
          .get('/profiles/' + profile.id)
          .send(profile)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('profile');
            res.body.profile.should.have.property('full_name');
            res.body.profile.should.have.property('birth_date');
            res.body.profile.should.have.property('birth_place');
            res.body.profile.should.have.property('nationality');
            res.body.profile.should.have.property('education');
            done();
          });
      });
    });
  });
  describe('/PUT/:id profiles', () => {
    it('it should UPDATE a profile given the id', (done) => {
      let profile = new Profile({
        full_name: 'John Doe',
        birth_date: new Date('1990-01-01'),
        birth_place: 'New York',
        nationality: 'American',
        education: 'Bachelor of Science in Computer Science',
        skills: [],
        projects: [],
        work_experiences: [],
        hobbies: [],
        goals: []
      });
      profile.save((err, profile) => {
        let newProfile = {
          full_name: 'Jane Doe',
          birth_date: new Date('1990-01-01'),
          birth_place: 'New York',
          nationality: 'American',
          education: 'Bachelor of Science in Computer Science',
          skills: [],
          projects: [],
          work_experiences: [],
          hobbies: [],
          goals: []
        }
        chai.request(server)
          .put('/profiles/' + profile.id)
          .send(newProfile)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Profile successfully updated!');
            res.body.should.have.property('profile');
            res.body.profile.should.have.property('full_name').eql('Jane Doe');
            done();
          });
      });
    });
  });
  describe('/DELETE/:id profiles', () => {
    it('it should DELETE a profile given the id', (done) => {
      let profile = new Profile({
        full_name: 'John Doe',
        birth_date: new Date('1990-01-01'),
        birth_place: 'New York',
        nationality: 'American',
        education: 'Bachelor of Science in Computer Science',
        skills: [],
        projects: [],
        work_experiences: [],
        hobbies: [],
        goals: []
      });
      profile.save((err, profile) => {
        chai.request(server)
          .delete('/profiles/' + profile.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Profile successfully deleted!');
            done();
          });
      });
    });
  });
});
