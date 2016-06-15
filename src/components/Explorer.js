import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList'
import Map              from './Map.js'
import LocationInput    from './LocationInput.js'
import Pagination       from './Pagination.js'

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
      this.setState({ records: [], changeBounds: currentBounds })

    } else {
      this.load('https://www.betterplace.org/de/api_v4/volunteering?per_page=20')
    }
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <div className="row">
          <LocationInput changeLocation={this.changeLocation} />
        </div>
        <div className="row">
          <Pagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage} />
          <VolunteeringList records={this.state.records} totalEntries={this.state.totalEntries} />
          <Map records={this.state.records} mapIdle={this.loadByBoundingBox} changeBounds={this.state.changeBounds} />
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
      changeBounds: null,
    })
  },

  changePage: function(page) {
    this.load(`https://www.betterplace.org/de/api_v4/volunteering?per_page=20&page=${page}`)
  },

  updateURLBounds: function(bounds) {
    var newQuery = Object.assign({}, this.props.location.query, bounds);
    browserHistory.push({ pathname: this.props.location.pathname, query: newQuery })
  },

  changeLocation: function(location, bounds) {
    // console.log(location)

    // browserHistory.push({ pathname: `/l/${location}`, query: this.props.location.query })

    this.updateURLBounds(bounds)
    this.setState({ changeBounds: bounds })
  },

  load: function(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => this.assignApiResult(json))
      .then(undefined, function(err) { console.log(err) })
  },

  loadByBoundingBox: function(bounds) {
    bounds = bounds.toJSON()
    this.updateURLBounds(bounds)
    this.load('https://www.betterplace.org/de/api_v4/volunteering?nelat='+bounds.north+'&nelng='+bounds.east+'&swlat='+bounds.south+'&swlng='+bounds.west+'&per_page=20')
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Explorer}/>
    <Route path="/l/:location" component={Explorer}/>
    <Route path="/*" component={Explorer}/>
  </Router>
), document.getElementById('betterplace-explorer'))
