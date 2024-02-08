const express = require('express') // express has top level function "express()" as well as property function "express.static()"
const app = express() // express() is a top level function

app.get('/', (req, res) =>
{
    console.log(req.url)
    console.log(req.method)
    console.log(res.method)
    res.send("hello")

})

app.listen(3000, () =>
{
    console.log("server is listening on port 3000")
})