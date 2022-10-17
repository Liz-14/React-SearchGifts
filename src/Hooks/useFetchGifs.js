import { useState, useEffect } from "react"

import { getGigfs } from "../Helpers/getGifs"

export const useFetchGifs = ( category ) => {

   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getImages = async () => {
     const newImages = await getGigfs(category)
     setImages(newImages) 
     setIsLoading(false)
   }
 
   //Hook que sirve para disparar efectos secundarios (proceso que se ejecuta cuando algo sucede), en este caso cuando el componente se carga por primera vez o la categoria cambie
   useEffect(() => {
     getImages();
   },[])// dependencias vacias significa que el hook se dispara solo cuando se crea el componente

  return {
   images,
   isLoading
  }
}
