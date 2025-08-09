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
    An HTTP server in Node.js is a core feature provided by the http module that allows your application to handle HTTP requests and send responses.

    const http = require('http');

    // Create the server
    const server = http.createServer((req, res) => {
        
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header (status code and content type)

        res.end('Hello, World!\n'); // Send the response body
    });

    // Start the server on port 3000
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });


| Term                  |      Description                                     |
------------------------------------------------------------------------------ |
`http` module         -> Built-in module to create web servers and APIs.  
`http.createServer()` -> Creates an HTTP server. Takes a callback with `req` & `res`.
`req` (Request)       -> Represents incoming request; has method, headers, URL, etc.
`res` (Response)      -> Used to send response to the client.  
`res.writeHead()`     -> Sets status code & headers (e.g., 200 OK, content type).
`res.end()`           -> Ends response and sends optional data.          
`req.on()`            -> Handles streaming data (e.g., for POST body). Use `'data'` and `'end'` events.



Q. Difference b/w Http server vs Express.js
Ans :-
    
    HTTP server                                        Express.js                                  
low-level setup required to create and manage an HTTP server manually.  One line to set up the server. `app.listen()`  
                       |
Manually parse `req.url` and `req.method` to handle different routes.  Built-in routing methods like `app.get()`, `app.post()`, etc.

manually handle and parse JSON.                        Use middleware like `express.json()` 

No built-in middleware support. You have to build everything from scratch. Has middleware supports.

Requires custom logic to catch and handle errors.      Centralized error handling with middleware.

Manual extraction from the URL.                        Automatically handled and accessible via `req.params` and `req.query`.

Manual configuration for any external libraries.       Easily integrates with tools like Mongoose, Passport, JWT, etc.

Poor scalability and code gets harder to manage as app grows.   Easy to scale and organize using routers and middleware.     


Q. What is Middleware in Express.js and when to use them?
Ans :-
    .Middleware are functions in Express.js that have access to req, res, and next(). They sit between the request and response, used to handle logic like authentication, logging, parsing, etc.

    .What Middleware Can Do:-
        .Execute any logic.

        .Modify req or res.

        .End the request-response cycle.

        .Call next() to move to the next middleware.

   .Common Examples:
        .express.json() – Parses JSON bodies.

        .app.use(cors()) – Enables CORS.

        .app.use(authMiddleware) – Custom auth check.

        .app.use(cookieParser()) ->cookie-parser middleware.

    .Why Use Middleware?
        .Reusability: Centralize logic like auth, validation, etc.

        .Cleaner Code: Keeps route handlers focused.

    .Order Matters: Middleware runs in the order it's declared.
    
    
Q. What is the purpose of the app.use() function in Express.js?
Ans :-
    .The app.use() method is used to execute middleware functions globally.

    .It is executed in the order it's defined.

    .Works for all HTTP methods (GET, POST, PUT, etc.).

    .Can be used for:

        .Logging

        .Authentication

        .Body parsing

        .CORS

        .Error handling


Q. What is the purpose of the next parameter in Express.js?
Ans :-
    The next parameter is a callback function which is used to pass control to the next middleware function in the stack.

Q. What is the difference b/w application-level & route-level middleware?
Ans :-
    .Application-level Middleware:-
        .Registered using app.use() or app.METHOD().

        .Applies globally to all incoming requests, regardless of the route or method.

        .Commonly used for:

            .Logging

            .Body parsing

            .CORS

            .Authentication (when needed for all routes)

    .Route-level Middleware:-
        .Applied directly to individual routes or route groups.

        .Used when you want specific logic to run only for certain endpoints.

Q. What is Routing in Express.js?
Ans:-
    .Routing in Express.js refers to the mechanism of defining how an application responds to client requests for a particular HTTP method (GET, POST, PUT, DELETE, etc.) and a URL path.

    .It is the process of mapping incoming requests to the appropriate handler functions (controllers).

    .Each route is defined by:

        .HTTP method (e.g., GET, POST)

        .URL path (e.g., /users, /api/login)

        .Callback function(s) that handle the request.

