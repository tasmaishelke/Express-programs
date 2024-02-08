const express = require('express')
const router = express.Router()


//form example
router.post('/', (req, res) =>
{
    console.log(req.body)
    const name = req.body.name
    if (name)
    {
        res.status(200).send(`hello ${name}`)
    }
    else
    {
        res.status(401).send('Please enter correct credentials')
    }
})

module.exports = {router}