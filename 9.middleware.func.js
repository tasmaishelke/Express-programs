const express = require('express')
const app = express()
const middleWareLogger = require('./logger') //logger fucntion
const middleWareAuthorize = require('./authorize')


//app.use([middleWareAuthorize, middleWareLogger.logger]) // app.use(middleware) : will add middleware to all the routes.
                                                                        //       to add specifically to one route add in get.parameters 

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
app.get('/api/items',[middleWareAuthorize, middleWareLogger.logger],(req, res) =>
{
    console.log(req.user)
    res.send("api items")
})
app.listen(3000, () =>
{
    console.log("server is listening on port 3000")
})

// there are 3 middleware functions
// 1. own, self made : authorize, logger 
// 2. express : express.static()
// 3. third party : morgan