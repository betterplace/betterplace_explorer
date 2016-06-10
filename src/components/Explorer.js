import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList'
import Map              from './Map.js'
import LocationInput    from './LocationInput.js'

var Explorer = React.createClass({
  getInitialState() {
    return { records: [] };
  },

  componentDidMount() {
    fetch('https://api.betterplace.org/de/api_v4/volunteering?per_page=20')
      .then(function(response) { return response.json() })
      .then(function(json) { this.assignApiResult(json) }.bind(this))
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <div className="row">
          <LocationInput changeBounds={this.changeBounds} />
        </div>
        <div className="row">
          <VolunteeringList records={this.state.records} totalEntries={this.state.totalEntries} />
          <Map records={this.state.records} mapIdle={this.loadByBoundingBox} bounds={this.state.bounds} />
        </div>
      </div>
    )
  },

  assignApiResult: function(json) {
    this.setState({
      records:      json.data,
      currentPage:  json.current_page,
      totalPages:   json.total_pages,
      totalEntries: json.total_entries,
      bounds:       null,
    })
  },

  changeBounds: function(bounds) {
    this.setState({ records: this.state.records, bounds: bounds })
  },

  loadByBoundingBox: function(bb) {
    fetch('https://api.betterplace.org/de/api_v4/volunteering?nelat='+bb.nelat+'&nelng='+bb.nelng+'&swlat='+bb.swlat+'&swlng='+bb.swlng+'&per_page=20')
      .then(function(response) { return response.json() })
      .then(function(json) { this.assignApiResult(json) }.bind(this))
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Explorer}/>
  </Router>
), document.getElementById('betterplace-explorer'))
