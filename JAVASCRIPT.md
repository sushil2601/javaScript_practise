<!-- Online editor for javaScript  -->

CodePen, JSFiddle, CodeSandbox, and JS Bin,Programiz,JavaScript playground

Q. What is javaScript ?

Ans :-

    .JavaScript is a high-level, interpreted programming language used to make web pages interactive.
    .It is single-threaded, dynamically typed, and follows the ECMAScript standard.

Q. What are primitive data types in JavaScript?

Ans :-

    String
    Number
    BigInt
    Boolean
    Undefined
    Null
    Symbol

Q. How javaScript works?

Ans :-

    .Everything in js happens inside in execution context.

    .When Js Engine runs the code, Execution context is created.

    .An execution context is the environment in which javaScript code is evaluated and executed.It contains everything the engine needs to execute a block of code.

    .Execution context is created in two phase
        1. memory/variable environment
        2. code execution

    .memory/variable environment :- 
          .This is the place where all the variables and fns are stored in key-value pair
          .Allocated memory to all variables and fn before even code start execution

    .code execution :- This is the place where code is executed one line at a time.

    .call stack :- 
                .This is the data structure which maintain the order of execution context.
                .After completion of the execution context, it will completly remove from all the stacks.

Q. Window :- 

Ans :-

    .is a global object in browser environment.Created by JS engine along with execution context.
    .Whenever we create variable and fn in global space, JS engine attached those varibale and fn with global object.

Q. Null and undefined :-

Ans :-

      .Null :- It indicate the absence of an object. console.log(typeof null); //"object"

      .undefined :- Indicate the absence of a variable. console.log(typeof undefined); //"undefined"

Q NaN :- not a number. When result of an arithmetic oprn cannot be expressed as a number.

Q. for-of and for-in loop

Ans :-

    .for-of :- 
            .is used to loop through the value of an object like arrays, strings
            .It allows you to access each value directly without having to use an index

    .for-in :-
            .is used to loop through the property of an object.
            .It allows you to iterate over the keys of an object and access the values associated by using keys as the index.

Q. Synchronus vs Asynchronous

Ans :-

    .Synchronous :- code are executed one after another in a sequential manner.

    .Asynchronous :- code are executed independently of each other.

Q. Array :-

Ans :-

      .is a data type that allows us to store multiplr values in a single variables.
      .are dynamic

      Ex :- let arr1 = [1,2,3]
            let arr2 = new Array(1,2,3)
        
      clone :- array.slice(0), [...array], [].concat(array), Array.from(array)

      Array Methods :-

        .forEach :- used to perform some operation on each element of an array without creating a new array.

        .map     :- used to perform modification on each element of an array and create a new array.

        .filter  :- used to get an array of element that satisfies a condition.

        .Reduce  :- reduce array to a single value. Take two arguments acc and curVal.


        .find    :- get the first element that satisfy the condition.

        .some    :- returns true if any item matches condition.

        .every   :- returns true if all item match condition.

        .sort    :- It sorts the element of an array and return the sorted array. Modify the original array

        .slice   :- return a portion of an array into a new array without modifying the original array.

            Ex :- array.slice(start,end); start -> index to start from , end -> index to stop(exclusive)

            .If end is omitted, slice continues to the end of the array.

            .Use :- .copy part of an array .clone whole array

        .splice :-  modifying the original array by adding,removing or replacing elements.

Q. Objects :-

Ans :-
      .An Object is a data type that allows you to store key-value pairs.
      .is a collection of key-values pairs, where keys are strings or symbols, and values can be any data-type.

      Ex :- let person = {
                name : "sushil",
                age  : 30,
                isDeveloper : true
            }

      .create objects :-
            .Using Object literal
            .Using new Object()
                Ex:- const car = new Object();
                     car.brand = "Toyota"

            .Using constructor function
                Ex :- function person(name,age){
                          this.name = name;
                          this.age  = age;
                      }

                      const user = new person('sushil',30);

        .Accessing object properties :- 
                    1. Dot notation :- Ex:- clg(person.name)    //sushil
                    2. Bracket notation Ex:- clg(person['age']) //30

        .Modifying and addding properties :-
                    person.age = 31
                    person.city = "Delhi"

                    delete person.city; // delete city name

        .Object.keys(obj)  --> Returns array of property name(keys)
        .Object.values(obj) -> Returns array of property value.
        .Object.entries(obj)-> Return array of [keys,value] pairs.
        .Object.assign()    -> copies properties from one object to another.
        .hasOwnProperty()   -> checks if objects has the given property.

