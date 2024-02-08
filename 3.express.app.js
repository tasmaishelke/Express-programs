const path = require('path');
const express = require('express');
const app = express();

// static files means those files that server doesnt need to change
app.use(express.static('./navbar-app'))

app.get('/', (req, res) =>
{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req, res) =>
{
    res.status(400).send('resource not found')
})

app.listen(3000, () =>
{
    console.log('server is listening on port 3000')
})
