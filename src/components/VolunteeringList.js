import React from 'react'
import Volunteering from './Volunteering'

var VolunteeringList = React.createClass({
  render: function() {
    var volunteeringNodes = this.props.records.map(function(record) {
      return (<Volunteering record={record}/>);
      return;
    });

    return (
      <ul>
        {volunteeringNodes}
      </ul>
    )
  }
});

export default VolunteeringList;
