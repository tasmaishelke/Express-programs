const express = require('express')
const app = express()
const middleWareLogger = require('./logger') //logger fucntion

// // req => middleware => res
// const later = (req, res, next) =>                    //middleware function can be invoked here or in other module
// {
//     console.log(req.url)
//     console.log(req.method)
//     console.log(new Date().getFullYear())
//     next()
//     // res.send("hello")
// }

app.use('/api',middleWareLogger.logger)

app.get('/', (req, res) =>
{
    res.send("homepage")
})
app.get('/about', (req, res) =>
{
    res.send("about")
})
app.get('/api/products', (req, res) =>
{
    res.send("api products")
})
app.get('/api/items', (req, res) =>
{
    res.send("api items")
})
app.listen(3000, () =>
{
    console.log("server is listening on port 3000")
})