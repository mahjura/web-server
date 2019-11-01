// // ===============43.==========================
// const express = require('express')

// const app = express()

// app.get('', (req, res) => {
//     res.send('Hello express!')
// } )

// app.get('/help', (req, res) =>{
//     res.send('Help page')
// })

// app.get('/about', (req, res) =>{
//     res.send('About page')
// })

// app.get('/weather', (req, res) =>{
//     res.send('Your Weather')
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// // ===============44.serving up HTML & JSON ==========================
// const express = require('express')

// const app = express()

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// } )

// app.get('/help', (req, res) =>{
//     res.send([{
//         name : 'rossi',
//         // age : 21
//     }, {
//         name : 'fitri yani'
//     }])
// })



// app.get('/about', (req, res) =>{
//     res.send('<h1>About</h1>')
// })

// app.get('/weather', (req, res) =>{
//     res.send({
//         forecast : 'it is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// // ===============45.serving up static assets ==========================
// const path = require('path')
// const express = require('express')

// // console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// // console.log(__filename)

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

// // app.get('', (req, res) => {
// //     res.send('<h1>Weather</h1>')
// // } )

// // app.get('/help', (req, res) =>{
// //     res.send([{
// //         name : 'rossi',
// //         // age : 21
// //     }, {
// //         name : 'fitri yani'
// //     }])
// // })

// // app.get('/about', (req, res) =>{
// //     res.send('<h1>About</h1>')
// // })

// app.get('/weather', (req, res) =>{
//     res.send({
//         forecast : 'it is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// // =========================47. Dinamic pages with templating======================

// const path = require('path')
// const express = require('express')

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath))

// app.get('/index1', (req, res) => {
//     res.render('index1', {
//     title: 'Weather App',
//     name: 'Rossi Fitri Yani'
//     })

// })

// app.get('/about1', (req, res) => {
//     res.render('about1',{
//     title: 'About Me',
//     name: 'Rossi Fitri Yani'
//     })
// })

// app.get('/help1', (req, res) => {
//     res.render('help1',{
//         helpText : 'This is some helpful text'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast : 'it is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// ==========================48.customizing the views directory===================
// const path = require('path')
// const express = require('express')

// const app = express()

// // define paths for express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates')

// // setup handlebars engine and view location
// app.set('view engine', 'hbs')
// app.set('views',viewsPath)

// // setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('/index1', (req, res) => {
//     res.render('index1', {
//     title: 'Weather App',
//     name: 'Rossi Fitri Yani'
//     })

// })

// app.get('/about1', (req, res) => {
//     res.render('about1',{
//     title: 'About Me',
//     name: 'Rossi Fitri Yani'
//     })
// })

// app.get('/help1', (req, res) => {
//     res.render('help1',{
//         helpText : 'This is some helpful text'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast : 'it is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })



// ==========================49. Advance templating===================
// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')

// const app = express()

// // define paths for express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')

// // setup handlebars engine and view location
// app.set('view engine', 'hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialsPath)


// // setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('/index1', (req, res) => {
//     res.render('index1', {
//     title: 'Weather',
//     name: 'Rossi Fitri Yani'
//     })

// })

// app.get('/about1', (req, res) => {
//     res.render('about1',{
//     title: 'About Me',
//     name: 'Rossi Fitri Yani'
//     })
// })

// app.get('/help1', (req, res) => {
//     res.render('help1',{
//         helpText : 'This is some helpful text',
//         title: 'Help',
//         name : 'Rossi Fitri Yani'
//     })
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast : 'it is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// ==========================50. 404 pages ===================
// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const app = express()

// // define paths for express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')

// // setup handlebars engine and view location
// app.set('view engine', 'hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialsPath)


// // setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//     title: 'Weather',
//     name: 'Rossi Fitri Yani'
//     })

// })

// app.get('/about', (req, res) => {
//     res.render('about',{
//     title: 'About Me',
//     name: 'Rossi Fitri Yani'
//     })
// })

// app.get('/help', (req, res) => {
//     res.render('help',{
//         helpText : 'This is some helpful text',
//         title: 'Help',
//         name : 'Rossi Fitri Yani'
//     })
// })

// app.get('/weather', (req, res) => {
//     if(!req.query.address) {
//         return res.send({
//             error: 'You must provide  an address'
//         })
//     }
//     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
//         if(error) {
//             return res.send({error})
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if(error) {
//                 return res.send({error})
//             }
//             res.send({
//                 forecast : forecastData,
//                 location,
//                 address: req.query.address
                    
//             })
//         })
//     })
//     // res.send({
//     //     forecast : 'it is snowing',
//     //     location: 'Philadelphia',
//     //     address: req.query.address
//     // })
// })

// app.get('/products', (req, res) => {
//     if (!req.query.search) {
//         res.send({
//             error: 'You must provide a search tern'
//         })
//     }
//     console.log(req.query.search)
//     res.send({
//         products: []
//     })
// })

// app.get('/help/*', (req, res) =>{
//     res.render('404', {
//         title:'404',
//         name:'Rossi Fitri Yani',
//         errorMessage: 'Help article not found.'
//     })

// })
// app.get('*', (req, res) => {
//     res.render('404', {
//         title:'404',
//         name:'Rossi Fitri Yani',
//         errorMessage: 'Page not found.'
//     })
//     // res.send('My 404 pages')
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// })


// ==========================56. function parameters ===================
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
//====== 67. deploying node. to heroku=======//
const port = process.env.PORT|| 3000

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
    title: 'Weather',
    name: 'Rossi Fitri Yani'
    })

})

app.get('/about', (req, res) => {
    res.render('about',{
    title: 'About Me',
    name: 'Rossi Fitri Yani'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        helpText : 'This is some helpful text',
        title: 'Help',
        name : 'Rossi Fitri Yani'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide  an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location,
                address: req.query.address
                    
            })
        })
    })
    // res.send({
    //     forecast : 'it is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'You must provide a search tern'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) =>{
    res.render('404', {
        title:'404',
        name:'Rossi Fitri Yani',
        errorMessage: 'Help article not found.'
    })

})
app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Rossi Fitri Yani',
        errorMessage: 'Page not found.'
    })
    // res.send('My 404 pages')
})

//====== 67. deploying node. to heroku=======//
app.listen(port, () => {
    console.log('Server is up on port' + port)

    
// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
})