Q. How do you implement routing in Express.js? How are routes defined?
Ans:-
    .In Express.js, routing is implemented using the app.METHOD() functions, where METHOD corresponds to an HTTP method like GET, POST, PUT, or DELETE.

    .This allows the application to handle specific HTTP requests to defined URL paths.

    app.METHOD(PATH, HANDLER)
        .METHOD: HTTP method (GET, POST, PUT, DELETE, etc.)

        .PATH: Route endpoint

        .HANDLER: Callback function to handle the request

Q. What is express.Router() in Express.js?
Ans :-
    .express.Router() is a built-in class in Express.js that allows you to create modular, mountable route handlers. 

    .used to handle routing in a cleaner and more organized way.

    .Why use express.Router()?
        .Helps organize routes into separate files/modules

        .Promotes modularity and scalability

        .Useful for grouping related routes (e.g., all /user routes in one file)

        const express = require('express');
        const router = express.Router();

        router.get('/profile', (req, res) => {
        res.send('User profile');
        });

        module.exports = router;

Q. What is cookie-parser in Node.js (Express)?
Ans :- 
    cookie-parser is a middleware in Express used to parse cookies from the HTTP request header and make them easily accessible in your route handlers.

    Cookies are automatically parsed and stored in req.cookies.

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
    .CORS stands for Cross-Origin Resource Sharing.
    .It’s a browser security feature that controls which websites are allowed to access your backend APIs.

    .Why is CORS needed?
        .By default, browsers block requests made from one domain (like example.com) to another domain (like api.example.com).
        .CORS is used to allow or deny these requests.

    .How to enable CORS in Express.js:-
    
        const cors = require('cors');
        app.use(cors()); // allows all origins

        app.use(cors({ origin: 'http://localhost:3000' })); //allow only specific origin

    .Common CORS Headers:
        .Access-Control-Allow-Origin

        .Access-Control-Allow-Methods

        .Access-Control-Allow-Headers


Q. What is Token based and JWT authentication?
Ans :-
    JWT stands for JSON Web Token.
    It is used for authentication and authorization in web applications.

    It helps the server and client share information securely in a compact, encoded format.

    What’s Inside a JWT?
        .A JWT is a string made of three parts:

            .Header – Contains the token type (JWT) and algorithm used (like HS256).

            .Payload – Holds the actual user data like user ID, email, or role.

            .Signature – Verifies that the token wasn’t changed. It's created using the header + payload + secret key.

        .Format:- (Header.Payload.Signature)

    .Why is the Signature Important?
        .The signature ensures security – if someone tries to change the token data (payload), the signature won’t match, and the server will reject it.

    .Where is the Token Stored on Client?
        On the frontend, JWT can be stored in:-

            .Cookies – safer if using httpOnly

            .localStorage or sessionStorage – easier to use but more exposed to XSS attacks

   .How JWT Works (Step-by-Step):-
        Example: Shopping Website Login
        
        .Step 1: Login (Token Issued)

            You log in with your email and password.

            Backend verifies credentials.

            If correct, it creates a token .

            The server signs it with a secret key and sends it to the browser.

        .Step 2: Browser Stores Token

            The token is saved in localStorage, sessionStorage, or a cookie.

        .Step 3: Making Authenticated Requests

            .Once the token is stored in the browser (e.g., after login),
            .the browser includes it in the headers of every request to the server.

                Authorization: Bearer <your_token>
            .This helps the server identify and authenticate the user for protected routes like viewing profile, adding to cart, etc.

            
        .Step 4: Server Verifies Token

            .Server checks the token’s signature.

            .If valid and not expired → request is allowed.

            .If invalid or expired → returns 401 Unauthorized.

        .Step 5: Token Expiration

            .JWTs have an expiry time (exp).

            .After expiration (e.g., 1 hour), the user must log in again.

            .Helps prevent misuse if a token is stolen.

 
Q. What is V8 engine and how it works?
Ans :-
    V8 is an open-source, high-performance JavaScript engine developed by Google.

    It is written in C++ and is used in:

        Google Chrome (for running JS in the browser)

        Node.js (to run JS outside the browser)

    Why is V8 Important in Node.js?
        Node.js is not a browser, yet it runs JavaScript — due to the V8 engine.

        V8 converts JavaScript into fast machine code that your computer can execute directly.

    .Main Components of V8 Engine:
        Call Stack

        Memory Heap

        Garbage Collector

        Interpreter (Ignition)

        Compiler (TurboFan)

    Working:-

        Whenever you run JavaScript in Node.js:-

            .Node.js hands the code to the V8 engine.

            .Parsing Stage:

                Lexical Analysis (Tokenization): Code is broken into tokens.

                Syntax Analysis: Tokens are converted into an Abstract Syntax Tree (AST).

            .Interpretation:

                The Ignition interpreter reads the AST and converts it into bytecode.

                This bytecode is immediately executed.

                While running, Garbage Collection also takes place to free memory.

            .Optimization (JIT Compilation):

                If V8 sees repetitive patterns, it sends that part to the TurboFan compiler.

                TurboFan compiles it into highly optimized machine code.

            .De-optimization (if needed):

                If V8 realizes the optimization is no longer valid (e.g., due to dynamic JS behavior), it de-optimizes the code.

                It goes back to the bytecode from Ignition and resumes execution.
        
        .Extra Notes:
            .V8 uses a Just-In-Time (JIT) compilation method (combination of interpreter and compiler).

            .JavaScript is both interpreted and compiled.

            .Earlier, V8 used Crankshaft as the compiler, but now it uses TurboFan (more efficient).

Q. Interpreted V/S Compiled
Ans :-
    Interpreted                            | Compiled    

Code is executed line by line.      Code is fully converted to machine code first, then executed.

Faster to start, slower overall.    Slower to start, but runs faster once compiled.

Errors are shown during execution.  Errors are shown before execution, at compile time.

JavaScript, Python                  C, C++, Java (after compilation to bytecode)


Q. Different type of Garbage collector in V8 engine
Ans:-
    .Mark & sweap
    .orinoco
    .oilpen
    .scavenger
    .M-compact

Q. What is modules?
Ans:-
    .A module in Node.js is just a separate file that contains code (like functions, variables, or logic) that you can reuse in other files using require().

    Key Points:-
        Modules encapsulate code, meaning their variables and functions don’t leak outside by default.

        They help organize, reuse, and separate code for better project structure.

    Common Built-in Modules:
        http
        https
        fs (File System)
        stream
        buffer

    Exporting & Importing:
        To use code from one module in another:

        Export in one file

        Import in another file

    Module Execution Flow Example:
        const obj = require('./xyz.js'); // This runs first
        var name = 'Namaste Nodejs';     // Then this
        var a = 20;
        var b = 10;

    Why Use Modules?
        Organize code into smaller, focused parts.
        Reuse code without repetition.
        Keep projects clean, readable, and maintainable.

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
    .In Node.js, every module is wrapped inside a special function (IIFE) internally.
    .This is done by Node.js itself when a file is loaded using require().

    (function(exports, require, module, __filename, __dirname) {
        // Your module code lives here
    })();

    .Why is this important?
        .It creates a local scope for each module.
        .Variables and functions inside one module can’t be accessed directly from another module.
        .This is how privacy and encapsulation are achieved in Node.js.

    .Only exported variables/functions are accessible outside.

Q. How do you get access to module.exports?
Ans :-
    .In Node.js, when you create a module (i.e., a file), Node automatically wraps your code inside a function using IIFE.

    .Because of this:
        The module object is passed as a parameter to every module.

        This gives you access to module.exports, which you can use to export variables, functions, or objects from that file. 

Q. Work flow of --> require('./path')
Ans:-
    .When you use require('./path'), Node.js goes through 5 main steps behind the scenes:

    1.Resolving the Module
        Node finds the actual file using the path you gave.

        It tries:
            ./locationPath.js
            ./locationPath.json

    2.Loading the Module
        Once found, Node reads the file’s content based on the type:- .js, .json, .node

    3.Compiling
        For JavaScript files:- Node wraps the code inside an IIFE

    4.Evaluating
        The code is executed line by line.

        The result of module.exports is returned to the file where you called require().

    5.Caching
        Once a module is loaded, Node caches it.

        Next time you require() the same file, Node will just return it from cache.

        This means:
            .The file executes only once
            .Improves performance

Q. What is Thread?
Ans:-
    .A thread is the smallest unit of execution inside a process.
    .It’s like a lightweight sub-task that runs a set of instructions.
    .A process can have one or more threads.

    Key Points:
        Threads share the same memory of the process.
        They run independently, allowing tasks to happen in parallel.
        Threads are managed by the OS scheduler.

    Why are Threads Useful?
        They improve: Performance,Responsiveness

    Helpful in handling multiple tasks at once (like downloading a file while using an app).

    Types of Threads:
        .Single-threaded – Only one task runs at a time (e.g., JavaScript in Node.js).

        .Multi-threaded – Multiple tasks run at the same time (e.g., Java, C++ apps).

Q. What type of threading does JavaScript use?
Ans:-
    .JavaScript is a single-threaded and synchronous language.

    .This means it can run only one task at a time in a single thread.

    .Code runs line by line, one after another.

    .Why Single-threaded?
        .Because JavaScript was mainly designed to run in the browser, where simplicity and responsiveness are important.

Q. What is a Synchronous System?
Ans:-
    In a synchronous system, tasks are completed one after another.

Q. What is an Asynchronous System?
Ans:-
    In this system, tasks are completed independently.

Q. Can javaScript handle asynchronous task?
Ans:-
    So, JavaScript itself is synchronous, but with the power of Node.js, it can
    handle asynchronous operations, allowing JavaScript to perform multiple tasks
    concurrently.

Q. what are the portions inside the JS engine and How synchronous code is executed By JS Engine ?
Ans:-
    .Main Parts of the JS Engine (like V8):
        .Call Stack
            Executes your code line by line (synchronously).
            Handles function calls in a Last In, First Out (LIFO) order.

        .Memory Heap
            Stores variables, objects, and functions.
            It's a large, unstructured memory space.

        .Garbage Collector
            Automatically removes unused variables to free memory.
            Keeps your app memory-efficient.

    .How Synchronous Code is Executed:
            All your code is run inside the Call Stack.
            JS is single-threaded, so it does one task at a time.
            Functions are pushed to the stack when called, and popped when finished.

Q. How asynchronous code executed? (Libuv)
Ans:-

    JavaScript Alone Can’t Handle Async Tasks
        .JavaScript by itself (like in the browser) can’t handle asynchronous operations such as reading a file or waiting for a timer.

        .That’s where Node.js comes in to picture it gives JS "superpowers" through a library called Libuv.

    Steps of Async Execution in Node.js:
        step 1.
            .When we run JS in Node.js, our code is first passed to the V8 engine.
            .V8 begins to execute the code line-by-line (synchronously).

        step 2.
            .When V8 encounters an asynchronous function (like setTimeout() or fs.readFile()), it passes that task to Libuv.

            .Libuv manages async tasks using:
                .Event loop
                .Thread pool

            .Meanwhile, the rest of the synchronous code keeps running.

        step 3.
            .Libuv registers the async tasks and their callback functions.
            .These tasks are handled in the background without blocking the main code.

        step 4.
            .After an async task (like file read or timer) finishes, its callback is pushed to the callback queue.

        step 5.
            .Event Loop Executes Callback
            .The event loop constantly checks
                .Is the call stack empty?
                .Are there callbacks in the callback queue?

            If the stack is empty:
                .It takes one callback from the queue
                .Pushes it into the call stack
                .The V8 engine executes it

            This loop continues, enabling non-blocking asynchronous execution in Node.js.

Q.What is Libuv?
Ans:-
    .Libuv is a C library used by Node.js that helps it perform asynchronous operations in a non-blocking way using an event-driven architecture.

    .It works across platforms (Windows, Linux, macOS etc.).

    .Why is Libuv Needed?
        JavaScript itself can’t handle tasks like:

            Reading or writing files
            Managing timers
            Handling network requests
            Connecting to databases

        So, Libuv helps Node.js handle all these asynchronously (without blocking other code).
    
        Libuv = “Async I/O made simple”

    .Main Components of Libuv:
        .Event Loop
        → Watches the call stack and callback queue to decide what runs next.

        .Thread Pool
        → Runs blocking tasks (like file operations) in the background.

        .Callback Queue
        → Stores completed async tasks’ callbacks, ready to be executed.

Q. Explain the Event loops in NodeJs?
Ans:-
    .The event loop (also called semi-infinite loop) is written in C language.
    .It is the heart of Libuv and is how Node.js handles asynchronous operations.
    .It allows Node.js to perform non-blocking I/O, even though JavaScript is single-threaded.

    .What does the Event Loop do?
        .The callback queue stores callbacks after an asynchronous operation completes.
        .The event loop checks the call stack:
        .If the call stack is empty, it picks the next callback from the callback queue and executes it.
        .The event loop keeps running, always checking if the call stack is empty or not.

    .Phases of the Event Loop in Libuv
        .The event loop has 4 major phases:

        1. Timers Phase:
            Executes callbacks from:-setTimeout,setInterval

            If their time has expired, their callbacks are moved to the callback queue.

        2. Poll Phase:
            Important phase that handles I/O callbacks (like fs.readFile).
            It checks for completed I/O operations and executes their callbacks.
            Responsible for all I/O-related tasks.

        3. Check Phase:
            Executes callbacks scheduled by setImmediate().
            Used to run code right after the poll phase.

        4. Close Callbacks Phase:
            Executes callbacks related to closing operations (like socket closures).
            Used for cleanup tasks and releasing resources.

    .Microtasks Before Each Phase
            Before entering each main phase (Timers, Poll, Check, Close), microtasks are executed first.

            These include:- process.nextTick(),Promise callbacks

            This ensures microtasks are handled quickly before moving on.

    .When Does the Event Loop Wait?
            If:-
                .The callback queue is empty
                .The call stack is empty

            Then:- The event loop waits at the Poll phase for any new events.

Q. Thread pool :-
Ans:-
    .The Thread Pool in Node.js is a pool of worker threads, managed by Libuv.
    .It is used to handle heavy or blocking operations in the background — without blocking the main JavaScript thread.

    .When is Thread Pool Used?
        It is used when you perform tasks like:
            File System operations (fs)
            DNS lookups
            Cryptographic methods

    These are offloaded to the Libuv thread pool.

    Node.js has a default thread pool size of 4. --> UV_THREADPOOL_SIZE=4

    Example:-
        You make 5 file read calls at once:

        4 calls occupy the 4 available threads

        The 5th call waits until a thread becomes free

Q. Can you change the size of the thread pool?
Ans:-
    Yes, you can change the thread pool size in Node.js by setting the UV_THREADPOOL_SIZE environment variable.

        process.env.UV_THREADPOOL_SIZE = 8;

Q. What process.exit(1) Does:
Ans :-
    .process.exit() is a method in Node.js used to immediately stop the running process.

    .It takes a status code as an argument:

        .process.exit(0) → Success (no error)

        .process.exit(1) (or any non-zero) → Failure/Error

Q. What is Socket?
Ans:-
    .A socket is a connection between a client and server.
    .You connect → do your task → then close the connection.
    .It uses fewer system resources.

    .How a Socket Works:
        When a client makes a request to a server:

            .A socket connection is created.
            .The client sends a request.
            .The server sends back a response.
            .The socket is closed.

        .This happens for every request

    .How Libuv Handles Sockets:
        .Libuv (used in Node.js) interacts with the OS using sockets for networking.
        .Each socket has a socket descriptor (aka file descriptor – unrelated to files).

    .Problem with Threads for Each Request:
        .Writing to a socket is a blocking operation.
        .Creating a thread per connection is not scalable (too costly for many users).

    .Solution: Efficient OS-Level Mechanisms
        .Instead of creating threads for each connection, systems use:

            Linux -->	epoll
            macOS -->	kqueue

        .These do the following:
            .Monitor multiple socket connections at once.
            .Notify Libuv when activity (read/write) happens.
            .No thread is needed per connection – saves resources.
            .This enables high concurrency without overloading the system.

Q.What is Web-socket?
Ans:-
    A WebSocket is a type of connection between a client and server that:
        .Stays open for a long time (persistent connection)
        .Uses more system resources than a regular socket

    .How WebSocket Works:
        .After the initial connection is made 
        .It remains open
        .Both client and server can:
        .Send data
        .Receive data
        .At any time, without reconnecting
    
    .WebSockets are ideal for real-time applications, such as: Chat apps,Online games,Live updates.

Q. What is server?
Ans:-
    .A server is simply a remote computer — You can think of it as a CPU working remotely.
    .It can be accessed remotely over a network
    .It provides resources and services to other computers or programs (called clients)

    .Hardware:-
        .A physical machine (computer) that provides resources and services to clients over a network
    .Software:-	
        .A program or application that handles requests and sends data back to the clients
            
Q. What is a protocol?
Ans:-
    .A protocol is a set of rules that define how computers communicate with each
    other. 
    .Protocols determine the format in which data is sent between devices.

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

    .File Descriptors (FDs):
        .Used in Unix-like systems (e.g., Linux, macOS)
        .They are integers used by the OS to keep track of
            .Open files
            .Sockets
            .Other I/O resources
        .File Descriptors manage general I/O

    .Socket Descriptors:
        .A type of file descriptor
        .Specifically used for network connections
        .Help processes communicate over a network (like client-server communication)
        .Socket Descriptors manage network I/O

Q. app.use() and app.all()
Ans:-
    .app.use():-
        .Used to apply middleware functions.
        .Runs for all HTTP methods (GET, POST, etc.).
        .Can be applied to:
            .All routes or
            .Specific route prefixes

        .Common Uses:- Logging, Authentication, Error handling, Body parsing (express.json())

    .app.all():-
        .Used to handle all HTTP methods for a specific route.
        .Not for middleware, but for route handling.

        .Common Uses:-Creating a catch-all route handler, e.g., for /api/* or /404

Q. What is process.nextTick()?
Ans:-
    .process.nextTick() is a Node.js function used to schedule a callback to run after the current operation finishes, but before the event loop continues to the next phase.

    Use Case:
        .Delay execution until the current call stack is cleared
        .Useful for:
            .Cleanup tasks
            .Final modifications to data before continuing
            .Avoiding blocking behavior by deferring heavy logic

Q. Difference b/w process.nextTick() and setImmediate.
Ans:-
    .process.nextTick() :-
        .process.nextTick() runs before the event loop continues.
        .process.nextTick() executes before I/O operations and timers.
        .process.nextTick() is a microtask.
        .process.nextTick() has higher priority and runs sooner.

    .setImmediate() :-
        .setImmediate() runs in the check phase of the event loop.
        .setImmediate() executes after I/O events.
        .setImmediate() is a macrotask.
        .setImmediate() has lower priority and runs later.

<!-- File System,Stream and Buffer -->

.File System :-
        .The File System (fs) module in Node.js allows interaction with the file system.
            .const fs = require('fs'); // for callback-based API
            .const fsPromises = require('fs').promises; // for promise-based API

        .'utf8' ensures the content is returned as text (not buffer).
        
        .Common Use Cases:-
            .Read and write files
            .Create and delete files
            .Create and remove directories

        .Reading Files:-
            .readFile (Async, Callback-based)
            . readFileAsync (Async, Promise-based – Node.js 10+)
            .readFileSync (Sync)

        .Creating and Writing Files :-
            .writeFile (Callback-based)
            .writeFileAsync (Promise-based)
            .appendFile: Appends data to a file (creates it if not exists)

            .writeFileSync :- Overwrites or creates file, Blocks the event loop
            .appendFileSync

        .Open & Close Files:-
            .fs.open() – Open file for writing (creates if doesn't exist)
            .fs.close() – Close the file
            .fs.openSync(), fs.closeSync() – Synchronous versions

        .When opening files, you can specify modes:-

            .'w'   - Write (create or truncate)
            .'wx'  - Write (fail if exists)
            .'w+'  - Read + Write (truncate if exists)
            .'a'   - Append (create if not exists)
            .'ax'  - Append (fail if exists)
            .'r+'  - Read + Write (must exist)

        .File Management:-
            .fs.access() – Check if a file exists
            .fs.rename() – Rename or move files

        .Deleting Files
            .fs.unlink()                 – Delete a single file
            .Promise.all() + fs.unlink() – Delete multiple files
            .fs.rm()                     – Delete directories

        .For Large Data - Use Streams instead of read/write to avoid memory overload.

.Stream :-
        .Streams are objects that allow you to read or write data continuously.
        .Ideal for handling large amounts of data efficiently.
        .Data is processed in chunks, not all at once — this improves memory and time efficiency.

        .Why Use Streams?
            .Memory Efficient – No need to load everything into memory.
            .Time Efficient – Start processing as soon as data is available.

            .Without Streams:- Large files may crash the process due to memory overload
            .With Streams:-    Data is processed chunk by chunk (e.g., 64KB)
        
        .Common Use Cases
            .Reading/writing large files
            .Handling HTTP requests/responses
            .Streaming real-time data
            .Data compression/decompression
            .Working with databases

        .Types of Streams:-
            .Readable	--> Stream you can read from (e.g., file input)
            .Writable	--> Stream you can write to (e.g., file output)
            .Duplex	    --> Can both read and write (e.g., TCP sockets)
            .Transform	--> Duplex + modifies data while streaming (e.g., compression)

        .Readable Streams :- fs.createReadStream()
            .Reading from a file
            .HTTP responses (client-side)
            .HTTP requests (server-side)

        .Flowing Mode: Data flows automatically and emits events.
        .Paused Mode: You manually read chunks using stream.read().

        .Writable Streams :- fs.createWriteStream()
            .Writing to a file
            .Sending HTTP requests
            .Sending HTTP responses

        .stream.pipe()
            .The .pipe() method connects a readable stream to a writable stream.
            .It handles data flow and backpressure automatically.

            Ex:-
                const readStream = fs.createReadStream('input.txt');
                const writeStream = fs.createWriteStream('output.txt');
                readStream.pipe(writeStream);

.Buffer :-
        .A Buffer is a built-in object in Node.js used to store and handle binary data (raw memory).
        .It helps when you're working with data that is not necessarily in string format, like:
            Files, Streams, TCP packets, Images, Encryption/decryption

        .Why Do We Need Buffers?

            .JavaScript typically handles strings and objects, but sometimes you deal with binary data (like in file systems or network I/O).

            .In such cases, Node.js uses Buffer to give you direct access to memory — which is fast and efficient.

        .Key Features
            .Fixed size (defined at creation).
            .Global object – no need to import from a module.
            .Works with bytes – each element is a number between 0 and 255.

        .When to Use Buffers
            .Reading/writing binary files (images, videos)
            .Working with fs and stream modules
            .Handling TCP/UDP streams
            .Processing binary protocols
            .Encryption, compression, or encoding data

        .Creating Buffers:-
          .const buf = Buffer.alloc(10); // Creates a buffer of 10 bytes
          .const buf2 = Buffer.from('Hello'); //Creates a buffer from a string
          .const buf3 = Buffer.allocUnsafe(10); //Buffer with uninitialized memory (faster, but unsafe)


        Ex:- 
            const buf = Buffer.from('Hello');
            console.log(buf.length); //5
            console.log(buf.toString()); // Hello
            console.log(buf[0]); // 72

            // Write to buffer
            buf.write('Hi');
            console.log(buf.toString()); // Hi...


    .Buffer vs Stream in Node.js :-
        .Buffer Loads entire data into memory while Stream Processes data in chunks, as it arrives.
        .Buffer Uses more memory for large files while Stream uses less memory (processes piece by piece).
        .Buffer Slower for large files (waits to load) while Stream	Faster, starts processing immediately.
        .Buffer -> Small files or data you need all at once.	
         Stream -> Large files (videos, logs) or real-time data.

    .When to Use Buffer
        .Use Buffer when:
            .You're working with small files
            .You need the entire data before processing (e.g., converting a file into a base64 string, reading an entire config file)
            .You want random access to data (like reading a specific byte)

        .Avoid Buffer when:
            .You're working with large files (e.g., videos, logs, CSVs)
            .You're building a web server that streams files to users
            .You're doing real-time processing (e.g., live video/audio, chat apps)

        .Because loading everything into a Buffer means the app will consume too much memory and might crash or slow down.

        .Use Stream instead of Buffer when:
            .You want to read/write large files efficiently
            .You want to pipe data from one source to another (e.g., file to HTTP response)
            .You care about performance and scalability

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
    .REST (Representational State Transfer):-
        .REST is an architectural style for designing networked applications, especially web services. It defines a set of rules and constraints to create scalable and stateless services using HTTP.

    .RESTful API:
        .A RESTful API is an API that follows the REST principles. It allows clients (like frontend apps or other services) to interact with backend services using standard HTTP methods.

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

    .When starting a new React application, I follow a structured setup beyond the default boilerplate (like CRA or Vite) to ensure the project is:
            .Scalable, Maintainable, Developer-friendly, Production-ready, Team-collaboration friendly

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

Q. Child Process in nodeJs? :- Real world example :- auto update features
Ans :-
    .A child process allows Node.js to:
        .Run external scripts or system commands (like Python, shell commands).
        .Handle heavy CPU tasks without blocking the main thread.
        .Enable parallel processing using multiple Node.js processes.

    .Why Use Child Processes?
        .To offload compute-heavy work
        .To interact with external tools (e.g., Python, ffmpeg)
        .To process large data without blocking the event loop
        .To enable multi-threading-like behavior

    .Real-World Use Cases:
        .Run external programs like Python, Java, .sh, .exe
        .Process images or videos (e.g., ffmpeg)
        .Perform file compression/decompression
        .Execute CLI commands like ls, git --version
        .Large data processing or transformation
        .Worker processes for parallel execution

    .Methods in child_process Module:
        1. exec() :-
                .Runs a command in a shell
                .Buffers the entire output (not suitable for large data)
                .Best for small commands (e.g., ls, git)

        2. execFile() :-
                .Executes a file directly (without using a shell)
                .Faster and more secure than exec() (no shell injection)
                .Still buffers the output
                .Best for running known scripts or executables

                .Example: run .exe or .sh file directly

        3. spawn() :-
                .Runs a command as a new process with streaming
                .Best for large output (e.g., logs, videos)
                .Streams stdout and stderr as the data comes
            
        4. fork() :-
                .Special case of spawn() used to run another Node.js script
                .Enables inter-process communication (IPC)
                .Best for worker threads using Node.js

Q. Clustering :-
Ans :-
    .Clustering allows Node.js to run multiple instances (workers) of your app across different CPU cores, improving performance and concurrency.

    .Why Clustering?
        .Node.js runs on a single thread, using only one CPU core by default.
        .Clustering forks child processes, each handling requests independently.
        .All workers can share the same port and distribute load among cores.

    .Key Features of Clustering:
        .Multi-core Usage: Utilizes all available CPU cores for better performance.

        .Same Port Sharing: All workers listen on the same port.

        .Isolated Memory: Each worker has its own memory (no shared memory).

        .Improved Reliability: Dead workers can be automatically restarted.

        .Scalable: Works well with tools like PM2, Docker, or Nginx.

        .Better Request Handling: Handles multiple requests in parallel.

Q. Worker-threads :-
Ans :-
    .The worker_threads module enables multi-threading in Node.js, allowing you to run JavaScript code in parallel within the same process — great for CPU-heavy tasks that would otherwise block the main thread.

    .Key Features:
        .Uses threads (not separate processes like cluster)
        .Supports shared memory via SharedArrayBuffer
        .Enables parallel execution within a single Node.js process
        .Ideal for CPU-bound operations (e.g., image processing, data encryption)
    
    .When to Use What?
        .Use worker_threads when:
            .You need CPU-intensive processing (e.g., image resizing, JSON parsing).
            .You want to offload blocking tasks from the main thread.
            .You need shared memory or fast communication between threads.

        .Use cluster when:
            .You want to scale your HTTP server across multiple CPU cores.
            .You're handling many I/O-bound concurrent requests.
            .You want separate, crash-resistant processes.
            
Q. To upload file/image :-
Ans:-
    To handling image/file uploads

        .multer
        .cloudinary

            | Library      | Use Case                                      |
    | ------------ | --------------------------------------------- |
    | `formidable` | Alternative to multer, supports file parsing  |
    | `busboy`     | Lower-level library used by other middlewares |
    | `sharp`      | Resize/compress images after upload           |
    | `cloudinary` | Cloud-based image storage and optimization    |



<!-- Pending topic -->
1. Redis
2. Docker


<!-- Scenario based question -->







    

