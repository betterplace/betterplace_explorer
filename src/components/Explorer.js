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

    if(this.props.location.query.east) {
      var currentBounds = {
        east: parseFloat(this.props.location.query.east),
        west: parseFloat(this.props.location.query.west),
        north: parseFloat(this.props.location.query.north),
        south: parseFloat(this.props.location.query.south),
      }
      this.setState({ records: [], bounds: currentBounds })

    } else {
      fetch('http://jop.betterplace.dev/de/api_v4/volunteering?per_page=20')
        .then(response => response.json())
        .then(json => this.assignApiResult(json))
        .then(undefined, function(err) { console.log(err) })
    }
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <div className="row">
          <LocationInput changeLocation={this.changeLocation} />
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

  updateURLBounds: function(bounds) {
    var newQuery = Object.assign({}, this.props.location.query, bounds);
    browserHistory.push({ pathname: this.props.location.pathname, query: newQuery })
  },

  changeLocation: function(location, bounds) {
    // console.log(location)

    // browserHistory.push({ pathname: `/l/${location}`, query: this.props.location.query })

    this.updateURLBounds(bounds.toJSON())
    this.setState({ records: this.state.records, bounds: bounds.toJSON() })
  },

  loadByBoundingBox: function(bounds) {
    bounds = bounds.toJSON()
    this.updateURLBounds(bounds)
    fetch('http://jop.betterplace.dev/de/api_v4/volunteering?nelat='+bounds.north+'&nelng='+bounds.east+'&swlat='+bounds.south+'&swlng='+bounds.west+'&per_page=20')
      .then(response => response.json())
      .then(json => this.assignApiResult(json))
      .then(undefined, function(err) { console.log(err) })
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Explorer}/>
    <Route path="/l/:location" component={Explorer}/>
  </Router>
), document.getElementById('betterplace-explorer'))
