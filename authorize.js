const  authorize = (req, res, next) =>
{
    console.log(req.query)
    const {user} = req.query
    if (user === 'tasz')
    {
        req.user = {name: "tasz", id : 4}
        next()
    }
    else
    {
        res.status(401).send("unauthorize ")
        
    }
    
}

module.exports = authorize