export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
  case 'SHOW_ALL_TODO':
    return todos
  case 'SHOW_ACTIVE_TODO':
    return todos.filter(t => !t.completed)
  case 'SHOW_INACTIVE_TODO':
    return todos.filter(t => t.completed)
  default:
    return todos
  }
}