Q. what is event loop?

Ans:- 

  The JavaScript Event Loop is a core part of the JavaScript runtime that enables asynchronous behavior while still being single-threaded.

  What is the Event Loop?
    The event loop continuously monitors the call stack and the callback queue. It pushes tasks from the queue to the stack when the stack is empty, allowing asynchronous operations to execute in a non-blocking way.

Key Concepts

1. Call Stack
JavaScript executes code synchronously.

The call stack is a data structure that records function calls.

When a function is invoked, it is added to the stack; once done, it's popped off.


2. Web APIs (or Browser APIs)
When you use functions like setTimeout, fetch, or DOM events, they are offloaded to browser-provided APIs.

These APIs handle the tasks asynchronously and notify JavaScript when done.

Example:

setTimeout(() => {
  console.log('Timeout done');
}, 1000);
setTimeout is handed over to the browser.

After 1 second, it moves the callback to the callback queue.

3. Callback Queue (Task Queue)
Stores callback functions waiting to be executed.

Only when the call stack is empty does the event loop move the next callback from the queue to the stack.

4. Microtask Queue
Holds Promises and other microtasks (queueMicrotask, MutationObserver).

Has higher priority than the callback queue.

After every task, the event loop first checks and clears microtasks before moving on.

Example to Show Order

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');
Execution Flow:
console.log('1') → prints 1

setTimeout(...) → sent to Web API, then to callback queue

Promise.then(...) → added to microtask queue

console.log('4') → prints 4

Call stack is empty → event loop checks microtask queue → prints 3

Then checks callback queue → prints 2

Output:
1
4
3
2


Types of Queues

Queue	           Example APIs	                         Priority
Microtask	      Promises, queueMicrotask	              High
Macrotask	      setTimeout, setInterval, DOM Events	    Lower

Why is this Important?
Helps you write non-blocking code

Understand Promise chaining, setTimeout delays

Debug issues with asynchronous flows

Summary

JavaScript is single-threaded but asynchronous due to the event loop.

The call stack runs functions; async tasks go to Web APIs.

Once async work is complete, callbacks go to the task queue or microtask queue.

The event loop checks if the call stack is empty and moves tasks accordingly.

Microtasks run before macrotasks.


Q. What is a JavaScript Engine?

Ans :-

    The JavaScript engine is the component that reads, parses, compiles, and executes JavaScript code. 

    What is a JavaScript Engine?
    A JavaScript Engine is a program (usually embedded in a web browser or runtime like Node.js) that executes JavaScript code.

    The most well-known engines include:

    V8 (used in Chrome, Node.js)

    SpiderMonkey (Firefox)

    JavaScriptCore (Safari)

    Chakra (Edge legacy)

    For this explanation, we'll focus on V8, as it's the most widely used and best-documented.

    V8 JavaScript Engine Architecture
    The V8 engine consists of several major components:


┌──────────────────────┐
│  JavaScript Source   │
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│    Parser & Scanner  │ ◀── Tokenizes and parses the code into AST
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│  Abstract Syntax Tree│ (AST)
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│  Ignition (Interpreter) │
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│  Bytecode Generation │
└────────┬─────────────┘
         ▼
┌──────────────────────┐
│   TurboFan (Compiler)│ ◀── Optimizes hot code to machine code
└──────────────────────┘
Breakdown of Components
1. Parser + Scanner
Scanner (Lexer): Converts raw code into tokens (keywords, operators, etc.).

Parser: Takes those tokens and builds an Abstract Syntax Tree (AST).

AST is a tree representation of the source code structure.

2. Interpreter (Ignition)
Converts the AST into bytecode, a lower-level representation.

