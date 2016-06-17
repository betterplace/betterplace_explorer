require('js-info-bubble')
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import React from 'react'
import ReactDOM from 'react-dom'
import Volunteering from './Volunteering.jsx'

const defaultPin = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABCFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD26OP39/cAAADPz88AAAAAAAAAAAD9/f3p6ens7Ozt7e2CgoLb29vt7e0nJyeampqZmZns7OwsLCxKSkqZmZkAAADa2tqHh4cwMDDq6uqEhIT+/v4AAABERETPz89HR0cAAADc3Nzb29u2Og+1OA3PfWG4QRi9TSfKb1C1OQ7luqvJb0/25uHcoY325+K3PRTmu6y2PBLfqJa3PRPowrXcoo7BVzPPfmL26OO9Tii2OhDep5Tluar15eD15N/epZK5Qhkx1ZAbAAAAOnRSTlMAAQcCBA4UDwMVKAUWHBMIIi0GDB0rC/7tHp8nGin70NLVWLHXNGhn0zQ+ZiqxWTXQWfsZPJ49H7SyPeI8ZAAAAXFJREFUeAGFk+MaIzEYhZOMbdW2l7Xdte7/TnbTp2628/7N55wDLkDI0xL6h0TzEIJHIEUjl1MFWRZUzkU0BR+fNYZVdNExDEfUFZbR7kIgZVpsEM9Ekn4i4ScjmXjAWuY1AvKIeROtpr4sZl9Xw0/jxc9UMRpjEA/P+Yiz81lv8K1/ojfwsnmbQ6calMnYb9P7P/0bhtP0e5sxqWMB2oqVc9te/47J91wzZtEQF9DYaH096T8wWXejrEbhAkxQ9Yb9J4ZeMWBoCCBi46nPfQKDUk1AEPCu0l72SAG9ZUNxeUBz+rtDn8ghonM0kFQxOSYHjFuiKgEkOP6IHDDyHQEBJBuJFTlglzDk8IDwFnjI2Ysh8ZqRl2viQ83Jh5ofDwWREC8NXpwaf1aB/FmFDwwNT989ff7u6UcRf/d/BfP7JJiT5CqPkvuRrmDJ3Yu2RxTtSfaxaBHLfrTZjGaLX6nCSfbPxul0HowTZr1w84ba/y8wjYohV+qwEQAAAABJRU5ErkJggg==',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 16)
}

const highlightPin = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABDlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr4eH39/fPz88AAAAAAAAAAADp6ekAAAD9/f3s7Ozt7e3t7e2CgoInJyfb29uZmZmamprs7OyEhISHh4cwMDBKSkr+/v7a2toAAAAsLCzq6uqZmZlEREQAAADPz89HR0cAAADb29vc3NxjGxtSAgJRAABZDAyNWFhUBQVSAQHEqKiBRkaBR0eth4fp39+OWVlWBwfq4OCzkJCuiIhsKCjCpqZaDQ1kHBzr4eHDp6exjIzo3t7CpaXKsbFVBgayjo5TAwPo3d2OWlqAlY+pAAAAOnRSTlMAAQcCBA4UDwMVKAUWHBMIIi0GDB0rC/7tnx4nGtAp+9LV11g0sWdo01lZNT77sSo00GY8GZ49H7K0BXS41QAAAXhJREFUeAGFk/OiG0EYxXdmbSvGdZwytnXr9v1fpJkYi9+/83nOwU4AwBA83MITDADYLQAnoEVLrCCwEm1BAge3zzJJiQpnqqrJKSJFylchANd0KpLIunEnmXTibjYRoXTtHAEYSH6MVlObYX89aS0Gw++pp2iMhAw45kPaeHi0x3+aBxpj+/HBoOGhBq6Rxof0z1XzgtYy/dkgNXxXgNBj5cys0byi+zuTi+kEQAVkKlrsdZs3dHtfo5SMowJkpGq3mne07KcIuS0BIJVI/Wt60H4psRBgjCW+ThteAY3pm2gxGEErn+ZNT+auQhMYL3HxgXfAoMJJPAZZ06l7B9Qdk4UYFNTkxDvgV1IVwgPCW6Ah+wFDojXdwDXRoUbehxrtDgUgm3hpB5wafdaz92c9fyEJcPju9/vvfq9x6Lt9BfPtIJiD5PK3kvuRziPJXYm2fSrSaJ9Ee5J9LPqEZF/vdOr94d/U80n2t8YpFG6NE269UPOG2P8/TQCL+fVhnpUAAAAASUVORK5CYII=',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 16)
}

