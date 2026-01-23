console.log("Q1: Difference between var, let, and const (Scope Example)");

function scopeExample() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log("var a is accessible:", a);
  // console.log(b); 
  // console.log(c);
}
scopeExample();


console.log("\nQ2: Array of fruits and return the second fruit");

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());


console.log("\nQ3: Add element using push() and remove using pop()");

function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray([1, 2, 3]));


console.log("\nQ4: Square numbers using map()");

function squareNumbers(numbers) {
  return numbers.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers([1, 2, 3, 4]));


console.log("\nQ5: Filter odd numbers using filter()");

function getOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


console.log("\nQ6: Object and greeting message");

const person = {
  name: "Gaurav",
  age: 22,
  occupation: "Student"
};

function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and I am a ${person.occupation}.`
  );
}
greetPerson(person);


console.log("\nQ7: Calculate area of rectangle using object");

function calculateArea(rect) {
  return rect.width * rect.height;
}
console.log("Area:", calculateArea({ width: 10, height: 5 }));


console.log("\nQ8: Get object keys using Object.keys()");

function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));


console.log("\nQ9: Merge two objects using Object.assign()");

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));


console.log("\nQ10: Sum of numbers using reduce()");

function sumNumbers(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumNumbers([1, 2, 3, 4, 5]));
