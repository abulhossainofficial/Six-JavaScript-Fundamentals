// how to declare a variable using let and const

const myFatherName = "A. Rob Howlader";
let season = "rainy";
season = "winter";

// 2. condition
// 6 basic conditions:  < , > , === , !== , <= , >=
// Multiple conditions: && , ||

if (myFatherName === "Rob Howlader" || season === "rainy") {
} else if (myFatherName === "A. Rob Howlader") {
} else {
}

// 3. array declare

// index, length, push

const numbers = [89, 45, 75, 63, 85];
numbers[0] = 11;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
