const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("1. Even numbers from 1 to 100:");

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

function calculate(a, b, operation) {
    
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operation";
  }
}

function findTax(salary) {
    
  let tax = 0;
  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = 0;
      break;
    case salary > 500000 && salary <= 1000000:
      tax = salary * 0.10;
      break;
    case salary > 1000000 && salary <= 1500000:
      tax = salary * 0.20;
      break;
    case salary > 1500000:
      tax = salary * 0.30;
      break;
  }
  return tax;
}

function sumOfProducts(n1, n2) {
    
  let s1 = n1.toString().split("").reverse();
  let s2 = n2.toString().split("").reverse();
  let len = Math.max(s1.length, s2.length);
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let d1 = s1[i] ? Number(s1[i]) : 0;
    let d2 = s2[i] ? Number(s2[i]) : 0;
    sum += d1 * d2;
  }
  return sum;
}

console.log("\n2. Calculator Function:");
rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Enter operation (add, subtract, multiply, divide): ", (op) => {
            console.log("Result:", calculate(Number(a), Number(b), op));

            console.log("\n3. Tax Calculation Function:");
            rl.question("Enter salary: ", (sal) => {
                console.log("Tax Amount:", findTax(Number(sal)));

                console.log("\n4. Sum of Products of Corresponding Digits Function:");
                rl.question("Enter first number for sum of products: ", (x) => {
                    rl.question("Enter second number for sum of products: ", (y) => {
                        console.log("Sum of Products:", sumOfProducts(Number(x), Number(y)));
                        rl.close();
                    });
                });
            });
        });
    });
});
