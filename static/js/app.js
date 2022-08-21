// import the data from data.js
// const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody")

// Addition
function addition(a,b){
var total = a+b;

return total
};

// Double addition
function doubleAddition(c,d){
var total = addition(c,d)*2;

return total;

};

console.log(doubleAddition(65,34))

let friends = ["Sarah","Greg","Cindy","Jeff"]

// To iterate through each name in JavaScript, we can create a for loop. First, type the following in your console
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 console.log(listLoop(friends))

 // First, let's create a for loop to iterate through an array of vegetables. Here's our array:
 let vegetables = ["Carrots","Peas","Lettuce","Tomatoes"];

 function veggieList(vegList){
    for(var i = 0; i<vegetables.length; i++){
        console.log("I love "+vegetables[i]);
    }
 }

 console.log(veggieList(vegetables));

 // build table data
 function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }