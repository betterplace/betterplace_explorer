export default class ApiLoader {
  static load(apiBaseUrl, bounds, page, successHandler) {
    var params = {
      nelat:    bounds.north,
      nelng:    bounds.east,
      swlat:    bounds.south,
      swlng:    bounds.west,
      page:     page,
      per_page: 25,
    }
    var url = apiBaseUrl + ApiLoader.toQuery(params)
    fetch(url)
      .then(response => response.json())
      .then(json     => successHandler(json))
      .then(undefined, function(err) { console.log(err) })
  }

  static toQuery(object) {
    return '?' + Object.keys(object).map(function(k, _) {
      return k + '=' + object[k]
    }).join('&')
  }
}
