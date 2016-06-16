import React from 'react'

var PrevButton = React.createClass({
  render: function() {
    if(this.props.currentPage > 1) {
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

var NextButton = React.createClass({
  render: function() {
    if(this.props.currentPage < this.props.totalPages) {
      return (
        <li className="next">
          <a href="#" onClick={this.props.handleClick}>weiter <span aria-hidden="true">&rarr;</span></a>
        </li>
      )
    } else {
      return null
    }
  }
})

var Pagination = React.createClass({
  render: function() {
    if(this.props.currentPage) {
      return (
        <nav className="bpe--pagination">
          <ul className="pager">
            <PrevButton currentPage={this.props.currentPage} handleClick={this.previousPage} />
            Seite {this.props.currentPage} von {this.props.totalPages}
            <NextButton currentPage={this.props.currentPage} totalPages={this.props.totalPages} handleClick={this.nextPage} />
          </ul>
        </nav>
      )
    } else {
      return null
    }
  },

  previousPage: function(event) {
    this.props.changePage(this.props.currentPage - 1)
  },

  nextPage: function(event) {
    this.props.changePage(this.props.currentPage + 1)
  }
})

export default Pagination
