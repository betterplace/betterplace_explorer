export default class ApiLoader {
  static load(apiBaseUrl, bounds, page, perPage, successHandler) {
    var params = {
      nelat:    bounds.north,
      nelng:    bounds.east,
      swlat:    bounds.south,
      swlng:    bounds.west,
      page:     page,
      per_page: perPage,
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
