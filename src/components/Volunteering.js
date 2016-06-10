import React from 'react'

var Volunteering = React.createClass({
  render: function() {
    var imageUrl = this.findLink(this.props.record.image.links, "fill_270x141")

    return (
      <a href='#'>
        <div className="bpe--volunteering media">
          <img className="bpe--volunteering--image" src={imageUrl} alt="{this.props.record.title}" />
          <div className="bpe--volunteering--body">
            <p><small className="text-muted">{this.props.record.carrier.name}</small></p>
            <h4 className="media-heading">{this.props.record.title}</h4>
          </div>
        </div>
      </a>
    )
  },

  findLink: function(links, rel) {
    for (var i = 0; i < links.length; i++) {
      if(links[i].rel === rel)
        return links[i].href
    }
  }
});

export default Volunteering
