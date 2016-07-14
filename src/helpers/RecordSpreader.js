export default class RecordSpreader {
  static spreadRecordsWithSameCoordinates(records) {
    var recordsByLatLng = {}

    for (var record of records) {
      var key = [record.latitude, record.longitude]
      if (!recordsByLatLng[key]) recordsByLatLng[key] = []
      recordsByLatLng[key].push(record)
    }

    for (var key in recordsByLatLng) {
      var recordsWithSamePosition = recordsByLatLng[key]
      if (recordsWithSamePosition.length < 2) continue

      // arrange in spiral

      for (var i = 0; i < recordsWithSamePosition.length; i++) {
        var record = recordsWithSamePosition[i]
        var angle = 0.666 * i;
        record.longitude += ((4 + angle) * Math.cos(angle)) / 52000;
        record.latitude  += ((4 + angle) * Math.sin(angle)) / 80000;
      }

      // arrange in square grid

      // var gridSize = Math.ceil(Math.sqrt(recordsWithSamePosition.length)),
      //     col = 0,
      //     row = 0

      // for (var record of recordsWithSamePosition) {
      //   record.longitude += col * 0.0002
      //   record.latitude  -= row * 0.00012
      //   col += 1
      //   if (col >= gridSize) {
      //     col = 0
      //     row += 1
      //   }
      // }
    }
  }
}
