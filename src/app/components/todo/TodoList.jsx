import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import lifecycle from 'react-lifecycle-wrap-addon'

import TodoItem from './TodoItem'

import { getVisibleTodos } from './TodoHelper'
import { toggleTodo, fetchTodo } from './TodoAction'

let TodoList = ({ todos, loaded, onTodoClick }) => (
  <ul>
    {loaded ? '' : 'is Loading...'}
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => {onTodoClick(todo.id)}}
      />
    )}
  </ul>
)

TodoList = lifecycle(TodoList, {
  componentDidMount({ loaded, onInitialFetch }) {
    if (!loaded) {
      onInitialFetch()
    }
  },
})

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

////////////////////////////////////////////////////////////////////////////////
////// Container
////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todo.todo, state.todoVisible),
  loaded: state.todo.loaded,
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
  onInitialFetch: () => {
    dispatch(fetchTodo())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
