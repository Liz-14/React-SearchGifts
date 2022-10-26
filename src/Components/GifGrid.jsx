import PropTypes from 'prop-types'; // define tipo a las props
import { GifItem } from './GifItem'
import { useFetchGifs } from '../Hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  //custom hook
  const { images, isLoading } = useFetchGifs ( category )

  return (
    <>
      <h3>{ category }</h3>

      {
        /* isLoading ? <h2>Cargando...</h2> : null */
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card-grid">
        {
          images.map(images => 
              <GifItem 
                key = { images.id }
                { ...images }
              />
            )
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}