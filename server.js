const fs = require('fs')
const http = require('http')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000;

app.use("/public",express.static('public'))
app.get('/', (req, res)=>{
    console.log('sending home page.')
    res.send(public/Index.html)
})
app.get("/about",(req, res)=>{
    // console.log("sending about page.", req.url)
    // res.sendFile(path.join(__dirname, 'about.html'))
})
app.get('/contact',(req, res)=>{
    console.log("sending contact page.")
    res.send(public/contact.html)
})
app.get('/booklinks',(req, res)=>{
    console.log("sending booklinks page.")
    res.send(public/booklinks.html)
})
app.get('*', (req, res)=>{
    res.send("404")
})
app.listen(port, ()=>{
    console.log(`The server is running at port: ${port}`)
})
