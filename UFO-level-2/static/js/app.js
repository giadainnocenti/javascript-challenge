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
    //starting to filter by the date
    console.log("Filtering by Date")
    var date_table = Datetime_filter(data);
    date_table = Check_dataset(date_table, data);
    //starting to filter by the city
    console.log("Filtering by City")
    var city_table = city_filter(date_table);
    city_table = Check_dataset(city_table, date_table);
    //starting to filter by the state
    console.log("Filtering by State")
    var state_table = state_filter(city_table);
    state_table = Check_dataset(state_table, city_table);
    //starting to filter by the country
    console.log("Filtering by Country")
    var country_table = country_filter(state_table);
    country_table = Check_dataset(country_table,state_table);
    //starting to filter by the shape
    console.log("Filtering by Shape")
    var shape_table = shape_filter(country_table);
    shape_table = Check_dataset(shape_table, country_table);
    //writing the filtered data on the online table
    UpdateTable(shape_table);
    
};

function Check_dataset(new_table, old_table){
    if (new_table === "Not Interested"){
        new_table = old_table;
    };
    console.log(new_table);
    return new_table;
};


function Datetime_filter(table_array){
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    //writing on the console the input value
    console.log(inputValue);
    if (inputValue === ""){
        filterData = "Not Interested";
    } else {
    //filtering the dataset with respect to the input
    var filterData = table_array.filter(table_array => table_array.datetime === inputValue);
    };
    // writing the filtered data on the console
    console.log(filterData);
    return filterData
};

function city_filter(table_array){
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    //writing on the console the input value
    console.log(inputValue);
    if (inputValue === ""){
        filterCity = "Not Interested";
    } else {
    //filtering the dataset with respect to the input
    var filterCity = table_array.filter(table_array => table_array.city === inputValue.toLowerCase());
    };
    // writing the filtered data on the console
    console.log(filterCity);
    return filterCity
};

function state_filter(table_array){
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    //writing on the console the input value
    console.log(inputValue);
    if (inputValue === ""){
        filterState = "Not Interested";
    } else {
    //filtering the dataset with respect to the input
    var filterState = table_array.filter(table_array => table_array.state === inputValue.toLowerCase());
    };
    // writing the filtered data on the console
    console.log(filterState);
    return filterState
};

function country_filter(table_array){
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#country");
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    //writing on the console the input value
    console.log(inputValue);
    if (inputValue === ""){
        filterCountry = "Not Interested";
    } else {
    //filtering the dataset with respect to the input
    var filterCountry = table_array.filter(table_array => table_array.country === inputValue.toLowerCase());
    };
    // writing the filtered data on the console
    console.log(filterCountry);
    return filterCountry
};

function shape_filter(table_array){
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    //writing on the console the input value
    console.log(inputValue);
    if (inputValue === ""){
        filterShape = "Not Interested";
    } else {
    //filtering the dataset with respect to the input
    var filterShape = table_array.filter(table_array => table_array.shape === inputValue.toLowerCase());
    };
    // writing the filtered data on the console
    console.log(filterShape);
    return filterShape
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
