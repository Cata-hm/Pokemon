const axios = require('axios');
const { expect } = require('chai');

describe('PokeAPI', () => {
  it('should return a valid Pokemon name', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal('bulbasaur');
  });
});
