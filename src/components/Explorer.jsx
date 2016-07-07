import React            from 'react'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList.jsx'
import Map              from './Map.jsx'
import NullMap          from './NullMap.jsx'
import LocationInput    from './LocationInput.jsx'
import QueryParser      from '../helpers/QueryParser.js'

require('babel-polyfill')
require('es6-promise').polyfill()
import 'whatwg-fetch'

var Explorer = React.createClass({
  getInitialState() {
    return { records: [], visitedRecordIds: [] }
  },

  componentDidMount() {
    var queryParams = new QueryParser(this.props.initialBounds),
        bounds =      queryParams.bounds
    this.setState({ currentBounds: bounds, newBounds: bounds, location: queryParams.location })
  },

  componentDidUpdate() {
    window.history.replaceState(null, null, this.toQuery(this.state.currentBounds))
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <LocationInput
          biasBounds={this.state.currentBounds}
          changeLocation={this.changeLocation}
          changeBounds={this.changeBounds}
          value={this.state.location}
        />
        <VolunteeringList
          changePage={this.changePage}
          currentPage={this.state.currentPage}
          highlightRecord={this.state.highlightRecord}
          records={this.state.records}
          setHighlightRecord={this.setHighlightRecord}
          totalEntries={this.state.totalEntries}
          totalPages={this.state.totalPages}
          isLoading={this.state.isLoading}
        />
        {this.shouldRenderMap() ? <Map
          highlightRecord={this.state.highlightRecord}
          mapIdle={this.loadByBoundingBox}
          newBounds={this.state.newBounds}
          records={this.state.records}
          setHighlightRecord={this.setHighlightRecord}
          setRecordVisited={this.setRecordVisited}
          visitedRecordIds={this.state.visitedRecordIds}
        /> : <NullMap
          mapIdle={this.loadByBoundingBox}
          newBounds={this.state.newBounds}
        />
        }
      </div>
    )
  },

  shouldRenderMap: function() {
    return window.innerWidth > 767
  },

  assignApiResult: function(json) {
    this.setState({
      currentPage:  json.current_page,
      isLoading:    false,
      newBounds:    null,
      records:      json.data,
      totalEntries: json.total_entries,
      totalPages:   json.total_pages,
    })
  },

  changePage: function(page) {
    this.setState({ currentPage: page })
    this.load(this.state.currentBounds, page)
  },

  changeLocation: function(location) {
    this.setState({ location: location })
  },

  changeBounds: function(bounds) {
    this.setState({ currentBounds: bounds, currentPage: 1, newBounds: bounds })
  },

  load: function(bounds, page) {
    var params = {
      nelat:    bounds.north,
      nelng:    bounds.east,
      swlat:    bounds.south,
      swlng:    bounds.west,
      page:     page,
      per_page: 25,
    }
    var url = `${this.props.apiBaseUrl}${this.toQuery(params)}`
    this.setState({ isLoading: true })
    fetch(url)
      .then(response => response.json())
      .then(json => this.assignApiResult(json))
      .then(undefined, function(err) { console.log(err) })
  },

  loadByBoundingBox: function(bounds) {
    var boundsJson = JSON.stringify(bounds)
    if (this.loadedBounds === boundsJson) return
    this.loadedBounds = boundsJson

    this.setState({ currentBounds: bounds, currentPage: 1 })
    this.load(bounds, 1)
  },

  setHighlightRecord: function(record) {
    this.setState({ highlightRecord: record })
  },

  setRecordVisited: function(record) {
    var newVisitedRecordIds = this.state.visitedRecordIds.concat([record.id])
    this.setState({ visitedRecordIds: newVisitedRecordIds })
  },

  toQuery: function(object) {
    return '?' + Object.keys(object).map(function(k, _) { return k + '=' + object[k] }).join('&')
  },
})

var mountPoint = document.getElementById('betterplace-explorer')
var apiBaseUrl = mountPoint.getAttribute('data-api-base-url')
var initialBounds = {
  north: parseFloat(mountPoint.getAttribute('data-north')),
  south: parseFloat(mountPoint.getAttribute('data-south')),
  east:  parseFloat(mountPoint.getAttribute('data-east')),
  west:  parseFloat(mountPoint.getAttribute('data-west')),
}
ReactDOM.render(<Explorer apiBaseUrl={apiBaseUrl} initialBounds={initialBounds} />, mountPoint)
