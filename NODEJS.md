<!-- online editor for nodeJs  -->
Replit, W3Schools Spaces, CodeSandbox, and Codeanywhere,oneCompiler,JDoodle.

Q. What is Node.js
Ans :- 
    .is a c++ application with V8 embedded into it.

    .is a JavaScript runtime built on chrome's v8 JavaScript Engine.

    .Node.js is a cross-platform,open-source JavaScript runtime environment that can run on windows,linux,macOS and more.

    .runs on the v8 JavaScript engine and executes JavaScript code outside a web browser.

    .has an event-driven architecture capable of asynchronous I/O or Non Blocking I/O.

Q. What is global object in Node.Js?
Ans:-
    global object in node.Js is 'global'.

    global is nodeJs things not v8 engine.

    V8 Engine only understand the global object when nodeJs give it to v8 engine.

    globalThis :- referering across all JS runtime either in windows or nodejs.

Q. Node REPL?
Ans:-
    REPL :- Read,Evaluate,Print,Loop.
    REPL doesnot work for production.

    It is an interactive shell provided by Node.js that allows you to write and run JavaScript code line-by-line, test snippets, and interact with Node's environment without creating a file.

    Step	                                               Description
    Read	                         Takes user input, parses it into JavaScript code.
    Eval	                         Evaluates the parsed code.
    Print	                         Prints the result of the evaluation to the console.
    Loop	                         Loops back to wait for the next input.

    You can:

        .Declare variables

        .Run expressions

        .Call functions

        .Test small logic blocks

    .Useful REPL Features :-

            1 .help :-  to see all REPL commands.
            2 .exit :-  type .exit or press Ctrl + C twice to exit.
            3 .editor :- Enter multi-line editor mode .
            4 Use of _  :- stores the last evaluated result.

Q. Difference b/w Runtime environment and Framework?
Ans :-
    .Runtime Environment :- Primarily focus on providing the necessary infrastrucutre for code execution,including service like memory management and I/O operations.

    .Framework :- Primarily focuses on simplifying the development process by offering a structured set of tools,libraries.

Q. Express.js
Ans :- 
    .is a framework built on the top of Node.js

    .It is designed to simplify the process of building web applications and APIs by providing a set of features like routing system, middleware support etc.

    .Supports building REST APIs, real-time applications and single page applications.

Q. Http server
Ans:-   
    To create an HTTP server in Node.js, you use the built-in http module, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

    const http = require('http');

    // Create the server
    const server = http.createServer((req, res) => {
        // Set the response header (status code and content type)
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Send the response body
        res.end('Hello, World!\n');
    });

    // Start the server on port 3000
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });


    Term	                                              Description
http module	          A core Node.js module used to build HTTP-based applications like APIs and websites.

http.createServer()	  A method to create a new web server instance. It takes a callback with request and response objects.

req (Request Object)  Represents the incoming HTTP request. You can access method, headers, URL, body, etc.

res (Response Object)	Represents the server’s response to the client. You use it to send data back.

res.writeHead()	        Sets the HTTP status code and response headers. E.g., 200 = OK, 'Content-Type': 'text/html'.

res.end()	            Ends the response process and sends data back to the client. You can pass a message string.

req.on() :-             In Node.js, HTTP requests stream the data into the server. That means the   full data doesn't arrive all at once. You use req.on('data') and req.on('end') to collect and handle the full body of a request.



Q. Difference b/w NodeJS(Http server) vs Express.js
Ans :-
    
    Feature / Task            Node.js (Without Express)                                                          | Express.js    
                                                            |
| **Setup Simplicity**              | low-level setup required to create and manage an HTTP server manually. | One line to set up the server. `app.listen()`  
                       |
| **Routing**                       | Manually parse `req.url` and `req.method` to handle different routes.              | Built-in routing methods like `app.get()`, `app.post()`, etc.  
       |
| **Request Parsing (body)**        | manually handle and parse JSON | Use middleware like `express.json()` 
      |

| **Middleware Support**            | No built-in middleware support. You have to build everything from scratch.         | Easy and powerful middleware pattern support           
               |
| **Code Readability**              | Can become cluttered and hard to manage for multiple routes and logic.             | Clean and modular code using route handlers and middleware  
          |
| **Error Handling**                | Requires custom logic to catch and handle errors.                                  | Centralized error handling with middleware                            |

| **Routing Parameters / Query**    | Manual extraction from the URL.                                                    | Automatically handled and accessible via `req.params` and `req.query` |

| **Third-party Integrations**      | Manual configuration for any external libraries.                                   | Easily integrates with tools like Mongoose, Passport, JWT, etc.       |

| **Maintainability & Scalability** | Poor scalability and code gets harder to manage as app grows.                      | Easy to scale and organize using routers and middleware.              |


Q. What is Middleware in Express.js and when to use them?
Ans :-
    Middleware functions are functions that have access to the request (req) and response (res) objects and the next function in the request-response cycle. They are used to modify requests and responses, run code, handle errors, and terminate requests.

    Middleware can:-

        Execute any code

        Modify req or res

        End the request-response cycle

        Call next() to pass control to the next middleware

    Ex:-
        .express.json() – parses incoming JSON requests.
        .app.use(cors)  - Enable cors.

    Why Use Middleware?

        Code reusability: Centralize logic like logging, auth,body parsing, cors handling and validation.

        Separation of concerns: Keep route handlers clean.

    .Middleware is executed in the order it's registered.
    

