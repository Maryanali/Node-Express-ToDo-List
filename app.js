//jshint esversion:6

const express =require("express");
const bodyParser = require("body-parser");
const app= express();
var items= [];//an array so we can append the item to the array.
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
var day = today.toLocaleDateString("en-US", options);
res.render("list", {kindOfDay: day, newListItems: items});

});
//handle post requests to the home route
app.post("/", function(req,res){
 var item= req.body.newItem;
 items.push(item);
 //redirect to home route, triggers app.get which res.renders which will pass it both the kind of day and the new list item.
 res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});