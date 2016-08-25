import React, { PropTypes } from 'react'
import moment from 'moment'

const TodoItem = ({ title, due, completed, onClick }) => (
  <li
    onClick={onClick}
    className = {completed ? 'completedTodo' : ''}
  >
    <p>{title}</p>
    <h6>{moment(due).format('dddd, YYYY MMMM Do, hh:mm:ss z')}</h6>
  </li>
)

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  due: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default TodoItem
