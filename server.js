const express = require('express')
const path = require('path')
const app = express()
const port = 3000
var ip;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/public/Index.html')
})
app.get('/about', function(req, res){
    res.sendFile(__dirname + '/public/about.html')
})
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/booklinks', function(req, res){
    res.sendFile(__dirname + '/public/booklinks.html')
})
app.get('*', function(req, res){
    res.send("<h1>404</h1> Page is not found.");
})
app.listen(port, ()=>{
    console.log(`server is start at port:${port}`)
})