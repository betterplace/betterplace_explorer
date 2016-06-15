import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

import React from 'react'

var Map = React.createClass({
  render: function() {
    return (
      <div className='col-md-10'>
        <section style={{ height: "800px", width: "100%" }}>
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
              >
                {
                  this.props.records.map((record, index) => {
                    return (
                      <Marker position={{ lat: record.latitude, lng: record.longitude }} key={record.id} />
                    );
                  })
                }
              </GoogleMap>
            }
          />
        </section>
      </div>
    )
  },

  componentDidUpdate: function(next, prev) {
    if (this.props.changeBounds) {
      this.googlemap.fitBounds(this.props.changeBounds)
      this.googlemap.props.map.setZoom(this.googlemap.getZoom()+1)
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
    var newBounds = JSON.stringify(this.googlemap.getBounds())

    if (this.loadedBounds != newBounds) {
      this.loadedBounds = newBounds
      this.props.mapIdle(this.googlemap.getBounds())
    }
  }
});

export default Map
