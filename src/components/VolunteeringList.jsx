import React        from 'react'
import ReactDOM     from 'react-dom'
import Pagination   from './Pagination.jsx'
import Volunteering from './Volunteering.jsx'

var VolunteeringList = React.createClass({
  render: function() {
    var volunteeringNodes = this.props.records.map(
      record => <Volunteering
                  key={record.id}
                  record={record}
                  setHighlightRecord={this.props.setHighlightRecord}
                />
    )

    return (
      <div className={'bpe--volunteering-list' + (this.props.isLoading ? ' loading' : '')} >
        <h1>{this.props.records.length} von {this.props.totalEntries} Ehrenämter gefunden</h1>
        <div>
          <Pagination
            changePage={this.changePage}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}
          />
        </div>

        <div>
          {volunteeringNodes}
        </div>
        <div>
          <Pagination
            changePage={this.changePage}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}
          />
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
});

export default VolunteeringList;
