import { createConstants } from '../utils/Utils'

const types = createConstants([
  // todo action Types
  'ADD_TODO',
  'TOGGLE_TODO',
  'SHOW_ALL_TODO',
  'SET_VISIBILITY_FILTER',
  'RECEIVE_TODO',
])

export default types
