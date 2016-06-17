import React        from 'react'
import Pagination   from './Pagination.jsx'
import Volunteering from './Volunteering.jsx'

var VolunteeringList = React.createClass({
  render: function() {
    var volunteeringNodes = this.props.records.map(
      record => <Volunteering record={record} key={record.id} setHighlightRecord={this.props.setHighlightRecord} />
    )

    return (
      <div className='bpe--volunteering-list'>
        <h1>{this.props.records.length} von {this.props.totalEntries} Ehrenämter</h1>
        <div>
          {volunteeringNodes}
        </div>
        <div>
          <Pagination currentPage={this.props.currentPage} totalPages={this.props.totalPages} changePage={this.props.changePage} />
        </div>
      </div>
    )
  },
});

export default VolunteeringList;
