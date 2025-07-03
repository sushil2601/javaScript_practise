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
    .REST(Representational State Transfer) is an architectural style for designing network applications(R)