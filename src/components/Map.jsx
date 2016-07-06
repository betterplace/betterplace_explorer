import { GoogleMap, GoogleMapLoader } from 'react-google-maps'
import React from 'react'
import ReactDOM from 'react-dom'
import Volunteering from './Volunteering.jsx'
import VolunteeringInfoBubble from './VolunteeringInfoBubble.jsx'
import VolunteeringMarker from './VolunteeringMarker.jsx'

var Map = React.createClass({
  render: function() {
    this.spreadRecordsWithSameCoordinates()

    var markers = this.props.records.map(
      record => <VolunteeringMarker
                  highlighted={record === this.getHighlightRecord()}
                  mapHolderRef={this.props.mapHolderRef}
                  onClick={this.handleMarkerClick.bind(this, record)}
                  onMouseout={this.handleMarkerMouseOut.bind(this, record)}
                  onMouseover={this.handleMarkerMouseOver.bind(this, record)}
                  record={record}
                  visited={this.props.visitedRecordIds.indexOf(record.id) !== -1}
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

    if (this.props.records.indexOf(this.getInfoBubbleRecord()) === -1) {
      this.closeInfoBubble()
    }
  },

  resize: function() {
    // $(ReactDOM.findDOMNode(this)).css 'height', $('html').height() - $(@container).offset().top
    // this.googlemap.event.trigger(@map, "resize")
  },

  // Trigger loading of new API results for the current bounds. Since it triggers
  // multiple times when `fitBounds` is called, we prevent multiple API calls
  // by comparing the last loaded bounds with the current ones in props.mapIdle().
  idle: function() {
    this.googlemap.props.map.setClickableIcons(false)

    if (this.infoBubble && this.infoBubble.panningIntoView) {
      this.infoBubble.panningIntoView = false
      return
    }

    this.closeInfoBubble()

    this.props.mapIdle(this.googlemap.getBounds().toJSON())
  },

  handleMapClick: function() {
    this.closeInfoBubble()
  },

  handleMarkerClick: function(record) {
    this.closeInfoBubble()

    this.infoBubble = new VolunteeringInfoBubble(record, this.googlemap.props.map)
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
    this.infoBubble && this.infoBubble.close()
  },

  getHighlightRecord: function() {
    return this.props.highlightRecord || this.getInfoBubbleRecord()
  },

  getInfoBubbleRecord: function() {
    return this.infoBubble && this.infoBubble.isOpen() && this.infoBubble.record
  },

  spreadRecordsWithSameCoordinates: function() {
    var recordsByLatLng = {}

    for (var record of this.props.records) {
      var key = [record.latitude, record.longitude]
      if (!recordsByLatLng[key]) recordsByLatLng[key] = []
      recordsByLatLng[key].push(record)
    }

    for (var key in recordsByLatLng) {
      var recordsWithSamePosition = recordsByLatLng[key]
      if (recordsWithSamePosition.length < 2) continue

      // arrange in spiral

      for (var i = 0; i < recordsWithSamePosition.length; i++) {
        var record = recordsWithSamePosition[i]
        var angle = 0.666 * i;
        record.longitude += ((4 + angle) * Math.cos(angle)) / 80000;
        record.latitude  += ((4 + angle) * Math.sin(angle)) / 120000;
      }

      // arrange in square grid

      // var gridSize = Math.ceil(Math.sqrt(recordsWithSamePosition.length)),
      //     col = 0,
      //     row = 0

      // for (var record of recordsWithSamePosition) {
      //   record.longitude += col * 0.0002
      //   record.latitude  -= row * 0.00012
      //   col += 1
      //   if (col >= gridSize) {
      //     col = 0
      //     row += 1
      //   }
      // }
    }
  }
})

export default Map
