import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTodo, showAllTodo } from './TodoAction'


const AddTodo = ({ addTodoSubmit, showAllTodoClick }) => {
  let input
  return (
    <div>
      <form
        onSubmit = {e => {
          e.preventDefault()
          input.value.trim()
          addTodoSubmit(input.value)
          showAllTodoClick()
          input.value = ''
        }}>
        <input
          type="text"
          placeholder="what are you going to do now?"
          ref={node => {
            input = node
          }}
          />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodoSubmit: PropTypes.func.isRequired,
  showAllTodoClick: PropTypes.func.isRequired,
}

////////////////////////////////////////////////////////////////////////////////
////// Container
////////////////////////////////////////////////////////////////////////////////

const mapDispatchToProps = (dispatch) => ({
  addTodoSubmit: (value) => {
    dispatch(addTodo(value))
  },
  showAllTodoClick: () => {
    dispatch(showAllTodo())
  },
})

export default connect(null, mapDispatchToProps)(AddTodo)
