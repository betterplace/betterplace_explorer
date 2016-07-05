import React    from 'react'
import ReactDOM from 'react-dom'

var NullMap = React.createClass({
  render: function() {
    return null
  },

  componentDidUpdate: function(prevProps, prevState) {
    var newBounds = this.props.newBounds
    if (newBounds) this.props.mapIdle(newBounds)
  },
})

export default NullMap
