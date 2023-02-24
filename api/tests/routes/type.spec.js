/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Type, conn } = require('../../src/db.js');

const agent = session(app);

describe('Type routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(() => Type.sync({ force: true })
    .then(() => Type.bulkCreate([
      { name: 'grass' },
      { name: 'fire' },
      { name: 'water' },
      { name: 'bug' },
      { name: 'normal' },
      { name: 'poison' },
      { name: 'electric' },
      { name: 'ground' },
      { name: 'fighting' },
      { name: 'psychic' },
      { name: 'rock' },
      { name: 'ghost' },
      { name: 'ice' },
      { name: 'dragon' },
      { name: 'fairy' },
      { name: 'unknown' },
      { name: 'shadow' },
    ])));

  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );

    it('should return an array of types', () =>
      agent.get('/types')
        .then((res) => {
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(17);
          expect(res.body[0]).to.have.property('name', 'grass');
        })
    );
  });
});