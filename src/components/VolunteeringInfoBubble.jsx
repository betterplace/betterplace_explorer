require('js-info-bubble')

import React from 'react'
import ReactDOM from 'react-dom'
import Volunteering from './Volunteering.jsx'

const closeButton = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH4AcBDyECucE5pQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABeUlEQVRIx+2WP0gCURzHf8/9BnG2xbEhQgTRa6xuqkMlWwShW4KIIBoOBV2k4VA6o03aRV10OMS5wTFoDMMowuG4yYYIvi0tiug9u+6W+42/93vfD+/3573HAIA8sAB5ZD7YB/tgd8HXhQvKpmVbgqdnx5Tc3XIGrFZuKBwOUzp1sDQulT2kABPoYfC4WhQcphZU7CSSC9eyRzIur85ta3GBAUDX77AvSTM+SdpDvz/g0uEGA0Cn00axWAQAVKtV6LrOrbEWGAC63S5isRjq9fpa+9ceJ0EQiDFG4/HYvTkul8vUbDZpOBxSJBIhTdP4RXhT1Gg0oCjKjE9RFOTz+f+rca1WgyiKC9dkWYamac6DS6USpLkxmrdMJoNcLudMc02nU4pGozSZTMgwjKWxrVaLLMuieDy+ssTMzmfPNE0KhUK2+8ayLAoGg38H+++xU2CPUv3y/OYJ+OtzVPECzH6vzSci2nT1xK/tWzpJbGyPPnr33/TuGvgH20NgH3WoB5MAAAAASUVORK5CYII='

export default class VolunteeringInfoBubble extends InfoBubble {
  constructor(record, map) {
    var div = document.createElement('div')
    ReactDOM.render(<Volunteering record={record} key={record.id}/>, div)

    var infoBubble = super({
      borderRadius: 0,
      closeSrc: closeButton,
      content: div,
      disableAnimation: true,
      map: map,
      maxHeight: 290,
      maxWidth: 212,
      minHeight: 290,
      minWidth: 212,
      padding: 0,
      position: new google.maps.LatLng(record.latitude, record.longitude),
      shadowStyle: 0,
    })

    infoBubble.bubble_.className += 'bpe--volunteering-info-bubble'
    infoBubble.close_.className  += 'bpe--volunteering-info-bubble-close'

    infoBubble.record = record

    return infoBubble
  }
}
