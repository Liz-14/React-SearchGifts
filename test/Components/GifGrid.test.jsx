import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/Components/GifGrid'
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';
useFetchGifs

//Hace un mock completo de useFetchGifs
jest.mock('../../src/Hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {

   const category = 'Naruto'

   test('Debe mostrar el loading inicialmente', () => {
      
      useFetchGifs.mockReturnValue({
         images: [],
         isLoading: true
      })

      render( <GifGrid category={ category }/> )
      expect( screen.getByText('Cargando...') );
      expect( screen.getByText(category) );
   });

   test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
      const gifs = [
         {
         id: 'Abc',
         title: 'Naruto',
         url: 'http://localhost/naruto.jpg'
         },
         {
            id: 'Abd',
            title: 'Naruto2',
            url: 'http://localhost/naruto2.jpg'
         }
      ];

      useFetchGifs.mockReturnValue({
         images: gifs,
         isLoading: false
      })

      render( <GifGrid category={ category }/> );
      expect( screen.getAllByRole('img').length ).toBe(2);
   });
});