import * as types from '../../constants/actionTypes'

export const todo = (state = {
  loaded: false,
  todo: [],
}, action) => {
  switch (action.type) {
  case types.ADD_TODO:
    return {
      ...state,
      todo: [
        ...state.todo,
        {
          id: action.id,
          title: action.title,
          due: action.due,
          completed: false,
        },
      ],
    }
  case types.TOGGLE_TODO:
    return {
      ...state,
      todo: state.todo.map(t => {
        if (action.id !== t.id) {
          return t
        }
        return {...t, completed: !t.completed}
      }),
    }
  case types.RECEIVE_TODO:
    return {
      loaded: true,
      todo: action.todo,
    }
  default:
    return state
  }
}

export const todoVisible = (state = types.SHOW_ALL_TODO, action) => {
  switch (action.type) {
  case types.SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}
