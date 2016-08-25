import { combineReducers } from 'redux'

import { todo, todoVisible } from '../todo/TodoReducer'
import { counterNumber } from '../counter/counterReducer'
import { routerReducer } from 'react-router-redux'

export const reducer = combineReducers({
  todo,
  todoVisible,
  counterNumber,
  routing: routerReducer,
})
