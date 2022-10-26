import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/Components/AddCategory'

describe('Pruebas en <AddCategory/>', () => {

   const title = 'Inuyasha'
   const url = 'https://media2.giphy.com/media/fLv2F5rMY2YWk/giphy.gif?cid=fdfb23a7de0tm48clioc2khvqvepu5lg7gflpl42ubrml3wo&rid=giphy.gif&ct=g'

   test('Debe de cambiar el valor de la caja de texto', () => {

      render(<AddCategory onNewCategory = { () => {}} />);
      //screen.debug()
      const input = screen.getByRole('textbox')
      //dispara el evento input
      fireEvent.input(input, {target: {value: 'Naruto'}})
      expect(input.value).toBe('Naruto')
   });

   test('Debe de llamar onNewCategory si el input tiene un valor', () => {

      const inputValue = 'Naruto'
      // Jest mock => permite control absoluto de la funcion
      const onNewCategory = jest.fn();
      render(<AddCategory onNewCategory = { onNewCategory} />);

      const input = screen.getByRole('textbox')
      const form = screen.getByRole('form')
      //dispara el evento input
      fireEvent.input(input, {target: {value: inputValue}})
      //dispara el evento submit del form
      fireEvent.submit( form )
      expect( input.value ).toBe('')

      // Evaluar que la funcion sea llamada
      expect( onNewCategory ).toHaveBeenCalled();
      // Evaluar que la funcion sea llamada una unica vez
      expect( onNewCategory ).toHaveBeenCalledTimes(1);
      // Evaluar que la funcion sea con el valor de 'naruto'
      expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
   });

   test('No debe llamar el onNewCategory si el input se encuentra vacio', () => {
      const onNewCategory = jest.fn();
      render(<AddCategory onNewCategory = { onNewCategory } />);
      const form = screen.getByRole('form')

      fireEvent.submit( form )

      expect( onNewCategory ).toHaveBeenCalledTimes(0);

   });
});