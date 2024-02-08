const express = require('express')
const app = express()
let data = require('./data')
const port = 3000;

// static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.get('/api/people', (req, res) => 
{
    console.log("api people called");
    res.status(200).json({success : true, item : data.people})
})

app.post('/api/people', (req, res) =>
{
    const {name} = req.body
    if (!name)
    {
        res.status(400).json({ success : false, msg : "please provide name value"})
    }
    else
    {
        res.status(200).json({ success : true, person : name})
    }
})
app.post('/api/postman/people', (req, res) => // for testing in postman app
{
    const {name} = req.body
    if (!name)
    {
        res.status(400).json({ success : false, msg : "please provide name value"})
    }
    else
    {
        res.status(200).json({ success : true, data : [...data.people], name})
    }
})

//form example
app.post('/login', (req, res) =>
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

app.put('/api/people/:id', (req, res) =>
{
    const id = req.params.id
    const name = req.body.name
    
    const person = data.people.find((item) =>
    {
        return item.id === Number(id)
    })
    if (!person)
    {
        res.status(404).json({ success : false, msg : `no person with id ${id}`})
    }
    else
    {
        const newPerson = data.people.map((item) =>
        {
            if(item.id === Number(id))
            {
                item.name = name
            }
            return item
        })
    res.status(200).json({ success : true, data : newPerson})
    }
})

app.delete('/api/people/:id', (req, res) =>
{
    const person = data.people.find((item) => item.id === Number(req.params.id))
    if (!person)
    {
        res.status(404).json({success : false, msg : `no person with id ${req.params.id}`})
    }
    else
    {
        const newPerson = data.people.filter((item) => item.id !== Number(req.params.id))
        res.status(200).json({success : true, data : newPerson})
    }
})


app.listen(port, () =>
{
    console.log("server is listening on port 3000");
})

