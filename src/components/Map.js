import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

import React from 'react'

var Map = React.createClass({
  render: function() {
    console.log(this.props)
    // console.log(this.googlemap)

    // if(this.props.bounds)
    //   this.googlemap.fitBounds(this.props.bounds)
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
    if(this.props.changeBounds) {
      this.googlemap.fitBounds(this.props.changeBounds)
      this.googlemap.props.map.setZoom(this.googlemap.getZoom()+1)
    }
  },

  resize: function() {
    // $(ReactDOM.findDOMNode(this)).css 'height', $('html').height() - $(@container).offset().top
    // this.googlemap.event.trigger(@map, "resize")
  },

  idle: function() {
    this.props.mapIdle(this.googlemap.getBounds())
  }
});

export default Map
