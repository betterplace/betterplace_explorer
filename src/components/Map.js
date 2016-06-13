import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

import React from 'react'

var Map = React.createClass({
  render: function() {
    if(this.props.bounds)
      this.googlemap.fitBounds(this.props.bounds)
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

  resize: function() {
    // $(ReactDOM.findDOMNode(this)).css 'height', $('html').height() - $(@container).offset().top
    // this.googlemap.event.trigger(@map, "resize")
  },

  idle: function() {
    var ne = this.googlemap.getBounds().getNorthEast()
    var sw = this.googlemap.getBounds().getSouthWest()
    var bb = { nelat: ne.lat(), nelng: ne.lng(), swlat: sw.lat(), swlng: sw.lng() }
    this.props.mapIdle(bb)
  }
});

export default Map
