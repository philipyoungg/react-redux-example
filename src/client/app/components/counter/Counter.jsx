import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { addNumber, removeNumber } from './CounterAction'

const Counter = ({ number, onIncrementClick, onDecrementClick }) => (
  <div>
    <p>{number}</p>
    <button onClick={ () => onIncrementClick() }>Increment</button>
    <button onClick={ () => onDecrementClick() }>Decrement</button>
  </div>
)

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  number: state.counterNumber,
})

const mapDispatchToProps = (dispatch) => ({
  onIncrementClick: () => {
    dispatch(addNumber())
  },
  onDecrementClick: () => {
    dispatch(removeNumber())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
