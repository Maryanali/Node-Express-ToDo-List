//jshint esversion:6

module.exports = getDate;
//no parenthesis because not calling the function

function getDate(){

let today = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let day = today.toLocaleDateString("en-US", options);

return day;

}