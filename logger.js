// req => middleware => res
// this is middleware fucntion
const logger = (req, res, next) =>
{
    console.log(req.url)
    console.log(req.method)
    console.log(new Date().getFullYear())
    next()
    
}

module.exports = {logger}