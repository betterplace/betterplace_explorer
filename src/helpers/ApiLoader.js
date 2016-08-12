export default class ApiLoader {
  static load(params) {
    var url = ApiLoader.buildApiQueryUrl(params)

    fetch(url)
      .then(response => response.json())
      .then(json     => params.successHandler(json))
      .then(undefined, function(err) { console.log(err) })
  }

  static buildApiQueryUrl(params) {
    if (params.onlySearchInBounds)
      var queryParams = ApiLoader.boundsParams(params.bounds)
    else
      var queryParams = ApiLoader.aroundParams(params.bounds)

    Object.assign(queryParams, { page: params.page, per_page: params.perPage })

    return params.apiBaseUrl + ApiLoader.toQuery(queryParams)
  }

  static aroundParams(bounds) {
    var centerLat = (bounds.north + bounds.south) / 2,
        centerLng = (bounds.west  + bounds.east)  / 2
    return { around: `${centerLat},${centerLng}` }
  }

  static boundsParams(bounds) {
    return {
      nelat: bounds.north,
      nelng: bounds.east,
      swlat: bounds.south,
      swlng: bounds.west
    }
  }

  static toQuery(object) {
    return '?' + Object.keys(object).map(function(k, _) {
      return k + '=' + object[k]
    }).join('&')
  }
}
