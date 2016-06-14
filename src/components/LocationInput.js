import React    from 'react'
import ReactDOM from 'react-dom'

var LocationInput = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-5'>
          <input type='text' placeholder='Ort' ref='locationInput' className='bpe--location-input--input' value={this.props.value}/>
          <a className='bpe--location-input--reset' onClick={this.resetInput}>&times;</a>
        </div>
      </div>
    )
  },

  getInput() {
    return ReactDOM.findDOMNode(this.refs.locationInput)
  },

  componentDidMount() {
    var input = this.getInput()
    input.focus()
    this.searchBox = new google.maps.places.SearchBox(input, { 'types': ['(regions)'] });
    google.maps.event.addListener(this.searchBox, 'places_changed', this.handlePlacesChanged)
  },

  resetInput() {
    var input = this.getInput()
    input.value = ''
    input.focus()
  },

  getGeometry() {
    return this.searchBox.getPlaces()[0].geometry
  },

  handlePlacesChanged() {
    var geometry = this.getGeometry()

    if (!geometry) return false

    var value = this.getInput().value.replace(', ', '--')

    if (geometry.viewport) {
      this.props.changeLocation(value, geometry.viewport.toJSON())
    } else {
      var lat = geometry.location.lat(),
          lng = geometry.location.lng(),
          rim = 0.05
      this.props.changeLocation(value,
        { north: lat - rim, east: lng + rim, south: lat + rim, west: lng - rim }
      )
    }
  }
});

export default LocationInput
