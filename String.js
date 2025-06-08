//(Q1) let string = "Sabyasachi, Techno Exponent Techno I Sabyasachi";

// o/p
// Sabyasachi - 2
// Techno - 2
// Exponent -1
// I - 1

//sol :-

// let string = "Sabyasachi, Techno Exponent Techno I Sabyasachi";

// let words = string.replace(/,/g, '').split(' ');

// let wordCount = new Map();

// words.forEach(word => {
//   wordCount.set(word, (wordCount.get(word) || 0) + 1);
// });

// wordCount.forEach((count, word) => {
//   console.log(`${word} - ${count}`);
// });


let words = string.replace(/,/g, '').split(' ');

let wordCount = {};

words.forEach(word => {
  if (wordCount[word]) {
    wordCount[word]++; 
  } else {
    wordCount[word] = 1; 
  }
});

for (let word in wordCount) {
  console.log(`${word} - ${wordCount[word]}`);
}


//Q2) Map, Filter, and Reduce Lab
// In this lab, you will implement your own map, filter, and reduce functions in JavaScript. These functions are commonly used for array manipulation in JavaScript. Map, filter, and reduce functions are higher-order functions that accept a callback function as an argument and apply that function to the elements of the input array in different ways.

// By the end of this lab, you should have 3 functional implementations for map, filter, and reduce.

// Make sure to export all the functions using ESM export.

//sol :- 

//myMap :- 