// //=============================37.callback abstraction challenge==================================

// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url ='https://api.darksky.net/forecast/1dd615a1a51f42698230d63b23fb5f10/' + latitude + ',' + longitude

//     request({url: url, json: true}, (error, response) => {
//         if (error){
//             callback('Unable  to connect to weather service', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature +
//                ' degress out. There is a ' + response.body.currently.precipProbability + ' % chance of rain')
//         }
//     } )
// }

// module.exports = forecast

//=============================40. destructuring==================================

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='https://api.darksky.net/forecast/1dd615a1a51f42698230d63b23fb5f10/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable  to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // ===================68. New feature deployment workflow ===========================
            // console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
               ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. there is a ' + body.currently.precipProbability + ' % chance of rain')
        }
    } )
}

module.exports = forecast