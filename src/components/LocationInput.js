import React    from 'react'
import ReactDOM from 'react-dom'

var LocationInput = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-5'>
          <input type='text' placeholder='Ort' ref='locationInput' className='bpe--location-input--input' onKeyPress={this.handleKeyPress} />
          <a className='bpe--location-input--reset' onClick={this.resetInput}>&times;</a>
        </div>
      </div>
    )
  },

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.locationInput)
    input.focus()
    this.autocomplete = new google.maps.places.Autocomplete(input, { 'types': ['(regions)'] });
    google.maps.event.addListener(this.autocomplete, 'place_changed', this.changeBounds)
  },

  resetInput() {
    var input = ReactDOM.findDOMNode(this.refs.locationInput)
    input.value = ''
    input.focus()
  },

  handleKeyPress(event) {
    if(event.charCode == 13) {
      event.preventDefault()
      console.log('enter')
    }
  },

  changeBounds() {
    var place = this.autocomplete.getPlace()
    this.props.changeBounds(place.geometry.viewport)
  }
});

export default LocationInput
