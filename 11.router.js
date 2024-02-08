const express = require('express')
const app = express()
const port = 3000;
const routerApi = require('./routes/router.api')
const routerAuth = require('./routes/router.auth')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/api/people', routerApi.router)
app.use('/login', routerAuth.router)

app.listen(port, () =>
{
    console.log("server is listening on port 3000");
})

