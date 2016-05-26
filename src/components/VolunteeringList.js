import React from 'react'
import Volunteering from './Volunteering'

var VolunteeringList = React.createClass({
  render: function() {
    var volunteeringNodes = this.props.records.map(function(record) {
      return (<Volunteering record={record} key={record.id} />);
    });

    return (<div>{volunteeringNodes}</div>)
  }
});

export default VolunteeringList;
