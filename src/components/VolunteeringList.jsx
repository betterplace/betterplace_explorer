import React        from 'react'
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
      <div className='bpe--volunteering-list'>
        <h1>{this.props.records.length} von {this.props.totalEntries} Ehrenämter</h1>
        <div>
          {volunteeringNodes}
        </div>
        <div>
          <Pagination
            changePage={this.props.changePage}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}
          />
        </div>
      </div>
    )
  },
});

export default VolunteeringList;
