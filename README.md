Q. what is event loop?

Ans:- The JavaScript Event Loop is a core part of the JavaScript runtime that enables asynchronous behavior while still being single-threaded.

🔁 What is the Event Loop?
The event loop continuously monitors the call stack and the callback queue. It pushes tasks from the queue to the stack when the stack is empty, allowing asynchronous operations to execute in a non-blocking way.

🧠 Key Concepts
1. Call Stack
JavaScript executes code synchronously.

The call stack is a data structure that records function calls.

When a function is invoked, it is added to the stack; once done, it's popped off.


2. Web APIs (or Browser APIs)
When you use functions like setTimeout, fetch, or DOM events, they are offloaded to browser-provided APIs.

These APIs handle the tasks asynchronously and notify JavaScript when done.

Example:

js
Copy
Edit
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

🧪 Example to Show Order
js
Copy
Edit
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

Copy
Edit
1
4
3
2
🧩 Diagram Summary
txt
Copy
Edit
JS Code → Call Stack → (if async) → Web APIs
                            ↓
                    Callback/Microtask Queue
                            ↓
                      Event Loop Checks
                            ↓
                  Pushes to Call Stack if empty
🔄 Types of Queues
Queue	    Example APIs	                      Priority
Microtask	Promises, queueMicrotask	          High
Macrotask	setTimeout, setInterval, DOM Events	  Lower

📌 Why is this Important?
Helps you write non-blocking code

Understand Promise chaining, setTimeout delays

Debug issues with asynchronous flows

✅ Summary
JavaScript is single-threaded but asynchronous due to the event loop.

The call stack runs functions; async tasks go to Web APIs.

Once async work is complete, callbacks go to the task queue or microtask queue.

The event loop checks if the call stack is empty and moves tasks accordingly.

Microtasks run before macrotasks.


Q. What is a JavaScript Engine?

Ans :-

The JavaScript engine is the component that reads, parses, compiles, and executes JavaScript code. 

⚙️ What is a JavaScript Engine?
A JavaScript Engine is a program (usually embedded in a web browser or runtime like Node.js) that executes JavaScript code.

The most well-known engines include:

V8 (used in Chrome, Node.js)

SpiderMonkey (Firefox)

JavaScriptCore (Safari)

Chakra (Edge legacy)

For this explanation, we'll focus on V8, as it's the most widely used and best-documented.

🏗️ V8 JavaScript Engine Architecture
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
🔍 Breakdown of Components
1. Parser + Scanner
Scanner (Lexer): Converts raw code into tokens (keywords, operators, etc.).

Parser: Takes those tokens and builds an Abstract Syntax Tree (AST).

AST is a tree representation of the source code structure.

2. Interpreter (Ignition)
Converts the AST into bytecode, a lower-level representation.

Bytecode is faster to execute than raw JS but slower than machine code.

Executes code immediately, so startup is fast.

🔹 Example: let x = 2 + 3 → Bytecode instructions like LoadLiteral, Add, Store

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

🔄 Execution Process Summary
JavaScript source code is passed to the parser.

Parser creates the AST.

AST is interpreted by Ignition, which generates and runs bytecode.

Profiler monitors the code execution.

Frequently executed code is optimized by TurboFan into machine code.

Machine code is executed directly by the CPU for peak performance.

🧠 Why V8 Uses Both Interpreter and Compiler
Ignition (Interpreter)	TurboFan (Compiler)
Fast startup	Slower to start
Less optimized	Highly optimized code
Used for all code initially	Used for hot code only

This combination is known as adaptive optimization.

🗑️ Garbage Collection (GC)
JavaScript engines also include Garbage Collectors to clean up memory:

Detects objects no longer in use.

Uses algorithms like mark-and-sweep.

V8 uses generational GC to manage memory efficiently.


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




