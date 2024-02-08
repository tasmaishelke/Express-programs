const express = require('express');
const app = express();

app.use(express.static('./navbar-app'))

app.all('*',(req, res) =>
{
    res.status(400).send('resource not found')
})

app.listen(3000, () =>
{
    console.log('server is listening on port 3000')
})
