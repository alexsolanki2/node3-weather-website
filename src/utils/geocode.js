const request = require('request')
// const chalk = require('chalk')

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxleHNvbGFua2kyIiwiYSI6ImNrOG93Mnl4ZTA0aGgzbHBsNDZ3ZGIwZWMifQ.4Numd-LtzVZST04EqrKtqw&limit=1'
    request({ url, json: true }, (error, {body}) => {
    if (error) {
        callback('No network!', undefined)
    } else if (!body.features.length) {
        callback('No match found', undefined)
    } else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
        })
    }
    })
}

module.exports = geocode
