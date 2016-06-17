import React            from 'react'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList.jsx'
import Map              from './Map.jsx'
import LocationInput    from './LocationInput.jsx'

var Explorer = React.createClass({
  getInitialState() {
    return {
      currentBounds:    this.props.initialBounds,
      currentPage:      1,
      location:         '',
      newBounds:        this.props.initialBounds,
      records:          [],
      visitedRecordIds: [],
    }
  },

  componentDidMount() {
    var hashParams = undefined
    try { hashParams = JSON.parse(window.location.hash.replace('#','')) } catch(e) {}

    if (hashParams) {
      this.setState({ currentBounds: hashParams.bounds, newBounds: hashParams.bounds })
    }
  },

  componentDidUpdate() {
    window.location.hash = JSON.stringify({ bounds: this.state.currentBounds, page: this.state.currentPage })
  },

  render: function() {
    return (
      <div className="betterplace-explorer">
        <LocationInput
          changeLocation={this.changeLocation}
          changeBounds={this.changeBounds}
          value={this.state.location}
        />
        <VolunteeringList
          changePage={this.changePage}
          currentPage={this.state.currentPage}
          records={this.state.records}
          setHighlightRecord={this.setHighlightRecord}
          totalEntries={this.state.totalEntries}
          totalPages={this.state.totalPages}
          isLoading={this.state.isLoading}
        />
        <Map
          highlightRecord={this.state.highlightRecord}
          mapIdle={this.loadByBoundingBox}
          newBounds={this.state.newBounds}
          records={this.state.records}
          setHighlightRecord={this.setHighlightRecord}
          setRecordVisited={this.setRecordVisited}
          visitedRecordIds={this.state.visitedRecordIds}
        />
      </div>
    )
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
      per_page: 12,
    }
    var query = Object.keys(params).map(function(k, _) { return k + '=' + params[k] }).join('&')
    var url = `${this.props.apiBaseUrl}?${query}`
    this.setState({ isLoading: true })
    fetch(url)
      .then(response => response.json())
      .then(json => this.assignApiResult(json))
      .then(undefined, function(err) { console.log(err) })
  },

  loadByBoundingBox: function(bounds) {
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
});

var mountPoint = document.getElementById('betterplace-explorer')
var apiBaseUrl = mountPoint.getAttribute('data-api-base-url')
var initialBounds = {
  north: parseFloat(mountPoint.getAttribute('data-north')),
  south: parseFloat(mountPoint.getAttribute('data-south')),
  east: parseFloat(mountPoint.getAttribute('data-east')),
  west: parseFloat(mountPoint.getAttribute('data-west')),
}
ReactDOM.render(<Explorer apiBaseUrl={apiBaseUrl} initialBounds={initialBounds} />, mountPoint)
