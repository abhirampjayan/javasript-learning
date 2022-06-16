const num1 = prompt("Enter string");

function checkSpam(str) {
  if (!str) return true;
  let check = str.toLowerCase();
  return check.includes("viagra") || check.includes("xxx");
}

alert(checkSpam(num1));