Bytecode is faster to execute than raw JS but slower than machine code.

Executes code immediately, so startup is fast.

  Example: let x = 2 + 3 → Bytecode instructions like LoadLiteral, Add, Store

3. Optimizationn
Tracks how often functions run ("hot" code).

Collects type feedback.

Detects patterns worth optimizing.

4. JIT Compiler (TurboFan)
"Just-In-Time" compilation of hot functions.

Compiles frequently-run bytecode to optimized machine code.

Inlines functions, removes dead code, and applies other performance tricks.

5. Garbage Collector
Manages memory allocation and automatically frees up unused memory.

Uses generational garbage collection:

Young generation (short-lived objects)

Old generation (long-lived objects)

Execution Process Summary
JavaScript source code is passed to the parser.

Parser creates the AST.

AST is interpreted by Ignition, which generates and runs bytecode.

Profiler monitors the code execution.

Frequently executed code is optimized by TurboFan into machine code.

Machine code is executed directly by the CPU for peak performance.

Why V8 Uses Both Interpreter and Compiler
Ignition (Interpreter)	TurboFan (Compiler)
Fast startup	Slower to start
Less optimized	Highly optimized code
Used for all code initially	Used for hot code only

This combination is known as adaptive optimization.

Garbage Collection (GC)
JavaScript engines also include Garbage Collectors to clean up memory:

Detects objects no longer in use.

Uses algorithms like mark-and-sweep.

V8 uses generational GC to manage memory efficiently.

Q. Different way to write async function.

Ans :-

    1. async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
      }

    2. const fetchData = async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
      };

    3. IIFE(Immediately invoked function expression)

      (async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
      })();


Q. Error handling in javaScript

Ans :-

      1. Using Try...Catch.
      2. Global Error handling.
      3. Using .catch() method with promises.
      4. Throwing Custom Errors

Q. Q. What is a Callback in JavaScript?

Ans:-

    .A callback is a function passed as an argument to another function, which is then executed after the completion of that function's task.
    .It’s often used for asynchronous operations like reading files, making API calls, or handling events.

    .Helps manage asynchronous code execution.
    .Avoids blocking the main thread while waiting for tasks to complete.

    .Can lead to callback hell if nested too deeply, which is why Promises and async/await are preferred in modern code.

Q. What is a callback hell in javascript?
Ans:-

  .Callback Hell happens when multiple callbacks are nested inside each other, creating deeply indented, hard-to-read code.
  .Common in asynchronous JavaScript (e.g., API calls, file reading, DB queries).

  .Hard to read (pyramid-shaped code)
  .Hard to debug (logic is scattered)
  .Hard to maintain (changes break flow)

Q. Promise :-

Ans :-

      . Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
      .Acts as a placeholder until the async task finishes.
      .Can only settle once — either fulfilled or rejected.

      .States of a Promise :- 
            .Pending – Initial state, still waiting for the result.
            .Fulfilled – Operation completed successfully.
            .Rejected – Operation failed with an error.

      .Why Promises?
            .Handle asynchronous data more cleanly.
            .Avoid callback hell (deeply nested callbacks).
            .Solve inversion of control issues (control stays with you, not the callback provider).

      .Creating a Promise
                  const promise1 = new Promise((resolve, reject) => {
                      resolve('Promise Resolved...');
                      reject('Promise Rejected...');
                  });

      .Consuming a Promise
                  promise1
                    .then(data => console.log(data))   // for success
                    .catch(err => console.log(err));   // for error

