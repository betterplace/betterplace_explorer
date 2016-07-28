import React from 'react'

var NoResults = React.createClass({
  render: function() {
    return (
      <div className="text-center no-results">
        <h2>Leider gibt es aktuell keine Angebote an diesem Ort.</h2>
        <h3>Bitte zoome auf der Karte raus – vielleicht gibt es etwas weiter entfernt ein Ehrenamt. :-)</h3>
      </div>
    )
  }
})

export default NoResults
