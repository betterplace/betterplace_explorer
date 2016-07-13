import React                from 'react'
import PaginationNextButton from './PaginationNextButton.jsx'
import PaginationPrevButton from './PaginationPrevButton.jsx'

var Pagination = React.createClass({
  render: function() {
    if (this.props.totalEntries > 1) {
      var text = `${this.indexOfFirstRecord()} - ${this.indexOfLastRecord()} von ${this.props.totalEntries} Ehrenämtern`
    } else if (this.props.totalEntries == 1) {
      var text = '1 Ehrenamt gefunden'
    }

    return (
      <nav className="bpe--pagination">
        <span className="bpe--pagination--current-page">
          {text}
        </span>
        <ul className="bpe--pagination--pager">
          <PaginationPrevButton
            currentPage={this.props.currentPage}
            handleClick={this.previousPage}
          />
          <PaginationNextButton
            currentPage={this.props.currentPage}
            handleClick={this.nextPage}
            totalPages={this.props.totalPages}
          />
        </ul>
      </nav>
    )
  },

  indexOfFirstRecord: function() {
    return (this.props.currentPage - 1) * this.props.perPage + 1
  },

  indexOfLastRecord: function() {
    var a = this.props.currentPage * this.props.perPage
    var b = this.props.totalEntries
    return Math.min(a, b)
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
