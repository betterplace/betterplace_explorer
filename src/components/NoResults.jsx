import React from 'react'

var NoResults = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h3>Leider gibt es aktuell keine Angebote an diesem Ort.</h3>
        <p><strong>Wenn Du auf der Karte rauszoomst, kannst Du schauen, ob es in einem größeren Umkreis Ehrenämter gibt.</strong></p>
      </div>
    )
  }
})

export default NoResults
