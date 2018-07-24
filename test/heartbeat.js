const app     = require('../app');
const request = require('supertest');

describe('vision heartbeat api', ()=>{
  describe('when requesting resource /heartbeat', ()=>{
    it('should respond with 200', done=>{
      request(app)
      .get('/heartbeat')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('when requesting resources /missing', ()=>{
    it('should respond with 404', done => {
      request(app)
        .get('/missing')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
});
