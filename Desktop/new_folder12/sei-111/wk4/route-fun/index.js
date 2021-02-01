// const express = require('express')
// const app = express()

// // GET Request
// app.get('/', (req, res)=>{
//     res.send('<h1>Hello world</h1>')
// })
// app.get('/bio', (req, res)=>{
//     res.send('a great guy')
// })
// app.get('/greeting/:name', (req, res)=>{
//     res.send(`hello ${req.params.name}, so nice of you`)
// })

// // we need to set out server on a port
// app.listen(8080)





// require express from node_modules
const express = require('express')
// start up app
const app = express()
// home route, will show up at 'localhost:8000/'
app.get('/', (req, res)=> {
    res.send('hello james')
})
//specific route for biography
// will show up when user goes to 'localhost:8000/bio'
app.get('/bio', (req, res)=> {
    res.send('A great guy, has a wonderful wife and dog')
})
// this route has a parameter name
// when a user makes a request like so
// EX: localhost:8000/greeting/Piper 
// req.params.name is assigned value of Piper
// req.params.name = Piper, then we can use it in response
app.get('/greeting/:name', function (req, res) {
    res.send(`Hello ${req.params.name}, so nice of you to stop by`)
})
// tells our server to listen at a certain port, 8000
// in this case

app.get('/multiply/:x/:y', (req, res)=> {
    //want to mulitply
    console.log(req.params.x)
    console.log(req.params.y)
    let result = req.params.x * req.params.y
    res.send(`your resilt ${result}`)
})

app.get('/query', (req, res)=> {
    let myQuery = req.query
    res.send(`${myQuery['pants']}`)
})


app.listen(8000, console.log('listening on port 8000'))