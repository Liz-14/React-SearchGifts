import { getGigfs } from '../../src/Helpers/getGifs'

describe('Pruebas en getGifs()', () => {

   test('Debe retornar arreglo de gifs', async() => {
      
      const gifs = await getGigfs('Naruto')
      expect(Array.isArray(gifs)).toBe(true)
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String)
      })

   });
});