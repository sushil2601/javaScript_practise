Q. What is Node.js
Ans :-
    .is a JavaScript runtime built on chrome's v8 JavaScript Engine.

    .Node.js is a cross-platform,open-source JavaScript runtime environment that can run on windows,linux,macOS and more.

    .runs on the v8 JavaScript engine and executes JavaScript code outside a web browser.

    .has an event-driven architecture capable of asynchronous I/O or Non Blocking I/O.

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
    A middleware in Express.js is a function that handles HTTP requests, performs operations,and passes control to the next middleware.

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

         ex:- GET,POST,PUT,PATCH,DELETE,

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
    They contain JSON objects which have the information that needs to be shared b/w client and server.

    These tokens are then sent on every HTTP requests, which allows the server to authenticate the user.

    Each JWT is also signed using cryptography to ensure that the json contents cannot be altered by the client or a malicious party.

    . Structure of a JWT :-
            .HEADER     --> alogrithm(HS256) and token type(JWT)
            .PAYLOAD    --> Data
            .SIGNATURE  --> Verify Signature

            A 'Signature' section, that is the result of header and payload, concatenated and then encrypted with the private key.


    . On client-side, tokens can be stored in two different ways :
            .Stored in a cookie
            .Stored in the sessionStorage or localStorage of the browser.

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

Q. Promises

Q. Event loop

Q. What is cookie-parser in Node.js (Express)?
Ans :- 
    cookie-parser is a middleware in Express used to parse cookies from the HTTP request header and make them easily accessible in your route handlers.

    Cookies are automatically parsed and stored in req.cookies.

Q. Monolith vs Micro services
Ans :-


Q. Redis
Ans :-
    

