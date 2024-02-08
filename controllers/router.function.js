let data = require('../data')

getPerson = (req, res) => 
{
    res.status(200).json({success : true, item : data.people})
}
createPerson = (req, res) =>
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
}
createPersonPostman = (req, res) => // for testing in postman app
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
}
updatePerson =  (req, res) =>
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
}
deletePerson = (req, res) =>
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
}
module.exports = 
{
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}