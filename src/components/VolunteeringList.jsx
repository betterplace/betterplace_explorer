import React          from 'react'
import ReactDOM       from 'react-dom'
import Pagination     from './Pagination.jsx'
import Volunteering   from './Volunteering.jsx'
import NoResults      from './NoResults.jsx'
import LoadingCurtain from './LoadingCurtain.jsx'

var VolunteeringList = React.createClass({
  render: function() {
    var listContent = this.props.records.map(
      record => <Volunteering
                  active={record === this.props.highlightRecord}
                  key={record.id}
                  record={record}
                  setHighlightRecord={this.props.setHighlightRecord}
                />
    )

    if (this.props.records.length == 0 && !this.props.isLoading) {
      listContent = <NoResults />
    }

    return (
      <div>
        <Pagination
          changePage={this.changePage}
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          totalEntries={this.props.totalEntries}
          perPage={this.props.perPage}
          recordLength={this.props.records.length}
        />
        {this.props.isLoading && <LoadingCurtain />}
        <div className='bpe--volunteering-list' >
          {listContent}
        </div>
      </div>
    )
  },

  changePage: function(toPage) {
    this.shouldScrollTop = true
    this.props.changePage(toPage)
  },

  componentDidUpdate: function() {
    if (this.shouldScrollTop) {
      this.shouldScrollTop = false
      ReactDOM.findDOMNode(this).scrollTop = 0
    }
  },
})

export default VolunteeringList
