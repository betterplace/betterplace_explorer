import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

import React from 'react'

var Map = React.createClass({
  render: function() {
    // console.log(this.props)

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
    if(next.bounds) {
      this.googlemap.fitBounds(next.bounds)


      var GLOBE_WIDTH = 256; // a constant in Google's map projection
      var angle = next.bounds.east - next.bounds.west;
      if (angle < 0) {
        angle += 360;
      }
      var pixelWidth = 1
      var zoom = Math.round(Math.log(pixelWidth * 360 / angle / GLOBE_WIDTH) / Math.LN2);

      // console.log(zoom)
      // console.log(this.getBoundsZoomLevel(next.bounds, {width: 546, height: 800}))
      // console.log(this.googlemap.getZoom())

      // this.getBoundsZoomLevel(next.bounds, {width: 546, height: 800})

      this.googlemap.props.map.setZoom(this.googlemap.getZoom()+1)


    }
  },

  getBoundsZoomLevel: function (bounds, mapDim) {
      var WORLD_DIM = { height: 256, width: 256 };
      var ZOOM_MAX = 21;

      function latRad(lat) {
          var sin = Math.sin(lat * Math.PI / 180);
          var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
          return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
      }

      function zoom(mapPx, worldPx, fraction) {
          return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
      }

      var latFraction = (latRad(bounds.north) - latRad(bounds.south)) / Math.PI;

      var lngDiff = bounds.east - bounds.south;
      var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

      var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
      var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);

      return Math.min(latZoom, lngZoom, ZOOM_MAX);
  },

  resize: function() {
    // $(ReactDOM.findDOMNode(this)).css 'height', $('html').height() - $(@container).offset().top
    // this.googlemap.event.trigger(@map, "resize")
  },

  idle: function() {
    // var ne = this.googlemap.getBounds().getNorthEast()
    // var sw = this.googlemap.getBounds().getSouthWest()
    // var bb = { nelat: ne.lat(), nelng: ne.lng(), swlat: sw.lat(), swlng: sw.lng() }
    this.props.mapIdle(this.googlemap.getBounds())
  }
});

export default Map
