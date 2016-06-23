import React from 'react'

var PaginationNextButton = React.createClass({
  render: function() {
    if (this.props.currentPage < this.props.totalPages) {
      return (
        <li className="next">
          <a href='#' onClick={this.props.handleClick}>weiter <span aria-hidden="true">&rarr;</span></a>
        </li>
      )
    } else {
      return null
    }
  }
})

export default PaginationNextButton
