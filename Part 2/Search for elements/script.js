// 1. The table with `id="age-table"`.
let table = document.getElementById("age-table");
console.log(table);
// 2. All label elements inside that table
let elementLabel = table.getElementsByTagName("label");
console.log(elementLabel);
// or
elementLabel = document.querySelectorAll("#age-table label");
console.log(elementLabel);

// 3. The first td in that table (with the word "Age")
console.log(table.rows[0].cells[0]);
// or
console.log(table.getElementsByTagName("td")[0]);
// or
console.log(table.querySelector("td"));

// 4. The form with the name "search"\
let form = document.getElementsByName("search")[0];
console.log(form);
// or, form specifically
console.log(document.querySelector('form[name="search"]'));

// 5. The first input in that form.
console.log(form.getElementsByTagName("input")[0]);
// or
console.log(form.querySelector("input"));

// 6. The last input in that form
let inputs = form.querySelectorAll("input");
console.log(inputs);
console.log(inputs[inputs.length - 1]);
