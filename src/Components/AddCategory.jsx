import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

   const [inputValue, setInputValue] = useState('')

   const onInputChange = ({target}) => {
      setInputValue(target.value)
   }

   const onSubmit = (event) => {
      //evita el refresh al hacer submit en el form
      event.preventDefault()
      //Sale de la función si se envian espacios vacios o 1 solo caracter
      if(inputValue.trim().length <= 1) return

      //setCategories(categories => [inputValue, ...categories])
      onNewCategory( inputValue.trim() )
      //Limpiar input
      setInputValue('')
   }

   return (
      <form onSubmit={onSubmit}>
         <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChange }
         />
      </form>
   )
}