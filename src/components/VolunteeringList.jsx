import React from 'react'
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

        / todo: put pagination here

      </div>
    )
  },
});

export default VolunteeringList;
