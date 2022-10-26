import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem'

describe('Pruebas en <GifItem/>', () => {

   const title = 'Inuyasha'
   const url = 'https://media2.giphy.com/media/fLv2F5rMY2YWk/giphy.gif?cid=fdfb23a7de0tm48clioc2khvqvepu5lg7gflpl42ubrml3wo&rid=giphy.gif&ct=g'

   test('Debe de hacer match con el snapshot', () => {
      
      const {container} = render(<GifItem title={ title } url={ url } />);
      expect(container).toMatchSnapshot();

   });

   test('Debe mostrar la imagen con la URL y el ALT indicados:', () => {
      
      render(<GifItem title={ title } url={ url } />);
      //screen.debug()
      //expect(screen.getByRole('img').src).toBe(url);
      //expect(screen.getByRole('img').alt).toBe(title);

      const { src, alt } = screen.getByRole('img')
      expect(src).toBe(url)
      expect(alt).toBe(title)

   });

   test('Debe mostar el titulo en el componente', () => {
      
      render(<GifItem title={ title } url={ url } />);
      //Buscar el texto en el componente
      expect(screen.getByText(title)).toBeTruthy();

   });
});