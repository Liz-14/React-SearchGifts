import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {

   test('Debe regresar el estado inicial', async() => {
      
      const { result } = renderHook( () => useFetchGifs( 'Naruto' ))
      const { images, isLoading } = result.current
      
      expect(images.length).toBe(0)
      expect(isLoading).toBe(true)

   });

   test('Debe tornar un arreglo de imagenes y el isLoanding estar en false', async() => {
      
      const { result } = renderHook( () => useFetchGifs( 'Naruto' ))
      //Espera a que la instruccion/array length de imagenes sea mayor a 0
      await waitFor (
         () => expect(result.current.images.length).toBeGreaterThan(0)
      )

      const { images, isLoading } = result.current
      
      expect(images.length).toBeGreaterThan(0)
      expect(isLoading).toBe(false)

   });
});