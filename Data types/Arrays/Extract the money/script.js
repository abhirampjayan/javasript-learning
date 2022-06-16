const num1 = prompt("Enter string");

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue(num1));
