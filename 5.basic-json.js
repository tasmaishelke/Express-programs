const express = require('express')
const app = express()
const data = require('./data')

// basic method to send json format 
// app.get('/', (req, res) =>
// {
//     res.json([{name : 'tasz'}, {name : 'tasmai'}])
// })

app.get('/', (req, res) =>
{
    res.json(data.products)
})

app.listen(3000, () => 
{
    console.log("server is listening on port 3000")
})