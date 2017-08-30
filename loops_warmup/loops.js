// Finding leap years
for (var leapYears = 1917; leapYears < 2017; leapYears++) {
if (leapYears % 4 === 0) {
    console.log(leapYears);
  }
}

// Finding numbers that are a multiple of 7
for (var i = 0; i <= 200; i++) {
  if (i % 7 === 0) {
    console.log(i + " is a multiple of 7");
  }
}

// Finding every second odd number
for (var i = 1; i <= 200; i += 4) {
  console.log(i + " is an odd number");
}
//better way
var first_found = false;
for (var i = 0; i <= 200; i++) {
  if (i % 2 !== 0){
    if (!first_found) {
      first_found = true;
    } else {
      console.log(i + " is an odd number");
      first_found = false;
    }
  }
}

//Finding Prime numbers
for (var i = 0; i < 200; i++) {

}
