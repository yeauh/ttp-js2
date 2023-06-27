// Code your solution here
/*
    Create the function `multiplicationTable` that accepts two arguments

- `rows`
- `columns`

The `rows` X `columns` represents the dimension of a multiplication table
*/

function multiplicationTable(rows, columns) {
    // Create an empty array to store the multiplication table
    let table = [];
  
    // Iterate over each row
    for (let i = 1; i <= rows; i++) {
      let row = [];
  
      // Iterate over each column in the current row
      for (let j = 1; j <= columns; j++) {
        // Calculate the product of the current row and column
        let product = i * j;
  
        // Push the product into the row array
        row.push(product);
      }
  
      // Push the row array into the table array
      table.push(row);
    }
  
    return table;
  }
  