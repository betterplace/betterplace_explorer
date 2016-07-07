require('js-info-bubble')

import React from 'react'
import ReactDOM from 'react-dom'
import Volunteering from './Volunteering.jsx'

const closeButton = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH4AcBEA4n96MxwgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAilBMVEUAAAD/////1tb/19f/7e3/9fX/+fn/+fktLS1MTExNTU1OTk5PT09QUFBSUlJTU1N1dXV7e3uRkZGvr6+zs7O0tLS1tbW2tra3t7e5ubm7u7u8vLy9vb2+vr6/v7/AwMDCwsLFxcX19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7/AAD//f3////k1U5BAAAACHRSTlMAACcncc7x8sgJq0QAAAABYktHRCskueQIAAAAr0lEQVQoz9XRyRKCMAwA0KKgoqm7yGLdhTZD/v/3BGUYlDYnL/bQZvKmS1JB7BD/z+ZatMkce3y/3B5NqPNz/s3FbqbfSY2wMT3GFKjOGpJR/26tKZOElcLe8jQ0hrJ5rTGhpTBEpMOCZNLRbt21R5NtVz/aUrFcSycTwZHU1NlUUNWkQgdD+lqOoZUhaYJTaOFV3IZq+aP/LnkOePZ5FiOWvWHJ7haDMcue8APXCU8CtZX460hl6QAAAABJRU5ErkJggg=='

const anchorHeight = 14,
      bubbleHeight = 290,
      bubbleWidth  = 212

export default class VolunteeringInfoBubble extends InfoBubble {
  constructor(record, map) {
    var div = document.createElement('div')
    ReactDOM.render(<Volunteering record={record} key={record.id}/>, div)

    var attributes = {
      borderRadius:     0,
      closeSrc:         closeButton,
      content:          div,
      disableAnimation: true,
      map:              map,
      maxHeight:        bubbleHeight,
      maxWidth:         bubbleWidth,
      minHeight:        bubbleHeight,
      minWidth:         bubbleWidth,
      padding:          0,
      position:         new google.maps.LatLng(record.latitude, record.longitude),
      shadowStyle:      0,
    }

    var infoBubble = super(attributes)

    // hilarious workaround for IE 10 - https://github.com/babel/babelify/issues/133
    InfoBubble.call(this, attributes)

    infoBubble.bubble_.className += 'bpe--volunteering-info-bubble'
    infoBubble.close_.className  += 'bpe--volunteering-info-bubble-close'

    infoBubble.record = record

    return infoBubble
  }

  // OVERRIDE
  panToView() {
    var anchorPos = this.getProjection().fromLatLngToContainerPixel(this.getPosition()),
        map       = this.get('map'),
        mapDiv    = map.getDiv(),
        mapHeight = mapDiv.offsetHeight,
        mapWidth  = mapDiv.offsetWidth,
        padding   = 20

    var freeSpaceAtTop    = anchorPos.y - bubbleHeight - anchorHeight  - padding,
        freeSpaceAtRight  = mapWidth    - anchorPos.x  - bubbleWidth/2 - padding,
        freeSpaceAtBottom = mapHeight   - anchorPos.y                  - padding,
        freeSpaceAtLeft   = anchorPos.x - bubbleWidth/2                - padding

    // evade zoom control in top left corner
    if (freeSpaceAtTop < 70 && freeSpaceAtLeft < 40)
        freeSpaceAtLeft -= (40 - (freeSpaceAtLeft > 0 ? freeSpaceAtLeft : 0))

    var deltaX = 0,
        deltaY = 0

    if      (freeSpaceAtLeft   < 0) deltaX =  freeSpaceAtLeft
    else if (freeSpaceAtRight  < 0) deltaX = -freeSpaceAtRight

    if      (freeSpaceAtTop    < 0) deltaY =  freeSpaceAtTop
    else if (freeSpaceAtBottom < 0) deltaY = -freeSpaceAtBottom

    if (deltaX !== 0 || deltaY !== 0) {
      this.panningIntoView = true
      map.panBy(deltaX, deltaY)
    }
  }
}
