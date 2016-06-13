import React    from 'react'
import ReactDOM from 'react-dom'

var LocationInput = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-5'>
          <input type='text' placeholder='Ort' ref='locationInput' className='bpe--location-input--input' />
          <a className='bpe--location-input--reset' onClick={this.resetInput}>&times;</a>
        </div>
      </div>
    )
  },

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.locationInput)
    input.focus()
    this.searchBox = new google.maps.places.SearchBox(input, { 'types': ['(regions)'] });
    google.maps.event.addListener(this.searchBox, 'places_changed', this.changeBounds)
  },

  resetInput() {
    var input = ReactDOM.findDOMNode(this.refs.locationInput)
    input.value = ''
    input.focus()
  },

  changeBounds() {
    var place = this.searchBox.getPlaces()[0]

    if (!place.geometry) return;

    if (place.geometry.viewport) {
      var value = ReactDOM.findDOMNode(this.refs.locationInput).value.replace(', ', '--')
      // this.props.changeBounds(place.geometry.viewport)
      this.props.changeLocation(value, place.geometry.viewport)
    } else {
      // non-boundary place, maybe a shop or a building. Do nothing yet.
      //   map.setCenter(place.geometry.location);
      //   map.setZoom(16);
    }
  }
});

export default LocationInput
