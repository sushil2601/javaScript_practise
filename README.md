Q.) what is event loop?

Ans:- The JavaScript Event Loop is a core part of the JavaScript runtime that enables asynchronous behavior while still being single-threaded. To understand it thoroughly, we need to break it down into parts: the Call Stack, Web APIs, Callback Queue, and the Event Loop itself.

🔁 What is the Event Loop?
The event loop continuously monitors the call stack and the callback queue. It pushes tasks from the queue to the stack when the stack is empty, allowing asynchronous operations to execute in a non-blocking way.

🧠 Key Concepts
1. Call Stack
JavaScript executes code synchronously.

The call stack is a data structure that records function calls.

When a function is invoked, it is added to the stack; once done, it's popped off.

Example:

js
Copy
Edit
function greet() {
  console.log('Hello');
}
greet(); // 'greet' is pushed to the call stack and then popped
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