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


// export default class Map extends Component {

//   state = {
//     markers: [{
//       position: {
//         lat: 25.0112183,
//         lng: 121.52067570000001,
//       },
//       key: `Taiwan`,
//       defaultAnimation: 2,
//     }],
//   }

//   /*
//    * This is called when you click on the map.
//    * Go and try click now.
//    */
//   handleMapClick(event) {
//     let { markers } = this.state;
//     markers = update(markers, {
//       $push: [
//         {
//           position: event.latLng,
//           defaultAnimation: 2,
//           key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//         },
//       ],
//     });
//     this.setState({ markers });

//     if (markers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }

//   handleMarkerRightclick(index, event) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     let { markers } = this.state;
//     markers = update(markers, {
//       $splice: [
//         [index, 1],
//       ],
//     });
//     this.setState({ markers });
//   }

//   renderNewBehavior() {
//     return (
//       <ScriptjsLoader
//         hostname={"maps.googleapis.com"}
//         pathname={"/maps/api/js"}
//         query={{ v: `3.${ AsyncGettingStarted.version }`, libraries: `geometry,drawing,places` }}
//         loadingElement={
//           <div {...this.props} style={{ height: `100%` }}>
//             <FaSpinner
//               style={{
//                 display: `block`,
//                 width: 200,
//                 height: 200,
//                 margin: `100px auto`,
//                 animation: `fa-spin 2s infinite linear`,
//               }}
//             />
//           </div>
//         }
//         containerElement={
//           <div {...this.props} style={{ height: `100%` }} />
//         }
//         googleMapElement={
//           <GoogleMap
//             ref={googleMap => {
//               if (!googleMap) {
//                 return;
//               }
//               console.log(googleMap);
//               console.log(`Zoom: ${ googleMap.getZoom() }`);
//               console.log(`Center: ${ googleMap.getCenter() }`);
//             }}
//             defaultZoom={3}
//             defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//             onClick={::this.handleMapClick}
//           >
//             {this.state.markers.map((marker, index) => {
//               return (
//                 <Marker
//                   {...marker}
//                   onRightclick={this.handleMarkerRightclick.bind(this, index)}
//                 />
//               );
//             })}
//           </GoogleMap>
//         }
//       />
//     );
//   }

//   render() {
//     return this.renderNewBehavior();
//   }
// }
