//jshint esversion:6

const express =require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");//requiring a module
const app= express();
let items= [];//an array so we can append the item to the array.
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

 let day = date();
 // let day = date.getDate(); if there was more than one function in the module.
 res.render("list", {listTitle: day, newListItems: items});

});
//handle post requests to the home route
app.post("/", function(req,res){

 let item= req.body.newItem;
 if (req.body.list === "Work"){
   workItems.push(item);  
   res.redirect("/work"); 
 } else{
    items.push(item);
    res.redirect("/");
 }
 
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems:workItems});
});
app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");

})
app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 