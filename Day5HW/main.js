//exercise 1
function addNumbers(numberA, numberB) {
  return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo); // 4

//exercise 2
var yellstring = "yelling very loudly at the moment!";

console.log (yellstring.toUpperCase());


//exercise 3
for(i = 0; i <= 10; i++){
	console.log(yellstring.toUpperCase());
}


//exercise 4
function longest(a, b){
  var winner;
  if (a.length > b.length) {
    winner = a;
  } else {
    winner = b;
  }
  return winner;
};

console.log(longest("ridiculous", "statesmen"));

//exercise 5
