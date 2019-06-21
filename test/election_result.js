process.env.NODE_ENV = 'test'
const mongoose = require('mongoose')
const election_result = require('../models/election_result')

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../app.js')
const should = chai.should();

chai.use(chaiHttp);

describe('/GET Election Results', () => {
  it('it should get all election results', (done) => {
    chai.request(server).get('/electionresults').end((err, res) => {
      res.should.have.status(200)
      res.body.should.be.a('array');
      res.body.length.should.be.eql(81)
      done();
    })
  })
})

describe('/GET Adana Election Results', () => {
  it('it should get Adana election results', (done) => {
    chai.request(server).get('/electionresults/1').end((err, res) => {
      res.should.have.status(200)
      res.body.should.be.a('array');
      res.body.length.should.be.eql(1)
      res.body[0].should.have.property('name').eql('Adana')
      res.body[0].should.have.property('id').eql(1)
      done();
    })
  })
})