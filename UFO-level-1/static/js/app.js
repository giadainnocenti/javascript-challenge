// from data.js
var tableData = data;
//writing on the console the whole dataset
console.log(data);
//Showing all the possible dates unfiltered
UpdateTable(tableData)

//select the button
var button = d3.select("#filter-btn");
//select the form
var form = d3.select(".form-control");

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
    //writing on the console the input value
    console.log(inputValue);
    

    //filtering the dataset with respect to the input
    var filterData = tableData.filter(data => data.datetime === inputValue);
    // writing the filtered data on the console
    console.log(filterData);
    //writing the filtered data on the online table
    UpdateTable(filterData);
    
    return filterData
};


function UpdateTable(array){
    //select the body of the table
    var tbody = d3.select("tbody");

    // clear the that may already be in the table.
	tbody.html("");
    //if the filtered data do not contain elements print an empty table
    if (array === null)
        return;
    //printing all the rows in tbody
    array.forEach((array) => {
        var row = tbody.append("tr");
        Object.entries(array).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
        });
    });
};
