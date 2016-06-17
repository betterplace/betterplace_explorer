import React            from 'react'
import ReactDOM         from 'react-dom'
import VolunteeringList from './VolunteeringList.jsx'
import Map              from './Map.jsx'
import LocationInput    from './LocationInput.jsx'

var Explorer = React.createClass({
  getInitialState() {
    return {
      changeBounds: this.props.initialBounds,
      currentBounds: this.props.initialBounds,
      currentPage: 1,
      records: [],
      visitedRecordIds: [],
    }
  },

  componentDidMount() {
    var hashParams = undefined
    try { hashParams = JSON.parse(window.location.hash.replace('#','')) } catch(e) {}

    if (hashParams) {
      this.setState({ currentBounds: hashParams.bounds, changeBounds: hashParams.bounds })
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
        />
        <VolunteeringList
          changePage={this.changePage}
          currentPage={this.state.currentPage}
          records={this.state.records}
          setHighlightRecord={this.setHighlightRecord}
          totalEntries={this.state.totalEntries}
          totalPages={this.state.totalPages}
        />
        <Map
          changeBounds={this.state.changeBounds}
          highlightRecord={this.state.highlightRecord}
          mapIdle={this.loadByBoundingBox}
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

  changeLocation: function(location, bounds) {
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
    var url = `${this.props.apiBaseUrl}?${query}`
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
