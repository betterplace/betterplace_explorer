import React from 'react'

var Volunteering = React.createClass({
  render: function() {
    var imageUrl = this.findLink(this.props.record.image.links, "fill_270x141")

    return (
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src={imageUrl} alt="{this.props.record.title}" />
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{this.props.record.title}</h4>
          {this.props.record.description}
        </div>
      </div>
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
