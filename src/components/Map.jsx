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
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAZlBMVEUAAAAAAAAAAAAAAAAAAACAkg56iw55ig2Elw99jw5mdQuGmQ+GmQ92hw11hQ1NWAkjJwN8jg5lcwtPWwlMVwiDlQ9lcwu10gCctAiMoQ2lvwWowwSwzAKNoQ2XrQqXrgqVqwquyQLEz9E4AAAAF3RSTlMABgsRFcSlmum0Uvv4iYk2HbRTODXeUVMH+38AAADRSURBVDjLlZPZEoIwDEVNWnZkc0nLpv7/T9qRKoMNZjyvOXOh7c3hL8CzN0WltEMhArDj8zFKy/ISHU8qUNw4b60ZRqLHYKY2d8p2rhPb04feJtobft7Ed9pwi5vVANSxoS9MvGaASmYKmBMF74CrJQabI/iAtueEPvMRWE/EMtW4BFSGF0yl4CVEAy8M0SLodOSFMdWLUNIOhSzIn5B/Uj6mfFEuIvt91YA5/1gdgvjccmHkysmlXWufLbUfXe2zTiHwi1MUabA4weoFY2F5BZ4doDDq7NmUwgAAAABJRU5ErkJggg==',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 16)
}

const visitedPin = {
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v739/fs7Ozq6urPz8+ZmZmEhIQqKioAAAAAAADa2trt7e3t7e1ISEjc3NwAAABnZGPt7e1ua2q4t7acmpmRj453dHRraGfr6+u8u7rLysnR0M/LysrJyMh/fHvZ2w4nAAAAGHRSTlMABAcNFCgdLPvt09CfZ1g0Ihmx19U9sh+WxKfKAAAA+klEQVQ4y42T2RbCIAxERQjdVzegq3X5/080okerzTHOSx/mnimQyWomIcQahZ8VITSlVF5SIkTYSpcQoKDU6hvxNuRpEoVhlKQ5eOTDryCLbdP1g7t2zRhnUCEx83VR29a81Nq60Ei8/d325MxMbtruXoSQVbE5mi8dN0UlxSNAQX02C533oHyEkDqzbgk4m2kfgQFxawi1MUb4gNwaUjbHCATKtKGBJi3vgIKko4EuASXwCEHU00AfBWp9B8KBBobwH4D9BX9I/pr4UCMNjP6hmKf+PawDBjzHPS2B6TluvjB05S6PynGlpWo/9LPa84vDrx6/vOz63wC77Demd5pVhAAAAABJRU5ErkJggg==',
  size: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 16)
}

var Map = React.createClass({
  render: function() {
    var markers = this.props.records.map(
      record => <Marker
                  customInfo={record.title}
                  icon={this.getPinForRecord(record)}
                  key={record.id}
                  onClick={this.handleMarkerClick.bind(this, record)}
                  onMouseout={this.handleMarkerMouseOut.bind(this, record)}
                  onMouseover={this.handleMarkerMouseOver.bind(this, record)}
                  position={{ lat: record.latitude, lng: record.longitude }}
                  zIndex={record === this.getHighlightRecord() ? 10000 : null}
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
              defaultCenter={{ lat: 52.49928, lng: 13.44944 }}
              defaultZoom={5}
              onClick={this.handleMapClick}
              onIdle={this.idle}
              options={{
                mapTypeControl: false,
                streetViewControl: false,
                zoomControlOptions: {
                  position: google.maps.ControlPosition.LEFT_TOP,
                },
              }}
              ref={(map) => this.googlemap = map }
            >
              {markers}
            </GoogleMap>
          }
        />
      </section>
    )
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.newBounds) {
      this.googlemap.fitBounds(this.props.newBounds)
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
    this.googlemap.props.map.setClickableIcons(false)

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

    this.props.setRecordVisited(record)
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
  },

  getPinForRecord: function(record) {
    if (record === this.getHighlightRecord())
      return highlightPin
    else if (this.props.visitedRecordIds.indexOf(record.id) !== -1)
      return visitedPin
    else
      return defaultPin
  },

  getHighlightRecord: function() {
    return this.props.highlightRecord || this.infoBubbleRecord
  }
});

export default Map
