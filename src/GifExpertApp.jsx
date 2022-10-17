import { useState } from 'react'
import { AddCategory, GifGrid } from './Components'

export const GifExpertApp = () => {
   
   const [categories, setCategories] = useState(['Inuyasha'])
   
   const onAddCategory = (newCategory) => {
      if( categories.includes(newCategory) ) return
      setCategories([newCategory, ...categories])
   }

   return (
      <>
         <h1>GifExpertApp</h1>

         <AddCategory 
            //setCategories={ setCategories }
            onNewCategory = { value => onAddCategory(value) } 
         />
         
         {
            categories.map( category => 
               <GifGrid 
                  key={category} 
                  category={category} 
               />)
         }
         

         {/*<button onClick={ onAddCategory }>Agregar</button>*/}

      </>
   )
}