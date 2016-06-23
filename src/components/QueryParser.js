export default class QueryParser {
  constructor() {
    var query = {}
    for (var queryPart of window.location.search.substr(1).split('&')) {
      var keyValue = queryPart.split('=')
      query[keyValue[0]] = keyValue[1]
    }

    return {
      bounds: {
        north: parseFloat(query.north) || this.props.initialBounds.north,
        south: parseFloat(query.south) || this.props.initialBounds.south,
        west:  parseFloat(query.west) || this.props.initialBounds.west,
        east:  parseFloat(query.east) || this.props.initialBounds.east,
      },
      page: parseInt(query.page, 1)
    }
  }
}
