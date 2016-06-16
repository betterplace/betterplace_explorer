import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList'
import Map              from './Map.js'
import LocationInput    from './LocationInput.js'
import Pagination       from './Pagination.js'

var Explorer = React.createClass({
  getInitialState() {
    return { records: [], currentBounds: {}, currentPage: 1 };
  },

  componentDidMount() {
    if(this.props.location.query.east) {
      var currentBounds = {
        east: parseFloat(this.props.location.query.east),
        west: parseFloat(this.props.location.query.west),
        north: parseFloat(this.props.location.query.north),
        south: parseFloat(this.props.location.query.south),
      }
      this.setState({ currentBounds: currentBounds, changeBounds: currentBounds })

    } else {
      var defaultBounds = {
        east: 19.90940093749998,
        north: 61.493695009727325,
        south: 39.728030772041244,
        west: -4.612083437500019,
      }
      this.setState({ currentBounds: defaultBounds, changeBounds: defaultBounds })
    }
      // this.load('https://www.betterplace.org/de/api_v4/volunteering?per_page=20')
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <LocationInput changeLocation={this.changeLocation} />
        <VolunteeringList records={this.state.records} totalEntries={this.state.totalEntries} setHighlightRecord={this.setHighlightRecord} />
        <Pagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage} />
        <Map records={this.state.records} mapIdle={this.loadByBoundingBox} changeBounds={this.state.changeBounds} highlightRecord={this.state.highlightRecord} />
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
    this.setState({ currentPage: page })
    this.load(this.state.currentBounds, page)
  },

  updateURLBounds: function(bounds) {
    var newQuery = Object.assign({}, this.props.location.query, bounds);
    browserHistory.push({ pathname: this.props.location.pathname, query: newQuery })
  },

  changeLocation: function(location, bounds) {
    // console.log(location)

    // browserHistory.push({ pathname: `/l/${location}`, query: this.props.location.query })

    this.updateURLBounds(bounds)
    this.setState({ currentBounds: bounds, changeBounds: bounds, currentPage: 1 })
  },

  load: function(bounds, page) {
    var params = {
      nelat: bounds.north,
      nelng: bounds.east,
      swlat: bounds.south,
      swlng: bounds.west,
      page: page,
      per_page: 20,
    }
    var query = Object.keys(params).map(function(k, _) { return k + '=' + params[k] }).join('&')
    var url = 'https://www.betterplace.org/de/api_v4/volunteering?' + query
    fetch(url)
      .then(response => response.json())
      .then(json => this.assignApiResult(json))
      .then(undefined, function(err) { console.log(err) })
  },

  loadByBoundingBox: function(bounds) {
    this.setState({ currentBounds: bounds, currentPage: 1 })
    this.updateURLBounds(bounds)
    this.load(bounds, 1)
  },

  setHighlightRecord: function(record) {
    this.setState({ highlightRecord: record })
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Explorer}/>
    <Route path="/l/:location" component={Explorer}/>
    <Route path="/*" component={Explorer}/>
  </Router>
), document.getElementById('betterplace-explorer'))
