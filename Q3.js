function myAtoi(str) {
  var check = /[^A-Za-z0-9]/g;
  if (str.match(check)) {
    return;
  } else {
    return parseInt(str);
  }
}

console.log(myAtoi("23"));
