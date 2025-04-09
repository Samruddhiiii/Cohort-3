// ======================================================
// 📚 WEEK 2 – JavaScript Concepts: Sync, Async, I/O, Promises, Callbacks
// ======================================================


// =============================
// 1. Functions in JS
// =============================
function sum(n) {
    return n * (n + 1);
  }
  const result = sum(10);
  console.log("Sum result:", result);
  
  
  // =============================
  // 2. Synchronous JS
  // =============================
  // Executes line by line. Each step waits for the previous one.
  console.log("This is synchronous code");
  
  
  // =============================
  // 3. I/O Heavy Operations
  // =============================
  // Refers to tasks that involve reading/writing from external sources like files, DBs, networks, etc.
  
  const fs = require("fs");
  
  // Synchronous file read (blocks)
  const syncData = fs.readFileSync("a.txt", "utf-8");
  console.log("Sync read from a.txt:", syncData);
  
  
  // =============================
  // 4. Functional Arguments (Functions as Parameters)
  // =============================
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, operation) {
    return operation(a, b);
  }
  
  console.log("Add:", doOperation(5, 3, add));
  console.log("Subtract:", doOperation(5, 3, subtract));
  console.log("Divide:", doOperation(10, 2, divide));
  
  
  // =============================
  // 5. I/O Bound vs CPU Bound
  // =============================
  // I/O Bound = Waiting for external resources (e.g. file, DB)
  // CPU Bound = Requires heavy processing power (e.g. loops, math)
  
  let counter = 0;
  // Simulating CPU bound task
  for (let i = 0; i < 1e9; i++) {
    counter += 1;
  }
  console.log("CPU-bound operation done");
  
  
  // =============================
  // 6. Asynchronous Code with Callback (non-blocking)
  // =============================
  // readFile is async and follows error-first callback pattern
  
  function print(err, data) {
    console.log("Error:", err);
    console.log("Data:", data);
  }
  
  fs.readFile("a.txt", "utf-8", print); // async
  fs.readFile("b.txt", "utf-8", print); // async
  
  console.log("Async file read initiated");
  
  
  // =============================
  // 7. setTimeout Simulation
  // =============================
  console.log("Start");
  
  setTimeout(function callback() {
    console.log("Runs after 3 seconds");
  }, 3000);
  
  console.log("End");
  
  
  // =============================
  // 8. Promises in JavaScript
  // =============================
  
  const myPromise = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) resolve("Promise resolved!");
      else reject("Promise rejected!");
    }, 2000);
  });
  
  myPromise
    .then((res) => console.log("Then:", res))
    .catch((err) => console.log("Catch:", err));
  
  
  // =============================
  // 9. Promisified setTimeout
  // =============================
  
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  wait(1500).then(() => console.log("Waited 1.5 seconds (promisified timeout)"));
  
  // =============================
  // 10. Promisified fs.readFile
  // =============================
  
  function readFilePromise(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }
  
  readFilePromise("a.txt")
    .then((data) => console.log("Promisified fs.readFile:", data))
    .catch((err) => console.log("Error reading file:", err));
  
  
  // =============================
  // 11. Basic JavaScript Classes
  // =============================
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  const dog = new Animal("Doggo");
  dog.speak(); // Doggo makes a sound
  
  