import React    from 'react'
import ReactDOM from 'react-dom'

var LocationInput = React.createClass({
  render: function() {
    return (
      <div className='bpe--location-input'>
        <input
          type='text'
          placeholder='Bezirk, Stadt, Region'
          ref='locationInput'
          className='bpe--location-input--input'
          value={this.props.value}
          onChange={this.updateLocation}
        />
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
    input.focus()
    this.searchBox = new google.maps.places.SearchBox(input, { 'types': ['(regions)'] });
    google.maps.event.addListener(this.searchBox, 'places_changed', this.handlePlacesChanged)
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
          rim = 0.05
      this.props.changeBounds(
        { north: lat - rim, east: lng + rim, south: lat + rim, west: lng - rim }
      )
    }
  }
});

export default LocationInput
