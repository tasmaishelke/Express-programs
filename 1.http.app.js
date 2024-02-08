const http = require('http')
const fileSystem = require('fs')

// get all files
const homePage = fileSystem.readFileSync('./navbar-app/index.html')
const homeStyles = fileSystem.readFileSync('./navbar-app/styles.css')
const homeImage = fileSystem.readFileSync('./navbar-app/logo.svg')
const homeLogic = fileSystem.readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => 
{
  // console.log(req.method)

  console.log(req.url)
  // home page
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1> about page </h1>')
    res.end()
  }
  // styles
  else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (req.url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1> page not found </h1>')
    res.end()
  }
})

server.listen(5000)
