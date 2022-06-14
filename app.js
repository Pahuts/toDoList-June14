const express = require('express')
const bodyParser = require('body-parser')

var items = []
var createdOnList = []

const app = express()
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res) {
  var date = new Date()
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  } 

  var today = date.toLocaleDateString("en-PH", options)
  
  res.render("list", {newItems: items, createdOn: createdOnList})
})

app.post("/", function(req,res) {
  var item = req.body.newItem
  var options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  } 
  var createdOn = new Date().toLocaleDateString("en-PH", options)
  console.log(item)
  console.log(createdOn)
  createdOnList.push(createdOn)
  items.push(item)

  res.redirect("/")
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})