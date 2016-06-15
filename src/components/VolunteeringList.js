import React from 'react'
import Volunteering from './Volunteering'

var VolunteeringList = React.createClass({
  render: function() {
    var volunteeringNodes = this.props.records.map(function(record) {
      return (<Volunteering record={record} key={record.id} />);
    });

    return (
      <div className='col-md-14 bpe--volunteering-list'>
        <h1>{this.props.records.length} von {this.props.totalEntries} Ehrenämter</h1>
        <div>
          {volunteeringNodes}
        </div>
      </div>
    )
  },
});

export default VolunteeringList;
