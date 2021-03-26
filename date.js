//jshint esversion:6

module.exports = getDate;
//no parenthesis because not calling the function
//module.export is a javascript object, so we can transport more than one function.
//module.exports.getDate=getDate; then use another one for day module.exports.getDay;
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