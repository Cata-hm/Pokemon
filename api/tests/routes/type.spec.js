/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const axios = require('axios');

const agent = session(app);

describe('Type routes', () => {
  before(() => agent.get('https://pokeapi.co/api/v2/type')
    .then(res => {
      const types = res.data.results.map(({ name }) => ({ name }));
      return conn.authenticate()
        .then(() => Type.sync({ force: true }))
        .then(() => Type.bulkCreate(types));
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );

  });
});