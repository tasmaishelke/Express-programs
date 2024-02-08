// "/api/products/:productID" this is whole route. productID is a route parameter

const express = require('express')
const app = express()

const data = require('./data')
// const { products } = require('./data')

app.get('/', (req, res) => //ask why not using req
{
    res.send('<h1> Home Page </h1> <a href = "/api/products"> products </a>')
})

app.get('/api/products', (req, res) =>
{
    const newProducts = data.products.map((items) => 
    {
        const {id, name, image} = items
        return {id, name, image}
    })
    res.json(newProducts)

})

app.get('/api/products/:productID', (req, res) =>
{
    const {productID} = req.params  //req.params is a object which store the route parameter name as key
    const singleProduct = data.products.find((item) =>
    {
        //if (item.id === Number(req.params.productID))
        if (item.id === Number(productID))
        {
            return item            
        }
    })
    console.log(singleProduct)
    if (!singleProduct)
    {
        res.status(404).send("product doesnt exist")
    }
    else
    {
        res.json(singleProduct)
    }

})

app.get('/api/products/:productID/reviews/:reviewID',(req, res) =>
{
    console.log(req.params)
    res.send("just cheking the route parameters")
})

app.get('/api/v1/query', (req, res) =>
{
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...data.products]
  
    if (search) 
    {
        sortedProducts = sortedProducts.filter((item) => 
        {
            return item.name.startsWith(search)
        })
    }
    if (limit) 
    {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) 
    {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }
    else
    {
        res.status(200).json(sortedProducts)
    }
})

app.listen(3000, () =>
{
    console.log("server is listening on port 3000")
})