const request = require('request')
// const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=474822f2e896c091b92f6fed7d54bb0f&query=' + latitude + ',' + longitude + ''
    
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('No network', undefined)
        }
        else if (body.error) {
            callback('No match', undefined)
        }
        else {
            callback(undefined ,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast