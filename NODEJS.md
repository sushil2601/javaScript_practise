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

    globalThis :- ferering across all JS runtime either in windows or nodejs.

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

    .Framework :- Primarily focuses on simplifying the development process by offering a structured set of tools,libraries and best practises.

Q. Express.js
Ans :- 
    .is a framework built on the top of Node.js

    .It is designed to simplify the process of building web applications and APIs by providing a set of features like routing system, middleware support etc.

    .Supports building REST APIs, real-time applications and single page applications.

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
    200 -> ok, 201 -> Created, 202 -> Accepted, 204 -> No content
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

Q. Buffer and Stream
Ans :-


Q. Promises:-
Ans :-
        
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

Q. Monolith vs Micro services
Ans :-


Q. Redis
Ans :-

Q. What is localStorage and cookies
Ans:-

Q. What is modules?
Ans:-
    A module in Node.js is just a separate file that contains some code (like functions, variables, or logic) that you can reuse in other files by importing it using require().

    Modules are protected by default.It protects their variables and functio from leaaking.

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
    meaning it can only perform one operation at a time.

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

Q. What is process.nextTick()?
Ans:-


Q. Thread pool
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

Q. What is Socket and Web socket?
Ans:-
    In socket, you made a connections, complete your task and close the connection.
    It takes less resources.

    Web-socket :-
                .When a user makes a connection, it stays for a long time.
                .It takes more resources.

Q. What is server?
Ans:-
    A server means nothing but a remote computer.you can assume that it is a computer, It's a cpu working remotely.

    You can access servers remotely over a network to provide resources and services to another computer program.

Q. 




    

