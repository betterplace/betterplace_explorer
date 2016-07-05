import { Marker } from 'react-google-maps'
import React from 'react'

require('es6-object-assign').polyfill();

const pinDimensions = {
  anchor: new google.maps.Point(16, 16),
  origin: new google.maps.Point(0, 0),
  size:   new google.maps.Size(32, 32),
}

const defaultPin = Object.assign({}, pinDimensions, { url:
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABCFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD26OP39/cAAADPz88AAAAAAAAAAAD9/f3p6ens7Ozt7e2CgoLb29vt7e0nJyeampqZmZns7OwsLCxKSkqZmZkAAADa2tqHh4cwMDDq6uqEhIT+/v4AAABERETPz89HR0cAAADc3Nzb29u2Og+1OA3PfWG4QRi9TSfKb1C1OQ7luqvJb0/25uHcoY325+K3PRTmu6y2PBLfqJa3PRPowrXcoo7BVzPPfmL26OO9Tii2OhDep5Tluar15eD15N/epZK5Qhkx1ZAbAAAAOnRSTlMAAQcCBA4UDwMVKAUWHBMIIi0GDB0rC/7tHp8nGin70NLVWLHXNGhn0zQ+ZiqxWTXQWfsZPJ49H7SyPeI8ZAAAAXFJREFUeAGFk+MaIzEYhZOMbdW2l7Xdte7/TnbTp2628/7N55wDLkDI0xL6h0TzEIJHIEUjl1MFWRZUzkU0BR+fNYZVdNExDEfUFZbR7kIgZVpsEM9Ekn4i4ScjmXjAWuY1AvKIeROtpr4sZl9Xw0/jxc9UMRpjEA/P+Yiz81lv8K1/ojfwsnmbQ6calMnYb9P7P/0bhtP0e5sxqWMB2oqVc9te/47J91wzZtEQF9DYaH096T8wWXejrEbhAkxQ9Yb9J4ZeMWBoCCBi46nPfQKDUk1AEPCu0l72SAG9ZUNxeUBz+rtDn8ghonM0kFQxOSYHjFuiKgEkOP6IHDDyHQEBJBuJFTlglzDk8IDwFnjI2Ysh8ZqRl2viQ83Jh5ofDwWREC8NXpwaf1aB/FmFDwwNT989ff7u6UcRf/d/BfP7JJiT5CqPkvuRrmDJ3Yu2RxTtSfaxaBHLfrTZjGaLX6nCSfbPxul0HowTZr1w84ba/y8wjYohV+qwEQAAAABJRU5ErkJggg=='
})

const highlightedPin = Object.assign({}, pinDimensions, { url:
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAZlBMVEUAAAAAAAAAAAAAAAAAAACAkg56iw55ig2Elw99jw5mdQuGmQ+GmQ92hw11hQ1NWAkjJwN8jg5lcwtPWwlMVwiDlQ9lcwu10gCctAiMoQ2lvwWowwSwzAKNoQ2XrQqXrgqVqwquyQLEz9E4AAAAF3RSTlMABgsRFcSlmum0Uvv4iYk2HbRTODXeUVMH+38AAADRSURBVDjLlZPZEoIwDEVNWnZkc0nLpv7/T9qRKoMNZjyvOXOh7c3hL8CzN0WltEMhArDj8zFKy/ISHU8qUNw4b60ZRqLHYKY2d8p2rhPb04feJtobft7Ed9pwi5vVANSxoS9MvGaASmYKmBMF74CrJQabI/iAtueEPvMRWE/EMtW4BFSGF0yl4CVEAy8M0SLodOSFMdWLUNIOhSzIn5B/Uj6mfFEuIvt91YA5/1gdgvjccmHkysmlXWufLbUfXe2zTiHwi1MUabA4weoFY2F5BZ4doDDq7NmUwgAAAABJRU5ErkJggg=='
})

const visitedPin = Object.assign({}, pinDimensions, { url:
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v739/fs7Ozq6urPz8+ZmZmEhIQqKioAAAAAAADa2trt7e3t7e1ISEjc3NwAAABnZGPt7e1ua2q4t7acmpmRj453dHRraGfr6+u8u7rLysnR0M/LysrJyMh/fHvZ2w4nAAAAGHRSTlMABAcNFCgdLPvt09CfZ1g0Ihmx19U9sh+WxKfKAAAA+klEQVQ4y42T2RbCIAxERQjdVzegq3X5/080okerzTHOSx/mnimQyWomIcQahZ8VITSlVF5SIkTYSpcQoKDU6hvxNuRpEoVhlKQ5eOTDryCLbdP1g7t2zRhnUCEx83VR29a81Nq60Ei8/d325MxMbtruXoSQVbE5mi8dN0UlxSNAQX02C533oHyEkDqzbgk4m2kfgQFxawi1MUb4gNwaUjbHCATKtKGBJi3vgIKko4EuASXwCEHU00AfBWp9B8KBBobwH4D9BX9I/pr4UCMNjP6hmKf+PawDBjzHPS2B6TluvjB05S6PynGlpWo/9LPa84vDrx6/vOz63wC77Demd5pVhAAAAABJRU5ErkJggg=='
})

var VolunteeringMarker = React.createClass({
  render: function() {
    return (<Marker
              {...this.props}
              customInfo={this.props.record.title}
              icon={this.getPinStyle()}
              key={this.props.record.id}
              position={{ lat: this.props.record.latitude, lng: this.props.record.longitude }}
              zIndex={this.props.highlighted ? 10000 : null}
            />)
  },

  getPinStyle: function() {
    if (this.props.highlighted)
      return highlightedPin
    else if (this.props.visited)
      return visitedPin
    else
      return defaultPin
  },
})

export default VolunteeringMarker
