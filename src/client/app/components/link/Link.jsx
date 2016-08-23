import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../todo/TodoAction'

const Link = ({ active, children, onClick }) => (
  <a
    href="#"
    className={active ? 'active' : ''}
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
    >{children}</a>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.todoVisible,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
