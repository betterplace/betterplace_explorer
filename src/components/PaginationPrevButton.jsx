import React from 'react'

var PaginationPrevButton = React.createClass({
  render: function() {
    if (this.props.currentPage > 1) {
      return (
        <li className="previous">
          <a href="#" onClick={this.props.handleClick}></a>
        </li>
      )
    } else {
      return (
        <li className="previous disabled">
          <a></a>
        </li>
      )
      return null
    }
  }
})

export default PaginationPrevButton
