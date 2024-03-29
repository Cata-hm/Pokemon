const { Type, conn } = require('../../src/db.js');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Type model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Type.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Type.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Type.create({ name: 'Fire' })
          .then((type) => {
            expect(type.name).to.equal('Fire');
            expect(type.id).to.be.a('string');
          });
      });
    });
  });
});