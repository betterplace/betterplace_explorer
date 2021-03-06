import React    from 'react'
import ReactDOM from 'react-dom'

var LocationInput = React.createClass({
  render: function() {
    return (
      <div className={this.props.value ? "bpe--location-input has-value" : "bpe--location-input"}>
        <input
          type='text'
          placeholder='Suche nach Deiner Straße, PLZ, Stadt'
          ref='locationInput'
          className='bpe--location-input--input'
          value={this.props.value}
          onChange={this.updateLocation}
        />
        <i className="bpe--location-input--search-icon" />
        <a
          className='bpe--location-input--reset'
          onClick={this.resetInput}
        >
          &times;
        </a>
      </div>
    )
  },

  getInput() {
    return ReactDOM.findDOMNode(this.refs.locationInput)
  },

  updateLocation() {
    this.props.changeLocation(this.getInput().value)
  },

  componentDidMount() {
    var input = this.getInput()
    this.searchBox = new google.maps.places.SearchBox(input, { 'types': ['(regions)'] })
    this.biasSearchBox()
    google.maps.event.addListener(this.searchBox, 'places_changed', this.handlePlacesChanged)
  },

  componentDidUpdate() {
    this.biasSearchBox()
  },

  biasSearchBox() {
    this.searchBox.setBounds(this.props.biasBounds)
  },

  resetInput() {
    this.props.changeLocation('')
    this.getInput().focus()
  },

  getGeometry() {
    return this.searchBox.getPlaces()[0].geometry
  },

  handlePlacesChanged() {
    var geometry = this.getGeometry()

    if (!geometry) return false

    this.updateLocation()

    if (geometry.viewport) {
      this.props.changeBounds(geometry.viewport.toJSON())
    } else {
      var lat = geometry.location.lat(),
          lng = geometry.location.lng(),
          rim = 0.005
      this.props.changeBounds(
        { north: lat - rim, east: lng + rim, south: lat + rim, west: lng - rim }
      )
    }
  }
})

export default LocationInput
