<!-- Online editor for javaScript  -->

CodePen, JSFiddle, CodeSandbox, and JS Bin,Programiz,JavaScript playground


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

Diagram Summary

JS Code → Call Stack → (if async) → Web APIs
                            ↓
                    Callback/Microtask Queue
                            ↓
                      Event Loop Checks
                            ↓
                  Pushes to Call Stack if empty
Types of Queues
Queue	    Example APIs	                      Priority
Microtask	Promises, queueMicrotask	          High
Macrotask	setTimeout, setInterval, DOM Events	  Lower

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

3. Profiler
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

Q. What is a callback hell in javascript?
Ans:-
  Callback hell is a term used to describe a situation where multiple callbacks are nested within one another, making the code difficult to read, debug, and maintain. It often arises when dealing with asynchronous operations, such as making HTTP requests or working with databases.


Q. What is the purpose of the "use strict" statement in JavaScript?
Ans:-
  The "use strict" statement is used to enable strict mode in JavaScript, which helps to prevent common errors and make the code more secure. It prevents things like use of undeclared variable, use of keywords as variable name, using duplicate property names in objects, etc.

Q. What is AJAX?
Ans:-
  AJAX (Asynchronous JavaScript and XML) is a technique to create more dynamic and interactive web pages. It allows a web page to update content without requiring the page to reload. With AJAX, data is sent to and from the server in the background, using JavaScript and other data formats like JSON. This makes web applications more seamless and responsive, providing users with a faster and more engaging browsing experience.

Q. What is the difference between the DOM and HTML?
Ans:-
  HTML is a markup language used to define the structure and content of a web page, while the DOM is an interface that represents that structure and content as a tree-like structure. The DOM provides a way to access and manipulate the content and structure of a web page, while HTML is simply a static markup language.

Q. What is the difference between innerHTML and innerText?
Ans:-
  The main difference between innerText and innerHTML in the DOM is that innerText returns only the visible text content of an element, excluding any HTML tags, while innerHTML returns the complete HTML content of an element, including any nested elements and tags.

Q. What is the role of the Window object in the DOM?
Ans:-
  The Window object in the DOM represents the browser window or tab that displays the web page. It provides methods and properties for controlling and manipulating the browser window.

Q. What is the use of setTimeOut() in javascript?
Ans:-
  setTimeout() is a built-in function in JavaScript that allows you to schedule a function to be executed after a specified amount of time has elapsed.

Q. What is the use of setInterval() in javascript?
Ans:-
  setInterval() is a function in JavaScript that allows you to repeatedly execute a given function at a specified interval. It works by calling the function repeatedly with a specified time delay between each call, until the interval is cancelled.

Q. What is the purpose of clearTimeout method and clearInterval?
Ans:-
  The clearTimeout method is a built-in function in JavaScript that is used to cancel a timer created by the setTimeout function and clearInterval method is a built-in function in JavaScript that is used to cancel a recurring timer created by the setInterval function.

Q. How do you redirect new page in javascript?
Ans:-
  To redirect to a new page using JavaScript, you can use the window.location object's assign or replace methods. Example:

  // Redirect to a new page
  window.location.assign("https://www.example.com");

  // Redirect to a new page and replace the current page in the browser history
  window.location.replace("https://www.example.com");

Q. What is the difference between dot notation and bracket notation when accessing properties of an object?
Ans:-
  Dot Notation only allows static keys while Bracket Notation accepts dynamic keys. Static key here means that the key is typed directly, while Dynamic key here means that the key is evaluated from an expression.

Q. What is the difference between Object.prototype and Object.__proto__ in JavaScript?
Ans:-
  In other words, Object.prototype is the object that provides default properties and methods that all objects in JavaScript inherit from. On the other hand, Object.__proto__ is the object that the Object constructor itself inherits from, and it provides the properties and methods that are specific to the Object constructor.

Q. What is the window.location object in JavaScript?
Ans:-
  The window.location object is a built-in object in JavaScript that contains information about the current URL of the webpage. It is a property of the global window object and provides several properties and methods to work with URLs.

Q. What is global execution context?
Ans:-
  The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

