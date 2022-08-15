require('jest');
const axios = require('axios');
const { Properties } = require('../');

jest.mock("axios");

describe('properties test', () => {
  const funcionalidad = new Properties();
  const apicall = [{title: 'Local Comercial'},{title: 'Oficina'},{title: 'Hogar'}];

  axios.get.mockResolvedValue({ data: { content: apicall }});
  
  test('test title', async () => {
    expect(await funcionalidad.getAllPropertiesTitle()).toStrictEqual(['Local Comercial', 'Oficina', 'Hogar']);
  });
});