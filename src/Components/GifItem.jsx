import PropTypes from 'prop-types'; // define tipo a las props

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <p>{ title }</p>
      <img src={ url } alt={ title }/>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
