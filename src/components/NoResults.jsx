import React from 'react'

var NoResults = React.createClass({
  render: function() {
    return (
      <div>
        <p>Leider gibt es aktuell keine Angebote an diesem Ort.</p>
        <p>Du kannst nachschauen, ob es in Deiner näheren Umgebung Angebote gibt, indem Du den Kartenausschnitt vergrößerst.</p>
      </div>
    )
  }
})

export default NoResults;