Q. Asyn/Await :-

  Ans:-

      .async and await are syntactic sugar over Promises for writing cleaner, synchronous-looking async code.
      .Makes asynchronous code easier to read and maintain.

      .Usage
          .async
              .Declares a function as asynchronous.
              .Automatically returns a Promise.

          .await
              .Pauses execution until the Promise resolves or rejects.
              .Can only be used inside an async function.

      .Example
            async function fetchData() {
                try {
                    const data = await fetch('https://api.example.com/data');
                    const json = await data.json();
                    console.log(json);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchData();

Q. Higher Order Function

Ans:-

    .A higher order function is a function that takes another function as an argument and returrn function.

    .This makes function in js first-class citizen.

    Ex:- Map.filter,reduce

    .Benefits :-
              .Code resusability
              .Cleaner code
              .functional programming

Q. Closures :-

Ans :-

    .A closures is the combination of a function bundled together with reference to  it's surrounding state(lexical environment).

    .In Js, closures are created every time a function is created, at function creation time.

    .It allow to access variables and scope from outer function, even outer function has finished it's execution.

    .Uses :-
            .In currying
            .Memoization
            .setTimeout
            .Fn like once

    Disadv :-
            .over consumption of memory, because a closure is formed.
            .Memory leak can if closures is not handled properly.

    function outer() {
      let count = 0;
      return function inner() {
        count++;
        return count;
      }
    }
    const counter = outer();
    console.log(counter()); // 1
    console.log(counter()); // 2


    .Garbage collector :- is a program in the browser or the js engine, which kind of freed the unutilized memory.


Q. Lexical environment :-

Ans :-

    .is a local memory along with the lexical environment of it's parent.

    .Whenever execution context is created, a lexical environment is also created.

    .It stores the variables and function that are defined in the current scope and all of the outer scope.

    .Lexical env. of global parent is null because it's has no parent.

Q. Currying :-

Ans :-

    .Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

    .Ex:-
        function add(a){
          return function(b){
            return a+b
          }
        }

        console.log(add(2)(3))

    .Benefits :-
          .Reusability
          .Function composition
          .Declarative code

Q. Hoisting :-

Ans :-

      .Hoisting is a javaScript behaviour where functions and variables declarations are moved to the top of their respective scope during compilation phase.

      .let and const are hoisted but very diffently tha var.

      .let and const are stored in different memory space than global and cannot access this memory before initialization.

Q. Temporal dead zone :-

Ans :-

    .It is the time since when let and const variable was hoisted and till it initialze some value.Time b/w that is known as TDZ.

Q. this :-

Ans :-

    .In JavaScript, this refers to the object that is currently executing the function.

    .It's value depends on how the function is called, not where it’s defined.

    .In global context, this points to window object

    .Inside an Object Method :- When a function is called as a method of an object,this refers to that object.

    .Function :-
                .In non-strict mode: this → global object (window)

                .In strict mode ('use strict'): this → undefined

    .Inside constructor :- The newly created object

    .In an event handler :-The Dom element that triggered the event.

    .Arrow Functions :- Arrow functions do not have their own this.They inherit this from the surrounding (lexical) scope.

          Ex:- const user = {
                name: "Sushil",
                greet: () => {
                  console.log(this.name);
                }
              };

              user.greet();  // undefined

Q. Call, Apply, Bind

Ans :-

    .call :- 
            .helps us to change the value of this inside a function with whatever value you want.

            .It takes argument as comma separated

    .apply :-
            .is similar to the call function. It take argument as array of argument

    .bind  :-
            .is a function that helps us to create another function that we can execute later with the new context of this that is provided.

Q.  What are some new features in ES6?

Ans :-

      Arrow functions
      Template literals
      Destructuring
      Spread/rest operators
      Classes
      Modules
      Promises
      Default parameters

Q. Spread/rest operator :-

Ans :-

    .spread :- 
            .Expands (or spreads) the elements of an array or object into individual items.
            .Used mainly to copy, combine, or pass values.

            Ex:- 
                const numbers = [1, 2, 3];
                const moreNumbers = [...numbers, 4, 5];

                const user = { name: "Sushil", age: 25 };
                const updatedUser = { ...user, city: "Pune" }; //{ name: "Sushil", age: 25, city: "Pune" }

                const obj3 = Object.assign({...obj1,...obj2})

    .rest :- 
            .Collects multiple elements into a single array (the opposite of spread).
            .Used mainly in function parameters or destructuring.

            Ex:- 
                function sum(...nums) {
                  return nums.reduce((total, n) => total + n, 0);
                }

                console.log(sum(1, 2, 3, 4)); // 10

    .destructuring :- Extracting values from arrays/objects into variables.

            Ex :- 
              const user = { name: "Alice", age: 25 };
              const { name, age } = user;
              console.log(name, age);

    .arguments :- 
                .is an array like object accessible inside fn that contains the values of the arguments passed to to that fns.

                .rest parameter replaced arguments.

Q. Arrow function :-

Ans :-

    .is simpler and shorter way for defining fns in js

    .Benefits :-
          .used to reduced the code size
          .wherever we don't want to declare function we can use arrow fn. Ex:- map, filter, reduce
          .whenever we want to declare function expression we can use arrow function.

Q. What is benefits using arrow function over tranditional function.

Ans :-

      .Lexical this Binding :- Arrow functions don’t have their own this — they inherit it from the parent scope.
This makes them perfect for callbacks or methods inside classes/components.

      .Shorter and Cleaner Syntax :- Arrow functions are more concise, especially for one-liners.

      .If the function body has only one expression, the value is automatically returned (no need for return).

Q. What is the difference between == and ===?

Ans :-

    ==  abstract equality (performs type coercion)
    === strict equality (no type coercion)

    0 == '0'   // true
    0 === '0'  // false

Q. Explain prototypal inheritance.

Ans :-

      Objects in JavaScript inherit directly from other objects via the prototype chain.

      function Person(name) {
        this.name = name;
      }
      Person.prototype.greet = function() {
        return `Hello, ${this.name}`;
      };

      const john = new Person("John");
      console.log(john.greet()); // Hello, John

Q. What is proto and prototype

Ans :-



Q. What is the purpose of the "use strict" statement in JavaScript?

Ans:-

  .Prevents use of undeclared variables.
  .Disallows duplicate property names in objects.
  .Blocks usage of reserved keywords as variable names.

Q. What is AJAX?
Ans:-

  .AJAX = Asynchronous JavaScript and XML
  .Technique to update web page content without reloading the page.

  .Purpose
        .Send and receive data from the server in the background.
        .Make web pages faster, more interactive, and seamless.

  .Key Points
        .Uses JavaScript for requests.
        .Data can be in JSON, XML, HTML, or text.
        .Works with APIs for dynamic content updates.

Q. What is the difference between the DOM and HTML?
Ans:-

    .HTML :- HyperText Markup Language

        .Defines the structure and content of a web page.
        .Static – cannot change itself after loading.

    .DOM :- Document Object Model

        .A tree-like representation of the HTML (and other elements) in memory.
        .Dynamic – can be accessed and modified using JavaScript.

Q. What is the difference between innerHTML and innerText?
Ans:-

    .innerText
        .Returns only the visible text inside an element.
        .Ignores HTML tags.
        .Affected by CSS (e.g., hidden elements are not returned).

    .innerHTML
        .Returns HTML content inside an element (including tags).
        .Can be used to insert or modify HTML structure.
        .Not affected by CSS visibility rules.

Q. setTimeout, setInterval, clearInterval, clearTimeout
Ans:-

    1. setTimeout()
        .Executes a function once after a given delay (in milliseconds).

        .Syntax:- setTimeout(() => console.log("Hello"), 2000); // runs after 2s

2. setInterval()
        .Executes a function repeatedly at a fixed interval.

        .Syntax:- setInterval(() => console.log("Ping"), 1000); // runs every 1s

3. clearTimeout()
        .Stops a timer started by setTimeout().

        .Example:- let timer = setTimeout(() => console.log("Hello"), 2000);
                    clearTimeout(timer);

4. clearInterval()
        .Stops a timer started by setInterval().

        .Example:- let interval = setInterval(() => console.log("Ping"), 1000);
                    clearInterval(interval);

Q. What is the role of the Window object in the DOM?
Ans:-

    .Window Object
          .Represents the browser window/tab.
          .Top-level object in the DOM — all global variables & functions belong to it.
          .Provides methods to control the window (e.g., alerts, timers, navigation).

    .Redirecting to a New Page
          .window.location.assign(url) → Loads a new page, keeps current page in history.
          .window.location.replace(url) → Loads a new page, replaces current page in history (no back navigation).

Q. What is the difference between dot notation and bracket notation when accessing properties of an object?
Ans :-

      .Dot Notation (obj.key)
            .Used when property name is known & static.
            .Faster & cleaner syntax.

      .Bracket Notation (obj["key"] / obj[variable])
            .Supports dynamic keys (from variables or expressions).
            .Required when key contains spaces, special characters, or is stored in a variable.

Q. What is global execution context and function execution context?
Ans :-

    .Global Execution Context (GEC)
        .The first execution context created by the JavaScript engine before any code runs.
        .Created when a script first loads.
        .Only one GEC exists at a time (JS is single-threaded).

    .Function Execution Context (FEC)
        .The execution environment created each time a function is called.
        .Created for specific function call.

        .Includes:
            .Variable Environment (local variables, parameters).
            .Scope Chain (access to outer variables).
            .this binding.

Q. What are the different ways to debug JavaScript code?
Ans:-

    .console.log() – Print values/messages to the browser console.
    .Browser DevTools – Use breakpoints, step-through execution, inspect variables.
    .debugger statement – Forces code to pause (if DevTools are open).
    .Exception Handling – Use try...catch to log and handle errors.

Q. What are the advantages of using closures in JavaScript?
Ans:-

    .Encapsulation – Groups related data and functions together.
    .Data Privacy – Keeps variables private and inaccessible from outside.
    .State Preservation – Remembers values even after the outer function has finished.
    .Function Factories – Create multiple functions with their own private state.
    .Callback Functions – Useful in event handlers, timers, and asynchronous code.

Q. What is the difference b/w an event object and a custom event in javaScript?
Ans :-

    .Event Object: The built-in object automatically passed to event handlers, containing details about the event (e.g., type, target, coordinates).

    .Custom Event: A user-defined event created with the CustomEvent constructor, allowing you to pass custom data and trigger events programmatically using dispatchEvent().

Q. How do you optimize performance in javaScript applications?
Ans :-

      .Debouncing and Throttling
      .Memoization
      .Clean up event listeners, intervals, timeouts, and DOM references properly.
      .Lazy Load Data
      .code splitting

Q. Memoization:-
Ans:-

    .Optimization technique where results of expensive function calls are cached and returned when the same inputs occur again.

    .Improves performance for functions with repetitive calculations.

Q. Pure Function
Ans:-

    .A pure function always returns the same output for the same inputs.
    .It has no side effects (does not modify external state or variables).
    .Easy to test and debug.

    function add(a, b) {
        return a + b;
    }

  .Impure Function:-
      .An impure function may return different outputs for the same inputs.
      .It causes side effects, like modifying external variables, I/O operations, or changing data outside the function.

      let count = 0;
      function increment() {
        count++;
        return count;
      }

Q. Deep copy and shallow copy
Ans :-

    .1. Normal Copy (Reference Copy)
          .Both variables point to the same memory reference.
          .Change in one → change in other.

          Example:-
                    var obj1 = { name: 'sushil' };
                    var obj2 = obj1;

    2. Shallow Copy
          .Creates a new object/array but nested objects/arrays still share references.
          .Changes in nested objects affect both copies.

          Examples:
                    // Using Object.assign or spread operator
                    var obj1 = { name: 'sushil', address: { city: 'Delhi' } };
                    var obj2 = { ...obj1 };
                    obj2.address.city = 'Noida'; // affects obj1 too
                    Methods:

                    Object.assign({}, obj)

                    { ...obj } (Spread syntax)

                    Array.prototype.slice() / concat() for arrays

    3. Deep Copy
            .Creates a completely independent copy, including nested objects/arrays.
            .No shared references; changes in one do not affect the other.

            Examples:
                    // Using JSON method (limitations: no functions, undefined, dates, etc.)
                    var obj1 = { name: 'sushil', address: { city: 'Delhi' } };
                    var obj2 = JSON.parse(JSON.stringify(obj1));

                    // Using lodash for full deep copy (handles functions, dates, etc.)
                    var obj2 = _.cloneDeep(obj1);
                    Methods:

                    JSON.parse(JSON.stringify(obj)) (simple, but loses functions & special types)

                    _.cloneDeep(obj) (lodash – safe & reliable)

Q. Polyfill for bind :-
Ans :-

      A Polyfill is a function which is created as a replacement to an existing function to make it compatible with all the browsers.

    Function.prototype.MyBind = function(obj,...args1){      //args1 = 'Mumbai'
      const func = this;
      return function(...args2){                             //args2 = 'Delhi'
        return func.apply(obj,[...args1,...args2])
      }
    }

    const bindName = getName.MyBind(Person,'Mumbai');
    bindName('Delhi')

    const Person = {
      fName : 'Sushil',
      lName : 'Suman'
    }

    function getName(city1,city2){
      console.log(this.fName + ''+this.lName+''+'lives in'+city1+'and'+city2);
    }

Q. What is event bubbling and capturing?

Ans :-

    Bubbling: Event propagates from child to parent.

    Capturing: Event propagates from parent to child.

    element.addEventListener("click", handler, true);  // Capturing
    element.addEventListener("click", handler, false); // Bubbling

Q. Event Delegation
Ans :-

  .A technique of attaching a single event listener to a parent element instead of multiple listeners to child elements.
  .Takes advantage of event bubbling to handle events from child elements via the parent.
  .Improves performance and simplifies code, especially for dynamic elements.

Q. Debouncing :- 

Ans :-

    .is a programming pattern, that limits the rate at which a function gets invoked.

    .It ensures that a function is executed only after a certain amount of time has passed since the last time it was executed

    Ex:- search box, Debouncing solve this by waiting until the user stops typing say for 300ms, before making just one api call.

Q. Throttling :-

Ans :-

    .is a technique that limits the number of times a function can execute over time.

    .It ensures that a function is called at most once in a specified time interval, no matter how many times the event is triggered

    .Ex: - gaming

Q. DOM :- Document Object Model

Ans :-

    .The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so programs can manipulate structure, style, and content.

    .Selector methods :-
              .getElementById()
              .getElementsByClassName()
              .getElementsByTagName()
              .querySelector()        :- Selects first matching element using CSS selectors.
              .querySelectorAll()

    .append  :- add to end
    .prepend :- add to start

Q. Web Storage :-

Ans :-

      .is used to store data locally within the browsers.

  .local storage :- .data stored in local storage is accessible across multiple tabs.
                    .data stored in local storage persists even when the browser is closed and reopened.

  .session storage :- .data stored in session storage is specific to a particular browsing session and is accesssible only within the same window.
                      .data stored in sesssion storage is cleared when browser window or tab is cleared.

Q. cookies :-

Ans :-

      .cookies are small piece of data that are stored in the user's web browser

Q. Difference b/w cookies and web storage

Ans :-

      .cookies :- .cookies have a small storage capacity of upto 4kb per domain.
                  .cookies are automatically sent with every request
                  .accesssible on both client-side and server-side

      .web storage :- .web storage have a large storage capacity of upto 5-10 MB per domain.
                      .data stored in web storage is not automatically sent with each request.
                      .accessible only on client-side.

Q. eval() :- is a built-in function that evaluates a string as a js code and dynamically execute it.

Q. Implicit and Explicit conversion

Ans :-

    .Implicit conversion(Type coersion) :- automatic conversion of one data type to another data type by js engine.

    .Explicit conversion(Type casting)  :- manually converting from one data types to another

            Ex:- value.toString(). Object.toString()

Q. Block scope, function scope, global scope, scope

Ans :-

      .scope :- is the current context of execution in which values and expressions are visible

      .Global scope :- variables declared globally have global scope. Ex:- var have global scope

      .Function scope :- variable defined inside a function are not accessible from outside the function. Ex:- var

      .Block scope :- variables defined inside a {} , blocked cannot be accessed from outside the block. Ex:- let,const

Q. Difference b/w jsx and html

Ans :-

      .JSX :- javaScript xml, used to write html-like code in react. can write js expression using {}.

      .HTML :- .is used to structure content on web page.It is static and interpreted by browsers.
               .cannot embeded logic directly, need to use external script.

Q. Exmaple of memoization --> fibonacci  
Ans :-

      function memoizedFibonacci() {
        const cache = {};

        function fib(n) {
          if (n <= 1) return n;
          if (n in cache) return cache[n];

          cache[n] = fib(n - 1) + fib(n - 2);
          return cache[n];
        }

        return fib;
      }

const fib = memoizedFibonacci();

console.log(fib(6));

---------------------------------------------------------------------------------------------------
<!-- GIT Operation -->

Q. Difference b/w GIT and GITHUB.
Ans :-

  .Git is a distributed version control system (DVCS) that helps you track changes in your code and collaborate with others.

  .GitHub is a server where we keep repositories/projects which would be used for colloboration.

  .Git is a tool.
  .GitHub is a platform.

  .Git commndLine :- gitbash,gitcmd,gitgui

  .git command :-
  ----------------

    .git version :- This command is used to check the version of git.

    .git help    :- If we want to see the list of commands then we can use git help.

    .git config  :- It is used when the git software is used for the first time.
                    The command will set the developer identity like name,emailId ...
                    This configuration information will be used by git software for every push operation encountered.

    .git config --list :- This command is used to provide the list of configuration.

    .git init     :- Normally a folder will be created in the developers works place and inside the folder the source code would place

                    This command internally creeates one folder called .git.

                    .git is used by git software to identify the folder which should participate in pushing to local and remote repository.

    .git status :- This command is used to check the status of working directory.

    .git add --a or git add . :- If we want to push all the files from stagged area to workplace.

    .git rm --cached <file-name> :- It is also posssible to unstaged the files from stagged area to workplace.

    .git restore <file-name>     :- To restore the old file

    .git commit -m <some-message> :- The files which are ready for commit should be in stage area.    

    .git commit -am "message" --> to add and commit ek sath karne ke liye.  


    .Create remote repository and push it to remote repository
    ------------------------------------------------------------

      1. Open github.com
      2. Create anew repository and enter some name and click on create repository
      3. To perform push operation we need to use the following command

          git branch -M main

          git remote add origin https://github.com/sushil2601/nodecode.git

          git push -u origin main

Q.Difference b/w pull and clone
Ans :-

    pull:-
    ------
            It is used to fetch the latest changes made in remote repository to working directory.

            Ex:- git pull

    clone :-
    --------
            It is used to clone the repository to the working directory of the developer.

            Ex:- git clone <url>

.Working area :- developer workplace(source code)

.stage area   :- Before adding the code to the local repository, we keep the code in stage area.

.Local repository :- Before pushing the code to remote repository, we keep the code in local repository.

.git checkout master --> to switch on master branch

.git branch quicksort --> to create new branch(isme main wala code hoga)

.git checkout quicksort --> to switch this branch from master branch.

.git checkout -b bubblesort --> branch v creaate hoga aur sath-sath switch v kar jayega.

or 

git switch -c bubblesort

.git merge bubblesort --> to merge the bubblesort to main branch.

.git branch -d bubblesort --> to delete bubblesort branch.

.Merge Conflict :-
--------------------
          conflict(means red sign wale ko remove karenge) ko remove karke again git add and git commit karke push karenge.

.git merge --abort  --> to abort merge

.git log   --> logs ko dekhne ke liye. Latest commit ko batata hai then move down.

              Ex:- ID,Author,Date

.git tag  :- tag a specific commit

      Ex:- git tag -a betav1.0 "commitID" -m  "message"

      git tag -d <Tagname>

.git commit --amend   --> 

.git reset            --> 

.git show :- kisi v particular commit ke under kya kya hua hai wo sare dekhne ke liye.

.git log -p :- latest commit ke sath sath , diff v dikhata hai means kis file me kya change hui hai wo v dikhata hai.

.git log --online :  -> isme author,Id hidden milta hai.isme SHAID and message meilenge.

.git log --stat :- sare commit to show hoga hi, sath-sath kis file me change hua hai wo v return dega.

.git show <SHAID>  --> kisi particular commit ke under kya kya changes hui hai wo sare dekh sakte hai.

.git rebase :-

.git cheripick :-

.git remote -V




