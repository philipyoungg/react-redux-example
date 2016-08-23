import React from 'react'

import TodoList from '../todo/TodoList'
import AddTodo from '../todo/AddTodo'
import TodoHeader from '../todo/TodoHeader'
import Counter from '../counter/Counter'

const App = () => (
  <div>
    <TodoHeader />
    <AddTodo />
    <TodoList />
  </div>
)

export default App
