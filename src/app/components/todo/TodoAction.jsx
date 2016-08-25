import types from '../../constants/actionTypes'
import fetch from 'isomorphic-fetch'

let nextTodoID = 0

export const addTodo = (title) => ({
  type: types.ADD_TODO,
  id: nextTodoID++,
  due: Date.now(),
  title,
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id,
})

export const showAllTodo = () => ({
  type: types.SHOW_ALL_TODO,
})

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
})

export const requestTodo = () => ({
  type: types.REQUEST_TODO,
})

export const receiveTodo = (json) => ({
  type: types.RECEIVE_TODO,
  todo: json,
})

export const fetchTodo = () => (dispatch) => (
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => dispatch(receiveTodo(json)))
)
