import React from 'react'

import Link from '../link/Link'

const TodoHeader = () => (
  <div className="todoHeader">
    <Link filter="SHOW_ALL_TODO">Show All</Link>
    <Link filter="SHOW_ACTIVE_TODO">Active Todo</Link>
    <Link filter="SHOW_INACTIVE_TODO">Finished</Link>
  </div>
)

export default TodoHeader
