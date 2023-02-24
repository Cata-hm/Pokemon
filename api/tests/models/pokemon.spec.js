const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should throw an error if name is an empty string', (done) => {
        Pokemon.create({ name: '' })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

    });

    describe('life, attack, defense, speed, height and weight', () => {
      it('should throw an error if any of these attributes are null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires valid attributes')))
          .catch(() => done());
      });

    });

    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });

    });

  });
});
