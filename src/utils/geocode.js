//====================36.
// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmZ5Zml0cmkiLCJhIjoiY2syMnQ2OG9nMG5sZzNob2NpdnlpNDA2ZCJ9.Y-7GgOPGGQ8KJpLRDprdOw&limit=1'

//     request({url : url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location service', undefined)
//         } else if (response.body.features.length ===0){
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude :response.body.features[0].center[0],
//                 longitude:response.body.features[0].center[1],
//                 location :response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode


// // ================38. callback chaining===================

// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmZ5Zml0cmkiLCJhIjoiY2syMnQ2OG9nMG5sZzNob2NpdnlpNDA2ZCJ9.Y-7GgOPGGQ8KJpLRDprdOw&limit=1'

//     request({url : url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location service', undefined)
//         } else if (response.body.features.length ===0){
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude :response.body.features[0].center[1],
//                 longitude:response.body.features[0].center[0],
//                 location :response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode


// ================40. destructuring===================

const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmZ5Zml0cmkiLCJhIjoiY2syMnQ2OG9nMG5sZzNob2NpdnlpNDA2ZCJ9.Y-7GgOPGGQ8KJpLRDprdOw&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (body.features.length ===0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude :body.features[0].center[1],
                longitude:body.features[0].center[0],
                location :body.features[0].place_name
            })
        }
    })
}


module.exports = geocode