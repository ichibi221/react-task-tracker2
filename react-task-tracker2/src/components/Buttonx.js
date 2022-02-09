import PropTypes from 'prop-types'

const Buttonx = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  )
}

Buttonx.defaultProps = {
  color: 'steelblue',
}

Buttonx.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Buttonx