Q.What is function execution context?
Ans:-
  In JavaScript, the function execution context refers to the environment in which a function is executed or called. Each time a function is invoked, a new execution context is created specifically for that function. It consists of two main components: the variable environment and the scope chain.

Q. What are the different ways to debug JavaScript code?
Ans:-
  To debug JavaScript code, you can use console.log() statements to print values and messages to the console, browser developer tools for breakpoints, stepping through code, and variable inspection, the debugger statement to trigger breakpoints, exception handling to catch and log errors, linters and code analyzers to detect potential issues, and remote debugging for debugging code running in a different environment.

Q. What are the advantages of using closures in JavaScript?
Ans:-
  Closures in JavaScript allow for encapsulation, data privacy, and the creation of private variables and functions that are inaccessible from the outside scope.

Q. Can you access DOM in nodejs?
Ans:-
  No, you cannot directly access the DOM in Node.js. Node.js is a runtime environment for running JavaScript outside of web browsers, and it does not have a built-in DOM implementatio

Q. What is the difference b/w an event object and a custom event in javaScript?
Ans :-
       .

Q. How do you optimize performance in javaScript applications?
Ans :-

      .Debouncing and Throttling
      .Memoization
      .Clean up event listeners, intervals, timeouts, and DOM references properly.
      .Lazy Load Data
      .code splitting

Q. Deep copy and shallow copy
Ans :-

    .Normal copy :- both object point the same memory refernece.

        Ex:- var obj1 = {
          name : 'sushil'
        }

        var obj2 = obj1;
        console.log(obj2.name)
        console.log(obj1.name)

    .shallow copy :- 
   -----------------
       .A shallow copy creates a new object or array, but it only copies the references to the elements of the original.

       .If the original object or array contains nested objects or arrays, the shallow copy will still point to the same nested objects/arrays in memory as the original.

        Ex:- var obj1 = {
          name : 'sushil',
          address : {
            street : 'Nehru road',
            city : 'Delhi'
          }
        }

        <!-- var obj2 = Object.assign({},obj1); -->
        var obj2 = {...obj1}

        obj2.address.city = 'Noida';
        console.log(obj2.address.city); //Noida
        console.log(obj1.address.city); //Noida

    .Deep copy :-
   ---------------
          .A deep copy creates a completely new, independent copy of the original object or array, including all nested objects and arrays.

          .All values, including those in nested structures, are duplicated, ensuring no shared references between the original and the copy.

        Ex:- var obj1 = {
          name : 'sushil',
          address : {
            street : 'Nehru road',
            city : 'Delhi'
          }
        } 

        var obj2 = JSON.parse(JSON.Stringify(obj1))

        obj2.address.city = 'Mumbai'
        console.log(obj2.address.city); //Mumbai
        console.log(obj1.address.city); //Delhi

        var obj1 = {
          name : 'sushil',
          address : function(){}       //not acceptable in deep copy also
        } 

        //use cloneDeep to resolve above issue

        var obj2 = lodash.cloneDeep(obj1)

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

Q. Promise :-   in the starting it is an empty object({}).
Ans:-
    .The Promise Object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

      or,

    .Promise object is a placeholder for a certain period of time until we receive a value from a asynchronous operation.

    .Promise object can only be resolved once,either it will be success or a failure.

            .Three stage of promise
                1.pending    --> This is the initial state,which we start from.
                2.fulfilled  --> promise has been fulfilled successfully.
                3.rejected   --> promise has been rejected, there was an error.

    .use  :- handled asynchronous data

    .Need of promises :-
            .Promises are created to avoid callback hell.

        
    .callback hell(pyramid of doom) :- calling one callback in another callback and so..on
    .Inversion of control :- 


    .producing promises :-

        Ex:- const promise1 = new Promise((resolve,reject)=>{                
              resolve('Promise Resolved...')
                reject('Promise is rejected..')
            })

    .consuming promises :-

        Ex:- promise1.then((data)=>console.log(data))
             .catch((err)=>console.log(err))

Q. Exmaple of memoization --> sum and fibonacci        
      


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




