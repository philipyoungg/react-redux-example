import { INCREMENT_NUMBER } from './CounterAction'
import { DECREMENT_NUMBER } from './CounterAction'

export const counterNumber = (state = 0, action) => {
  switch (action.type) {
  case INCREMENT_NUMBER:
    return state + 1
  case DECREMENT_NUMBER:
    return state - 1
  default:
    return state
  }
}
