export default class QueryParser {
  constructor(defaults) {
    var query = {}
    for (var queryPart of window.location.search.substr(1).split('&')) {
      var keyValue = queryPart.split('=')
      query[keyValue[0]] = keyValue[1]
    }

    return {
      bounds: {
        north: parseFloat(query.north) || defaults.north,
        south: parseFloat(query.south) || defaults.south,
        west:  parseFloat(query.west) || defaults.west,
        east:  parseFloat(query.east) || defaults.east,
      },
      location: query.location ? decodeURIComponent(query.location) : '',
      page: parseInt(query.page) || 1,
    }
  }
}
