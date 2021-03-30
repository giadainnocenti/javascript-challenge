// from data.js
var tableData = data;
//select the button
var button = d3.select("#button");
//select the form
var form = d3.select("#form");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//creating the function to handle the events
function runEnter() {
    //preventing the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    //get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputvalue);
    console.log(data);


}
// YOUR CODE HERE!
