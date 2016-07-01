require('js-info-bubble')

import React from 'react'
import ReactDOM from 'react-dom'
import Volunteering from './Volunteering.jsx'

export default class VolunteeringInfoBubble extends InfoBubble {
  constructor(record, map) {
    var div = document.createElement('div')
    ReactDOM.render(<Volunteering record={record} key={record.id}/>, div)

    var infoBubble = super({
      content: div,
      disableAnimation: true,
      maxWidth: 300,
      position: new google.maps.LatLng(record.latitude, record.longitude),
      map: map,
      borderRadius: 0,
      shadowStyle: 0,
      minWidth: 212,
      maxWidth: 212,
      minHeight: 290,
      maxHeight: 290,
      hideCloseButton: true,
      padding: 0,
    })

    infoBubble.record = record;

    return infoBubble;
  }
}
