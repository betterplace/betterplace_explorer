import React from 'react'

var PaginationNextButton = React.createClass({
  render: function() {
    if (this.props.currentPage < this.props.totalPages) {
      return (
        <li className="next">
          <a href="#" onClick={this.props.handleClick}></a>
        </li>
      )
    } else {
      return (
        <li className="next disabled">
          <a></a>
        </li>
      )
    }
  }
})

export default PaginationNextButton