var Map = React.createClass({
  render: function() {

    var markers = this.props.records.map(
      record => <Marker
                  position={{ lat: record.latitude, lng: record.longitude }}
                  key={record.id}
                  icon={record == this.props.highlightRecord ? highlightPin : defaultPin}
                  zIndex={record == this.props.highlightRecord ? 10000 : null}
                  onClick={this.handleMarkerClick.bind(this, record)}
                  onMouseover={this.handleMarkerMouseOver.bind(this, record)}
                  onMouseout={this.handleMarkerMouseOut.bind(this, record)}
                  customInfo="Marker A"
                />
    )

    return (
      <section className='bpe--map'>
        <GoogleMapLoader
          containerElement={
            <div style={{height: "100%"}}/>
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => this.googlemap = map }
              defaultZoom={5}
              defaultCenter={{ lat: 52.49928, lng: 13.44944 }}
              onIdle={this.idle}
              onClick={this.handleMapClick}
            >
              {markers}
            </GoogleMap>
          }
        />
      </section>
    )
  },

  componentDidUpdate: function(next, prev) {
    if (this.props.changeBounds) {
      this.googlemap.fitBounds(this.props.changeBounds)
      this.googlemap.props.map.setZoom(this.googlemap.getZoom()+1)
    }

    if (this.props.records.indexOf(this.infoBubbleRecord) === -1) {
      this.closeInfoBubble()
    }
  },

  resize: function() {
    // $(ReactDOM.findDOMNode(this)).css 'height', $('html').height() - $(@container).offset().top
    // this.googlemap.event.trigger(@map, "resize")
  },

  // Trigger loading of new API results for the current bounds. Since it triggers
  // multiple times when `fitBounds` is called, we prevent multiple API calls
  // by comparing the last loaded bounds with the current ones.
  idle: function() {
    if (this.preventReloadOnce) {
      this.preventReloadOnce = false
      return
    }

    this.closeInfoBubble()

    var newBounds = JSON.stringify(this.googlemap.getBounds())

    if (this.loadedBounds != newBounds) {
      this.loadedBounds = newBounds
      this.props.mapIdle(this.googlemap.getBounds().toJSON())
    }
  },

  handleMapClick: function() {
    this.closeInfoBubble()
  },

  handleMarkerClick: function(record) {
    this.closeInfoBubble()

    var div = document.createElement('div')
    ReactDOM.render(<Volunteering record={record} key={record.id}/>, div)

    this.infoBubble = new InfoBubble({
      content: div,
      maxWidth: 300,
      position: new google.maps.LatLng(record.latitude, record.longitude),
      map: this.googlemap.props.map,
      borderRadius: 0,
      shadowStyle: 0,
      minWidth: 212,
      maxWidth: 212,
      minHeight: 290,
      maxHeight: 290,
      hideCloseButton: true,
      padding: 0,
    })

    this.preventReloadOnce = true
    this.infoBubbleRecord = record
    this.infoBubble.open()
  },

  handleMarkerMouseOver: function(record) {
    this.props.setHighlightRecord(record)
  },

  handleMarkerMouseOut: function(record) {
    this.props.setHighlightRecord(null)
  },

  closeInfoBubble: function() {
    if (this.infoBubble) {
      this.infoBubbleRecord = null
      this.infoBubble.close()
    }
  }
});

export default Map
