import React from 'react'

var PaginationPrevButton = React.createClass({
  render: function() {
    if (this.props.currentPage > 1) {
      return (
        <li className="previous">
          <a href="#" onClick={this.props.handleClick}><span aria-hidden="true">&larr;</span> zurück</a>
        </li>
      )
    } else {
      return null
    }
  }
})

export default PaginationPrevButton