Q. What is the purpose of the app.use() function in Express.js?
Ans :-
    The app.use() method is used to execute(mount) middleware functions globally.

Q. What is the purpose of the next parameter in Express.js?
Ans :-
    The next parameter is a callback function which is used to pass control to the next middleware function in the stack.

Q. What is the difference b/w application-level & route-level middleware?
Ans :-
    .Application-level middleware applies globally to all incoming requests in the entire Express.js application.

    .Route-level middleware applies only to specific routes, not for all incoming requests.

Q. What is Routing in Express.js?
Ans :-
    Routing is the process of directing incoming HTTP requests to the appropriate handler functions based on the request's method and the URL path.

Q. How to implement routing? How do you define routes in Express.js?
Ans :-
    To implement routing first define the routes.

    .In Express.js,routes are defined using the app.METHOD() functions, where METHOD is the HTTP request method(eg:- GET,POST,PUT,DELETE) and app is the instance of the Express application.

Q. What is express.Router() in Express.js?
Ans :-
    express.Router() is a class in Express.js that returns a new router object.

Q. What is REST and RESTful API?
Ans :-
    .REST(Representational State Transfer) is an architectural style for designing networked applications(REST is a set of guidelines for creating API's).

    .REST uses HTTP to allow communication b/w clients and servers.

    .RESTful API is a service which follow REST principles/guidelines.

Q. What is differences b/w REST API and SOAP API?
Ans :-

    REST API                                                  SOAP API

.Rest is an architectural style                   .SOAP(Simple Object Access Protocol) is a protocol

.Uses HTTP or HTTPS.                              .Can use various protocols(HTTP,SMTP etc.)

.Uses lightweight formats like JSON,XML           .uses XML

.lightweight and faster                           .can be slower due to XML processing


Q. What are HTTP Verbs and HTTP methods?
Ans:- 
    HTTP methods , also known as HTTP verbs, are a set of actions that a client can take on a resources.

         ex:- GET :-   Fetch data
              POST:-   send data to  create records
              PUT :-   update an existing record
              PATCH :- partially update an existing resource.
              DELETE :-remove a resource

Q.Explain the concept of Idempotence in RESTful APIs.
Ans :-
    Idempotence meaning performing an operation multiple time should have the same outcome as performing it once.

    Idempotence Methods :- GET,PUT,DELETE
    Non-Idempotence Methods :- POST

Q. What is the role of status codes in RESTful APIS?
Ans :-
    100 -> continue
    200 -> ok, 201 -> Created, 202 -> Accepted, 204 -> No content,203 Non-Authoritative Information
    300 -> Multiple choices
    400 -> Bad Request, 401 -> Unauthorized, 403 -> Forbidden, 404 -> Not Found
    500 -> Internal server error
    501 -> Not Implemented
    502 -> Bad Gateway
    503 -> service unavailable

Q. What is CORS in RESTful APIS?
Ans :-
    CORS(Cross-Origin Resource Sharing) is a security feature implemented in a web browsers that restricts web pages from making to a different domain than the one that served the web page.

Q. What is Token based and JWT authentication?
Ans :-
    JWT stands for JSON web token.

    JWT is widely used for authentication and authorization in web applications.

    It contain JSON objects which have the information that needs to be shared b/w client and server.

    These tokens are then sent on every HTTP requests, which allows the server to authenticate the user.

    Each JWT is also signed using cryptography to ensure that the json contents cannot be altered by the client or a malicious party.

    . Structure of a JWT :-

            .HEADER     --> Contains information about the type of token and algorithm.Alogrithm(HS256) and token type(JWT)

            .PAYLOAD    --> Contains the actual data (claims) you want to transmit, such as user ID or email.

            .SIGNATURE  --> Verify Signature(Used to verify that the token hasn’t been altered.)

            A 'Signature' section, that is the result of header and payload, concatenated and then encrypted with the private key.


    . On client-side, tokens can be stored in two different ways :
            .Stored in a cookie
            .Stored in the sessionStorage or localStorage of the browser.

    Working:-
    ---------
            Real Web App Example: Login & Auth

                Imagine you're using a shopping website.

                Step 1: Login (Issue Token)

                    You enter email and password.

                    Backend verifies your credentials.

                    If correct, server generates a JWT like:

                    {
                    "userId": "101",
                    "role": "buyer"
                    }

                    Server signs it with a secret key and sends it to your browser.

                    Your browser stores this token in localStorage or cookies.

                Step 2: Making Requests (Send Token)

                        Every time you:

                        View your profile

                        Add items to cart

                        Make a purchase

                    The browser sends the JWT in the Authorization header:


                    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...

                Step 3: Server Verifies Token
                    On the backend:

                    Server reads the token, verifies the signature, and decodes the payload.

                    If valid and not expired:

                    Server allows you to proceed (e.g., view profile).

                    If invalid/expired:

                    Server returns 401 Unauthorized.

                Step 4: Token Expiration

                    Tokens usually have a time limit (exp).

                    Once expired (e.g., after 1 hour), you must log in again.

                    This prevents someone from misusing a token if stolen.

Q. Child process
Ans :-
    In Node.js, the child-process modules allows you to create and control system-level processes.

    such as running shell commands, executing other node scripts.

    This is useful for :-
        . Running external tools(eg:- Git,Python,FFmpeg).
        . Performing CPU intensive tasks outside the main thread.
        . Creating worker processes.
        . Auotmating Devops or system Scripts.

    const {exec,spawn,fork,execFile} = require('child-process')
 
Q. What is V8 engine and how it works?
Ans :-
    An open-source, high-performance JavaScript engine built by Google, written in C++, and used in Google Chrome and Node.js.

    V8 is responsible for converting JavaScript code into fast machine code that your computer can execute directly.

    Why is V8 important in Node.js?
        .Node.js is not a browser, but it can run JavaScript outside the browser due to V8.
    
    .V8 engine consists:-
            .call stack
            .memeory heap
            .Garbage collector
            .Interpreter
            .compiler

    Working:-

        Whnever we run the code in nodeJs,

            .NodeJs gives that code to V8 Engine

            .V8 engine reads the code.

                    1. Parse the code

                        .do the lexical analysis(Tokenization -> break down the code in to token)
                        .and then syntax analysis is happen to this tokens and the Token's is converted to a AST.

                    2. Interpreter(Ignition Interpreter)

                        .based on the  AST , the Interpreter interpret the AST and convert in to byte code then byte code is executed.

                        In b/w compiling is happening, In b/w garbage collection is happening.

                        Now in b/w of this ,if ignition interpreter finds the oppurtunity to optimize the code.It will pass that to turbofan.This step is known as optimization.

                        and now turbofan compiler will compile this code and convert it to optimized machine code and now it is finally executed.

                        Now there is one more step involved which is known as deoptimization. And when the deoptimization happens the ignition interpreter again converts it to byte code and then the code is executed.

        
        .Garbage collection is happening parallely along with ignition interpreter and turbo fan compiler.

        .Compilation method in JS is known as JIT compilation.

        .JavaScript has interpretter as well as compiler.

        .Earlier CrankShaft compiler are used but now turbofan comiper are used.

Q. Interpreted V/S Compiled
Ans :-
        Interpreted                                              Compiled
    .start reading the code line-by-line and           .code is converted into machine code and then
    executed.                                           machine code is executed.

    .Fast initial execution.                           .Initially heavy but later executed fast.

Q. Different type of Garbage collector in V8 engine
Ans:-
    .Mark & sweap
    .orinoco
    .oilpen
    .scavenger
    .M-compact

Q. What is cookie-parser in Node.js (Express)?
Ans :- 
    cookie-parser is a middleware in Express used to parse cookies from the HTTP request header and make them easily accessible in your route handlers.

    Cookies are automatically parsed and stored in req.cookies.

Q. What is modules?
Ans:-
    A module in Node.js is just a separate file that contains some code (like functions, variables, or logic) that you can reuse in other files by importing it using require().

    Modules are protected by default.It protects their variables and function from leaaking.

    ex:- HTTP module,HTTPs module,File System module,Stream module and Buffer module.

    If we want to access of variables and functions from one modules to another modules we will have to export and import that modules.

        module.exports = calculateSum;

        and const calculateSum = require('./sum.js')  --> to import in another module.

    Ex:- 
    
        const obj = require('./xyz.js');      --> It will run first

        var name = 'Namaste Nodejs' --> Then it will run
        var a = 20;
        var b = 10;


    Why Use Modules?
        .To organize your code into smaller pieces

        .To reuse code without repeating it

        .To keep your project clean and manageable

Q. Different ways to import and export the modules.
Ans :-

    1. for more than one we want(older ways)

        module.exports = {
                            X :x,
                            calculateSum : calculateSum
        }

        const {x,calculateSum} = require('./Sum.js')
            or
        const obj = require('./Sum.js')

        console.log(obj.x)

    2. Newer way

        module.exports = { x,calculateSum};

        const {calculteSum,x} = require('./calculateSum.js')

    module.exports  => is an empty object.

    console.log(module.exports); //{}

    module.exports.x = x
    module.exports.calculateSum = calculateSum

    const util = require("node:util"); --> core thing of node.

Q. commonJs modules V/S ES Modules(ES6 module)
Ans:-

    commonJS modules                                             ES Modules

.module.exports and require()                            .import and export.
.by default used in NodeJs                               .by default used in React,angular.
.older way                                               .newer way.
.synchronous                                             .Async option is there.
.code run in non-strict mode.                            .code run in strict mode.

Q. How are variables and function private in different modules?
Ans :-
    IIFE and require statement wrapped code inside IIFE.

    (function(modules,require){

    })(module.exports={});

Q. How do you get access to module.exports?
Ans :-
    NodeJs passes module as one of the parameter to the IIFE.

Q. Work flow of --> require('./path')
Ans:-
        1. Resolving the module
            
            -> ./locationPath
            ->./json
            -> node:module

        2. loading the module

            -> file content is loaded acc. to file type.

        3. compile step --> wraps inside IIFE

        4. Evaluation   --> code is executed and returns the module.exports outside.

                . module.exports happen

        5. caching :- means Node caches requires

                        means code will run only once whenever the code is required in another modules,it will just return from the cache.

Q. What is Thread?
Ans:-
    A thread is the smallest unit of execution within a process in an
    operating system. 
    It represents a single sequence of instructions
    that can be managed independently by a scheduler. Multiple
    threads can exist within a single process, sharing the same
    memory space but executing independently. This allows for
    parallel execution of tasks within a program, improving efficiency
    and responsiveness.

    Threads can be either:
        1. Single-threaded
        2. Multi-threaded

Q. What type of threading does JavaScript use?
Ans:-
    JavaScript is a synchronous, single-threaded language, meaning there is only
    one thread in which the JavaScript engine (such as the V8 engine) runs. In
    JavaScript, code is executed line by line within this single thread.

Q. What is a Synchronous System?
Ans:-
    In a synchronous system, tasks are completed one after another.

Q. What is an Asynchronous System?
Ans:-
    In this system, tasks are completed independently.

Q. can javaScript handle asynchronous task?
Ans:-
    So, JavaScript itself is synchronous, but with the power of Node.js, it can
    handle asynchronous operations, allowing JavaScript to perform multiple tasks
    concurrently.

Q. what are the portions inside the JS engine and How synchronous code is executed By JS Engine ?
Ans:-
    The JavaScript engine operates with a single call stack, and all the code you
    write is executed within this call stack. The engine runs on a single thread,
    which perform one operation at a time.

    In addition to the call stack, the JavaScript engine also includes a memory
    heap. This memory heap stores all the variables, numbers, and functions that
    your code uses.

    One key feature of the JavaScript V8 engine is its garbage collector. The
    garbage collector automatically identifies and removes variables that are no
    longer in use, freeing up memory automatically.

Q. How asynchronous code executed? (Libuv)
Ans:-

    .The JavaScript engine cannot execute asynchronous operation alone ,it needs superpowers. This is where Node.js comes into the picture.
    
    .The JS engine gains its superpowers from Node.js. Node.js grants these powers
    through a library named Libuv.


    steps:-
            1. In Node.js, the JavaScript code we write is first passed to the V8 engine.The V8 engine starts reading and executing the code line-by-line (synchronously)

            2. When the V8 engine encounters an asynchronous operation in the code, it delegates that task to Libuv, which manages it using the event loop and thread pool.

                Ex:- fs.readFile() and setTimeout() are asynchronous.

                .Remaining Synchronous Code Runs.
            
            3. Libuv registers all asynchronous operations, along with their associated callback functions, in its event loop.

            This allows the V8 engine to continue executing the remaining code without waiting for the API call to complete.

            4. Once the asynchronous operation (like a timer or file read) finishes, its callback function is added to the callback queue (also known as the event queue), waiting to be executed by the event loop.

            5. The event loop continuously monitors the call stack and the callback queue.
                Whenever it finds the call stack empty, it:

                    Picks one task from the callback queue (based on priority and phase)

                    Pushes it onto the call stack for execution by the V8 engine

                    Repeats this process continuously, enabling non-blocking, asynchronous execution.

Q.What is Libuv?
Ans:-
    Libuv is a multi-platform c library and cross-platform  that provides support for asynchronous I/O capabilities to Node.js using an event-driven, non-blocking architecture.

    Async I/O made simple.

    Ex:- Read/write files,Handle network requests,Manage timers,Connect to databases  --> handled asynchronously using Libuv.

    .Main Components of Libuv

        1. Event loop
        2. Thread pool
        3. Callback Queue


Q. Explain the Event loops in NodeJs?
Ans:-
    .The event loop also known as semi-infinite loop, written in 'C' langauage.

    .The event loop in libuv is the heart of how Node.js handles asynchronous operations.
    It allows Node.js to perform non-blocking I/O operations, even though
    JavaScript is single-threaded.

    .The callback queue is where callbacks are stored after an asynchronous
    operation is completed. The event loop processes this queue to execute the
    callbacks when the call stack is empty.

    .Event loop keeps running and meanwhile also checking callstack is empty or not.

    .The event loop in LIBUV operates in four major phases:-

        1. Timers Phase: In this phase, all callbacks that were set using setTimeout or
        setInterval are executed. These timers are checked, and if their time has
        expired, their corresponding callbacks are added to the callback queue for
        execution.

        2. Poll Phase: After timers, the event loop enters the Poll phase, which is crucial
        because it handles I/O callbacks. For instance, when you perform a file read
        operation using fs.readFile , the callback associated with this I/O operation will
        be executed in this phase. 
        
        The Poll phase is responsible for handling all I/O-
        related tasks, making it one of the most important phases in the event loop.

        3. Check Phase: Next is the Check phase, where callbacks scheduled by the
        setImmediate function are executed. This utility API allows you to execute
        callbacks immediately after the Poll phase, giving you more control over the
        order of operations.

        4. Close Callbacks Phase: Finally, in the Close Callbacks phase, any callbacks
        associated with closing operations, such as socket closures, are handled. This
        phase is typically used for cleanup tasks, ensuring that resources are properly
        released.


.Before the event loop moves to each of its main phases (Timers, I/O Callbacks,Poll, Check,and 
Close Callbacks), it first processes any pending microtasks.

Microtasks include tasks scheduled using process.nextTick() and Promise callbacks. 

This ensures that these tasks are handled promptly before moving on to the next phase.


.If everything has done, callback queue is empty, call stack is empty, event loop wait over poll phase for any poll event occur.


Q. Thread pool :-
Ans:-
    .The Thread Pool in Node.js is a pool of worker threads, managed by Libuv, used to handle expensive or blocking operations in the background — without blocking the main (single) JavaScript thread.

    Whenever you perform tasks like file system (fs) operations, DNS lookups
    (Domain Name System), or cryptographic methods, libuv uses the thread pool.

    In Node.js, the default size of the thread pool is 4 threads

    UV_THREADPOOL_SIZE=4

    ex:- suppose you make 5 simultaneous file reading calls. What happens is that 4
        file calls will occupy 4 threads, and the 5th one will wait until one of the threads is
        free.

Q. Can you change the size of the thread pool?
Ans:-
    Yes, you can change the size of the thread pool by setting the UV_THREADPOOL_SIZE
    environment variable. For example, you can set it to 8 like this:

        process.env.UV_THREADPOOL_SIZE = 8;

Q. What process.exit(1) Does:
Ans :-

    process.exit() is a Node.js method that immediately stops the Node process.

    It takes a status code:
=
    0 = success

    1 or any non-zero number = error/failure

Q. What is Socket?
Ans:-
    In socket, you made a connections, complete your task and close the connection.
    It takes less resources.

    When a user makes a request to a website, a socket connection is established
    between the client and the server. This connection is typically used for a single
    request-response cycle: the client sends a request, the server processes it, sends
    back the response, and then the socket is closed. This process involves opening a
    new connection for each request.

    In the libuv library, when it interacts with the OS for networking tasks, it uses
    sockets. Networking operations occur through these sockets. Each socket has a
    socket descriptor, also known as a file descriptor (although this has nothing to do
    with the file system).

    When an incoming request arrives on a socket, and you want to write data to this
    connection, it involves blocking operations. To handle this, a thread is created for
    each request. However, creating a separate thread for each connection is not
    practical, especially when dealing with thousands of requests.
    Instead, the system uses efficient mechanisms provided by the OS, such as epoll
    (on Linux) or kqueue (on macOS). These mechanisms handle multiple file
    descriptors (sockets) without needing a thread per connection.

    Here’s how it works:-

    epoll (Linux) and kqueue (macOS) are notification mechanisms used to
    manage many connections efficiently.

    When you create an epoll or kqueue descriptor, it monitors multiple file
    descriptors (sockets) for activity.

    The OS kernel manages these mechanisms and notifies libuv of any changes
    or activity on the sockets.

    This approach allows the server to handle a large number of connections
    efficiently without creating a thread for each one.

    The kernel-level mechanisms, like epoll and kqueue , provide a scalable way to
    manage multiple connections, significantly improving performance and resource
    utilization in a high-concurrency environment.

Q.What is Web-socket?
Ans:-
    Web-socket :-
                .When a user makes a connection, it stays for a long time.
                .It takes more resources.

                WebSockets introduce a more efficient method by allowing the
                connection to remain open. This means that after the initial connection is
                established, it stays active, allowing for continuous communication between the
                client and server. Both the client and server can send and receive data at any time
                without the need to re-establish the connection. This persistent connection is
                ideal for real-time applications, where continuous interaction is required, such as
                in chat applications, online gaming, or live updates.

Q. What is server?
Ans:-
    A server means nothing but a remote computer.you can assume that it is a computer, It's a cpu working remotely.

    You can access servers remotely over a network to provide resources and services to another computer program.

    Hardware:- A physical machine (computer) that provides resources and
                services to other computers (clients) over a network.

    Software:- An application or program that handles requests and delivers
                data to clients.
            
Q. What is a protocol?
Ans:-
    A protocol is a set of rules that define how computers communicate with each
    other. Protocols determine the format in which data is sent between devices.

    ex:- FTP (File Transfer Protocol): Used for transferring files.
         SMTP (Simple Mail Transfer Protocol): Used for sending emails.

    HTTP :-
            (HyperText Transfer Protocol) is a language or set of rules that defines how clients
            and servers communicate.

Q. Suppose you have a server with many incoming requests, and users are hitting APIs. Do these APIs use the thread pool?
Ans:-
    No

Q. File Descriptors (fds) and Socket Descriptors
Ans:-

    File Descriptors (FDs) are integral to Unix-like operating systems, including Linux
    and macOS. They are used by the operating system to manage open files,
    sockets, and other I/O resources.

    Socket descriptors are a special type of file descriptor used to manage network
    connections. They are essential for network programming, allowing processes to
    communicate over a network.

Q. app.use() and app.all()
Ans:-
    .app.use():-
    ------------

            .app.use() is used to apply middleware functions that run for all HTTP methods (GET, POST, etc.) and optionally for specific route prefixes.

            Main Purposes:-
            ---------------
                Handle:

                    .Logging

                    .Authentication

                    .Error handling

                    .Body parsing (express.json())
    .app.all():-
    -------------

            .app.all() is used to define a route handler that matches all HTTP methods (GET, POST, etc.) for a specific route path.

            Main Purposes:-
            ----------------
                    .Create a catch-all handler for a specific route.

Q. What is process.nextTick()?
Ans:-
    process.nextTick() is a function provided by Node.js to schedule a callback function to be executed after the current operation completes but before the event loop continue.

    Use Case:
        .To delay execution of a function until the current stack clears.

        .Useful for cleanup tasks or manipulating data just before continuing.


Q. Difference b/w process.nextTick() and setImmediate.
Ans:-

    Concept	                     process.nextTick()	                           setImmediate()
Event Loop Phase	    Runs before event loop continues (microtask)	Runs in check phase of the event loop (macrotask)

Order of Execution	    Executes before I/O and timers	                Executes after I/O events

Type of Task	        Microtask	                                    Macrotask

Priority	            Higher 	                                        Lower 


<!-- File System,Stream and Buffer -->

.File System :-

        .The Node.js File System module (fs) provides a set of methods for working with the file system on your computer.

        .It allows you to perform file I/O operations in both synchronous and asynchronous ways.

        .const fs = require('fs');

    .promise-based versions of the File System API

        .const fs = require('fs').promises;

    .common use cases :-
        .Read and write files
        .Create and delete files
        .Create and remove directories

.'utf8' – ensures it returns text instead of a buffer.

1. Reading Files :-

        .readFile :-  asynchronous

                .Callback based
                .Uses callback functions to handle results or errors. 
                
                ex:-
                    const fs = require('fs');
                    fs.readFile('myfile.txt', 'utf8', (err, data)){}
        
        .readFileAsync :- asynchronous  (Node.js 10.0.0+)

                .Promises based
                .use async/await to handles results or errors.

                ex:-
                    const fs = require('fs').promises;
                    const data = await fs.readFile('myfile.txt', 'utf8');

        .readFileSync :- synchronous

                .Reading a file synchronously.
                
                ex:-
                    const fs = require('fs')
                    const data = fs.readFileSync('myfile.txt', 'utf8');

2. Creating and Writing Files :-

        .Asynchronous :-

            .writeFile      :- callback based      
            .writeFileAsync :- promise based

                .Creates a new file or overwrites an existing file with the specified content.
                Ex:- fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

            .appendFile :- Appends to a file; creates it if it doesn't exist.

        .Synchronous :-
            
            .writeFileSync :- 

                .Creates a new file or overwrites an existing file with the specified content.
                .It block the event loop until the file operation is complete.
                .fs.writeFileSync(path, data, options)

            .appendFileSync :- Appends to a file; creates it if it doesn't exist.

        .fs.open :- Opens a file for writing and creates it if it doesn't exist.

        .fs.close :- close file.

        .openSync , closeSync

        .File Flags :- When opening files, you can specify different modes:

            ->  'w'  - Open for writing (file is created or truncated or replace)
            ->  'wx' - Like 'w' but fails if the path exists
            ->  'w+' - Open for reading and writing (file is created or truncated)
            ->  'a'  - Open for appending (file is created if it doesn't exist)
            ->  'ax' - Like 'a' but fails if the path exists
            ->  'r+' - Open for reading and writing (file must exist)

.For writing large amounts of data, use streams to avoid high memory usage:

        .fs.access() :- Check if destination file already exists.

        .fs.rename() :-  method can be used for both renaming and moving files.

    .Delete :-

        .fs.unlink() :- to delete a single file.

        .To delete multiple files, you can use Promise.all() with fs.unlink():

        .fs.rm :- to delete directories.

.Stream :-
------------
        .Streams in Node.js are objects that facilitate reading from or writing to a data
        source in a continuous fashion. Streams are particularly useful for handling large
        amounts of data efficiently.

        .They allow you to process data in chunks as it becomes available, rather than loading everything into memory at once.

        .uses:-
            .File system operations (reading/writing files)
            .HTTP requests and responses
            .Data compression and decompression
            .Database operations
            .Real-time data processing

        .Why Use Streams?

                .Memory Efficiency
                .Time Efficiency

        .Without streams:- You'd crash the process attempting to load the entire file into memory
        .With streams:-    You process the file in small chunks (e.g., 64KB at a time)


    .Stream Type	                 

        .Readable      --> Streams from which data can be read (data source).

        .Writable      --> Streams to which data can be written (data destination).

        .Duplex        --> Streams that are both Readable and Writable.

        .Transform     --> Duplex streams that can modify or transform data as it's written and read.

    1. Readable Streams :-

            Ex:- Reading from a file ,HTTP responses on the client ,HTTP requests on the server

            .createReadStream :- Create a readable stream from a file.


        .Flowing Mode:- Data is read from the source and provided to your application as quickly as possible using events.

        .Paused Mode:-  You must explicitly call stream.read() to get chunks of data from the stream.

    2. Writable Streams :-

            Ex:- Writing to a file ,HTTP requests on the client ,HTTP responses on the server

            .createWriteStream :- Create a writable stream to a file.

    .The pipe():-  It connects a readable stream to a writable stream, automatically managing the flow of data and handling backpressure.



.Buffer :-
-----------
            .Buffers are used to handle binary data in Node.js. They provide a way to work
             with raw memory allocations and are useful for operations involving binary data,
             such as reading files or network communications.


<!-- Qns asked in Interview -->

Q. How can we connect microservices?
Ans:-
    1. HTTP REST APIs :- API integration.
    2. Using Kafka :-
            [Producer Microservice]
                    ↓
                [Kafka Broker]
                    ↓
            [Consumer Microservice(s)]

    3. Redis :-
            [Publisher Microservice]
                    ↓
                [Redis Channel]
                    ↓
            [Subscriber Microservice(s)]

    4. gRPC 
    5. GraphQL API Gateway

Q. How can we do the monitoring in Nodejs
Ans :-
    Monitoring in a Node.js application is essential for tracking performance, catching errors, and ensuring the app runs smoothly in production.

   | Category              | What to Monitor                                |
| --------------------- | ---------------------------------------------- |
| **Performance**       | Response time, memory usage, CPU load          |
| **Errors**            | Uncaught exceptions, rejected promises         |
| **Logs**              | Info, warnings, errors                         |
| **HTTP metrics**      | Request rate, status codes, response size/time |
| **Uptime**            | Is the app online or crashed?                  |
| **External services** | DB, APIs, Redis, etc.                          |


.Monitoring Tools for Node.js :-

        1.Built-in Node.js Tools :- process.memoryUsage(),process.cpuUsage()
        2.Logging with Winston.
        3.Grafana(for metrics) and kibana
        4.Telemetry

Q. What is Telemetry in Node.js
Ans :-
    Telemetry refers to collecting, transmitting, and analyzing metrics, logs, traces, and events from your application to monitor its health, performance, and usage.

        In Node.js, telemetry is used to:

            .Log structured data

            .Trace requests across services

            .Monitor CPU/memory usage

            .Track API call performance

            .Detect errors automatically

Q. How can we do the security in Nodejs
Ans :-
    .Security in Node.js: What You Need to Protect

    | Area                 | Examples                                  
| -------------------- | ----------------------------------------- |
| **Data**             | User passwords, tokens, confidential info |
| **APIs & Endpoints** | Authentication, rate-limiting, validation |
| **System**           | File access, process control              |
| **Dependencies**     | Vulnerable packages, supply-chain attacks |
| **Communication**    | Man-in-the-middle attacks (HTTP vs HTTPS) |


    .Major Ways to Secure Node.js Applications :-

        1..JWT :-

        | Purpose                                |  Description           
| ------------------------ | ----------------------------------------------------------------- |
| ✅ **Authentication**     | Verifying that the user is who they say they are (login).         |
| ✅ **Authorization**      | Granting access to protected routes (e.g., admin-only pages).     |
| ✅ **Stateless Sessions** | No need to store session in database or server memory.            |
| ✅ **Token-based APIs**   | Secure communication between frontend & backend or microservices. |


        2. Input Validation & Sanitization
        3. Authentication & Authorization

                Use libraries like:-

                    .jsonwebtoken – for token-based auth (JWT)

                    .bcryptjs – for password hashing
        
        4. Environment Variable Protection --> 
            .Use .env to store secrets, never hardcode passwords or API keys.
            .Use libraries like dotenv

        5. Rate Limiting & Brute Force Protection
            .Control request rate per IP to protect the API

        6. Helmet for Setting Secure Headers.

        7. CORS Protection.

        8. Use HTTPS Only :- Always encrypt communication using TLS/SSL(HTTPS)

Q. What is SSL/TLS?
Ans:-
    .SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols used to:

        .Encrypt communication between the client (browser/app) and the server.

        .Prevent man-in-the-middle attacks (MITM).

        .Verify identity of the server (via certificate authority).

    Note :- Today, TLS has replaced SSL — but people still call it “SSL certificate” out of habit.

Q. How can we document the NodeJs API?
Ans :-

    .OpenAPI / Swagger for API Documentation 

        .What is Swagger? :-Swagger (now part of OpenAPI spec) is used for documenting REST APIs.

        .Tools to Use:
            .swagger-ui-express
            .swagger-jsdoc

        .npm install swagger-ui-express swagger-jsdoc

        const express = require('express');
        const swaggerUi = require('swagger-ui-express');
        const swaggerJsdoc = require('swagger-jsdoc');

        const app = express();

        const options = {
        definition: {
            openapi: '3.0.0',
            info: {
            title: 'My API',
            version: '1.0.0',
            },
        },
        apis: ['./routes/*.js'], // files to scan for annotations
        };

        const swaggerSpec = swaggerJsdoc(options);

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

        app.listen(3000, () => console.log('Docs at http://localhost:3000/api-docs'));

    .Folder/Files
            .route/user.js
            .docs/swagger.js
            .app.js           -->   # Main entry file (import and serve docs here)


                const swaggerUi = require('swagger-ui-express');
                const swaggerSpec = require('./docs/swagger');

                app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

Q. Different ways to handle error handling in nodejs?
Ans :-
        1.Synchronous Error Handling (try-catch)
        2.Asynchronous Error Handling (Promises)
        3.Async/Await with try-catch
        4.Express Error Handling Middleware  :- Use middleware for centralized error handling

                app.use((err, req, res, next) => {
                    console.error(err.stack); // log for debugging
                    res.status(err.status || 500).json({
                        message: err.message || 'Internal Server Error',
                    });
                });

        5.Global Error Handling (Process Events)

            process.on('uncaughtException', (err) => {
                console.error('Uncaught Exception:', err);
                process.exit(1); // or graceful shutdown
            });

            process.on('unhandledRejection', (reason, promise) => {
                console.error('Unhandled Rejection:', reason);
            });

        
        6.Custom Error handlers 

Q. Where do you store a token?
Ans :-
        .In a Frontend Application :-
                .In cookies (on the browser)
                .Local Storage(window.localStorage)
                .Session Storage

        .In a Backend Application :-
                .Do not save the token on the server unless you are implementing:

                    .Blacklisting

                    .Refresh token storage

                    .Session management

                .If you use refresh tokens, you may store them in:-

                    .A database (MongoDB, Redis, etc.)

                    .Or secure HTTP-only cookies


Q. In nodejs where we authenticate the token and where we implement the token 
Ans :-

        1. Where to "implement the token" (i.e., generate/send) :-

            -> We generate and send the token during login or signup .

                // Generate token
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                res.json({token})

        2. Where to "authenticate the token" (i.e., verify) :-

            -> We authenticate the token using a middleware function --> placed before protected routes.

Q. What is Restful API and what is the rule to create it?
Ans :-
    A RESTful API is an architectural style for building networked applications, particularly web services, based on stateless client-server communication over HTTP.

    It allow clients to communicate with a server over HTTP using standard methods.

    Rule to create Restful API:-

            1. Naming the resources Use Nouns, Not Verbs in URLs. Ex:- GET    /users  
            2. Use the Correct HTTP Methods
            3. Statelessness --> Every API call should contain all the information it needs.
            4. Use JSON for Responses
            5. Use Proper Status Codes.
            6. Version Your APIs.
            7. Use Query Parameters for Filtering/Searching
            8. Authentication and Security
                .Use JWT or OAuth 2.0 for stateless authentication.

                .All communication over HTTPS.

                .Implement rate limiting, IP throttling, and input sanitization.

            9. Monitoring
            10.Documentation
            11.Error Handling --> Structured, meaningful HTTP codes and JSON errors
            
            12. Idempotency
                .Ensure PUT, DELETE, and GET requests are idempotent (multiple identical requests should result in the same state).


Q. Rest API endpoint :-  Ex. of Cart
Ans :-
        .Get current user's cart --> GET	/api/v1/cart
        .Add item to cart	     --> POST	/api/v1/cart/items
        .Update item quantity	 --> PUT	/api/v1/cart/items/:itemId
        .Remove item from cart	 --> DELETE	/api/v1/cart/items/:itemId
        .Clear the cart	         --> DELETE	/api/v1/cart
        
        .router.post("/changepassword",auth,changePassword);


Q. What boilerplate or additional setup do you include when starting a React application?
Ans:-
    .they’re usually testing your:-

            .Architectural thinking

            .Experience with large-scale React apps

            .Awareness of real-world needs like security, performance, scalability, and collaboration


    .When starting a new React application, beyond the base boilerplate provided by tools like create-react-app or Vite, I always include some key structural and tooling enhancements to ensure the app is scalable, maintainable, and production-ready.

    .my setup ensures the application is developer-friendly, scalable, performant, and ready for collaborative team work in a production environment.

        1.Project Structure
            /src
                /api
                /assets
                /components
                /contexts
                /hooks
                /pages or /views
                /routes
                /services
                /store (Redux or Zustand, etc.)
                /utils
            .env
            App.jsx
            index.js

        2. Routing
        3. State Management
        4. API Integration
        5. Authentication Handling(JWT token storage)
        6. Styling Framework(Tailwind css or styled component)
        7. Form Handling & Validation
        8. Testing Setup
        9. Performance Optimization
        10.Error Boundaries
        11.Logging / Monitoring Tools
        12.Documentation

Q. Child Process in nodeJs?
Ans :-
    .In Node.js, a child process allows us to run system-level commands or external scripts outside the main thread. 

    .This helps offload heavy CPU tasks, avoid blocking the event loop, and enable parallel processing. 
    .I often use exec() or spawn() for shell commands, and fork() when I need inter-process communication with another Node.js script.

    .Executing shell commands (e.g., ls, git, python script.py)

    .Real-world Use Cases:-
        Running a Python or Java program from a Node.js server

        Image or video processing (e.g., using ffmpeg)

        File compression/decompression

        Large data transformations

        Worker-based parallel processing with communication

    .There are four methods in child process :-

        .exec()      --> 
                .Run a command in a shell (buffer-based) 
                .buffers the output .
                ex:- like ls, git --version

        .execFile()  --> 
                .Run a file directly (without a shell)
                .Executes an executable file directly.
                .Faster and more secure than exec() for known scripts/executables.
                .Output is still buffered.

          ex:- .exe, .sh

        .swapn()     --> 
                .Stream-based command execution
                .Streams stdout and stderr, great for large output (e.g., big files).
                .handle data as it comes.

                ex:- e.g., video processing, streaming logs

        .fork()      --> used to run another Node.js script

Q. What is clustering in NodeJs?
Ans :-
    .Clustering in Node.js is a way to create multiple instances (workers) of your Node.js application to take advantage of multi-core CPUs, enabling concurrent request handling and better performance under load.

    .By default, Node.js runs on a single thread, which means it can only use one CPU core — even if the server has 4, 8, or more cores.
    .Clustering solves this by forking child processes, each running on its own core, and sharing the same server port.

    .Key Features:
        All workers share the same port.

        Each worker runs in its own memory space (not shared memory).

        Can be combined with load balancers, PM2, or Docker for production scaling.

        Can gracefully handle crashes — restart dead workers automatically.

Q. worker_threads
Ans :-
    .The worker_threads module allows multi-threading within a single process. Each thread shares memory  and runs independently.

    .It's mainly used for CPU-intensive tasks like image processing, compression, etc., that would block the event loop.

    .Key points:
        Uses threads, not processes

        Multi-thread architecture

        Shared memory possible

        Good for offloading heavy computation

    .cluster is used to horizontally scale your Node.js application across multiple processes, useful for I/O-heavy workloads.
    .worker_threads allows for parallel execution of CPU-heavy JavaScript code in threads, useful to avoid blocking the main thread in single-process scenarios.

    .When to Use What?
        .Use cluster when:
            You want to scale a Node.js HTTP server across CPU cores.

            You are handling many concurrent I/O-bound requests.

            You want independent processes, isolated and robust.

        .Use worker_threads when:
            You need to do CPU-intensive processing (e.g., image resizing, encryption).

            You want to offload blocking tasks from the main thread.

            You need shared memory or faster inter-thread communication.


<!-- Pending topic -->
1. Redis
2. Docker


<!-- Scenario based question -->







    

