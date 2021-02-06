const request = require('supertest');
const app = require('./index').app;
const fs = require('fs');

describe('Server testing', () => {
  afterAll((done) => {
    done();
  });
  it('should return data on root route /', (done) => {
    request(app).
      get('/').
      expect('Content-Type', /html/).
      expect(200).
      end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });
  it('should fail on missing index.html route /', (done) => {
    fs.rename('./dist/server/index.html', './dist/server/index.html.testing',
              (renameErr) => {
      if (renameErr) {
        return;
      }

      request(app).
        get('/').
        expect('Content-Type', /html/).
        expect(500).
        end((err) => {
          if (err) {
            throw err;
          }
          fs.rename('./dist/server/index.html.testing',
                    './dist/server/index.html',
                    (revertErr) => {
                      if (revertErr) {
                        throw revertErr;
                      }
                      done();
                    });
        });
    });
  });
  it('should return time on /getTime', (done) => {
    request(app).
      get('/getTime').
      expect('Content-Type', /json/).
      expect(200, done);
  });
  it('should post person on /postPerson', (done) => {
    request(app).
      post('/postPerson').
      expect('Content-Type', /json/).
      expect(201, done);
  });
  it('should return star on *', (done) => {
    request(app).
      get('/blah').
      expect('Content-Type', /html/).
      expect(200).
      end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });
});