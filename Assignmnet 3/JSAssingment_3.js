console.log("Q1: Create an array of states in India and remove names starting with vowels");

const states = [
  "Andhra Pradesh","Bihar","Assam","Odisha","Uttar Pradesh",
  "Karnataka","Kerala","Maharashtra","Tamil Nadu","Rajasthan"
];

const filteredStates = states.filter(
  s => !["A","E","I","O","U"].includes(s[0].toUpperCase())
);
console.log(filteredStates);


console.log("\nQ2: Reverse the sentence words");

let str = "I love my India";
let reversedSentence = str.split(" ").reverse().join(" ");
console.log(reversedSentence);


console.log("\nQ3: Convert INDIA to INDONESIA using splice");

let string = "INDIA";
let arr = string.split("");
arr.splice(3, 0, "O", "N", "E", "S");
console.log(arr.join(""));


console.log("\nQ4: Count vowels and consonants");

let longStr = "This is a long string with more than twenty characters";
let vowels = 0;
let consonants = 0;

for (let ch of longStr.toLowerCase()) {
  if (/[aeiou]/.test(ch)) vowels++;
  else if (/[a-z]/.test(ch)) consonants++;
}
console.log({ vowels, consonants });


console.log("\nQ5: Replace wrong word with correct word");

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}
console.log(correctfn("I love JvaaScript", "JvaaScript", "JavaScript"));


console.log("\nQ6: Filter numbers greater than 5");

let inputArr = [1,2,3,9,10,7,5,4,3];
let resultArr = inputArr.filter(n => n > 5);
console.log(resultArr);


console.log("\nQ7: Calculate average scores using map and reduce");

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const avgResult = students.map(s => ({
  name: s.name,
  average: s.scores.reduce((a, b) => a + b, 0) / s.scores.length
}));
console.log(avgResult);


console.log("\nQ8: Repeated sum of digits until single digit");

function repeatedDigitSum(num) {
  while (num > 9) {
    num = num.toString().split("").reduce((a, b) => a + Number(b), 0);
  }
  return num;
}
console.log(repeatedDigitSum(456));


console.log("\nQ9: Count number of words in a paragraph");

function wordCount(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log(wordCount("This is a sample paragraph with some words"));


console.log("\nQ10: Reverse a string");

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));


console.log("\nQ11: Calculate average marks for each student");

const input = [
  {
    student1: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    }
  },
  {
    student2: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    }
  },
  {
    student3: {
      subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37
    }
  }
];

const output = input.map(obj => {
  let key = Object.keys(obj)[0];
  let values = Object.values(obj[key]);
  let avg = values.reduce((a, b) => a + b, 0) / values.length;
  return { [key]: { average: avg } };
});
console.log(output);
