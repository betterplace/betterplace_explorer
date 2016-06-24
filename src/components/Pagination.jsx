import React                from 'react'
import PaginationNextButton from './PaginationNextButton.jsx'
import PaginationPrevButton from './PaginationPrevButton.jsx'

var Pagination = React.createClass({
  render: function() {
    if (this.props.totalPages && this.props.totalPages > 1) {
      return (
        <nav className="bpe--pagination">
          <ul className="pager">
            <PaginationPrevButton
              currentPage={this.props.currentPage}
              handleClick={this.previousPage}
            />
            <li className="text-muted">
              Seite {this.props.currentPage} von {this.props.totalPages}
            </li>
            <PaginationNextButton
              currentPage={this.props.currentPage}
              handleClick={this.nextPage}
              totalPages={this.props.totalPages}
            />
          </ul>
        </nav>
      )
    } else {
      return null
    }
  },

  previousPage: function(event) {
    this.changePage(event, this.props.currentPage - 1)
  },

  nextPage: function(event) {
    this.changePage(event, this.props.currentPage + 1)
  },

  changePage: function(event, toPage) {
    event.preventDefault()
    this.props.changePage(toPage)
  },
})

export default Pagination
