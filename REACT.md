<!-- Online editor for reactJs -->

OneCompiler, CodeSandbox, CodePen, Repl.it, JSFiddle, and NextLeap.

.Using Vite:-
--------------

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

npx degit user/project#main my-project
cd my-project

npm install
npm run dev

--------------------------------------------------------------------------------------------------

Q. what is React ?
Ans :-  .React is an open source javaScipt library.
        .is used for building user interface(UI).
        .simplifies the creation of SPA by using reusable components.

Q.key features of React.
Ans :-  
        -> Virtual DOM :- React utilizes a virtual representation of the DOM , allowing efficient updates by minimizing direct manipulation of actual DOM , resulting in improved performance.

        -> Component based architecture :- React structures user interfaces as modular,reusable components promoting a more maintainable and scalar appraoch to building applications.

        -> Resusability and composition :- React enables the creation of reusable components that can be composed together .

        -> JSX :- JSX is the syntax extension for javaScript used in React , allowing developers to write HTML-Like code within javaScript enhancing readability and maintanability.

        -> Declarative approach :- React have a declarative programming style where developers focus on 'WHAT' the UI should look like and react handles the 'HOW' behind the scenes.This simplify the code.

        -> React Hooks :- Hooks are functions that enables functional component to manage state and lifecycle features providing a more concise and expressive way to handle component logic.

Q.What is Virtual DOM ?
Ans :-  
        Vitual DOM :- is a light weight copy of the Real DOM.

        React uses a virtual DOM to efficiently update the UI without re-renders the entire page,which helps improve performance and make the application more responsive.Minimize direct DOM manipulations (which are slow).

        Why Do We Need the Virtual DOM?

        .The Real DOM is:

            ->Complex and slow to update

            ->Expensive to re-render every time data/state changes

        .React solves this by:

            ->Keeping a virtual copy of the DOM in memory.

            ->Comparing changes in the virtual DOM.

            ->Updating only the changed parts in the real DOM.

        .How the Virtual DOM Works (Step-by-Step)

            Example:

                function App() {
                const [count, setCount] = useState(0);
                return <h1>{count}</h1>;
                }

            Here's What Happens:
            . Initial Render:

                React renders the UI using JSX.

                A virtual DOM tree is created based on the JSX.

            . State Changes (setCount(1)):

                React re-renders the component, generating a new virtual DOM.

            . Diffing Algorithm:

                React compares the new virtual DOM with the previous one.

                Finds the differences (in this case, only the number in <h1> changed).

            . Reconciliation:

                React updates only the changed parts in the real DOM (just that one <h1> element).

            . DOM Updated Efficiently:

                React avoids full re-rendering and only updates what's needed.

            .What Is "Diffing"?

                Diffing is React's algorithm to:

                    .Compare two virtual DOM trees

                    .Identify minimal set of changes

                    .Use a heuristic approach to keep it fast (not deep comparison)

            .Reconciliation
                    .The process of updating the real DOM based on changes in the virtual DOM.


Q. Difference b/w Virtaul DOM and Real DOM 
Ans :- 
        Virtual DOM	                                Real DOM

    	    In memory	                                In browser (on-screen)
        	Fast updates (diff + patch)	                Slow if updated frequently
            Used by React                               Used by Angular

Q. Difference b/w DOM and Virtual DOM.
Ans :- 
        DOM                                                       Virtaul DOM

    .is actual representation of actual page.                 .is light weight copy of the DOM.
    .Re-renders the entire page when updates occur.           .Re-renders the changed parts only
    .can be slower, especially with frequent update.          .Optimized for faster rendering.
    .Suitable for static websites and simple appln.           .Ideal for dynamic and complex SPA.

Q.What is component?
Ans:-
    .Component is a reusable building block of code for creating react application.
    .It takes props as input and return a JSX as the o/p.

    .Why Use Components?

        .Reusability – Build once, use anywhere

        .Modularity – Clean, organized code

        .Separation of concerns – Logic and UI together

        .Maintainability – Easier to test, debug, and update

    ex:- 
    
    function WelcomeCard({ name }) {
        const [likes, setLikes] = useState(0);

        useEffect(() => {
            console.log("Component rendered");
        }, []);

        return (
            <div>
            <h2>Hello, {name}!</h2>
            <button onClick={() => setLikes(likes + 1)}> {likes}</button>
            </div>
        );
    }

    Types of components :-

                . Functional component.
                . Class component.

    .Functional Component :-

                ->A functional component is just a plain javaScript pure functions that accepts props as an argument and return react element(JSX).

                ->It run from top to bottom and once the function is returned it can't be keep alive.

                ->statless components as they simply accept the data and display them.

                ->Hooks can be used in functional component to make them stateful.

                ->React life cycle cannot be used in functional component.

    .Class Component :-

                .Class components are defined using JavaScript classes.
                .They are stateful component by using the lifycycle methods.
                .The render method in a class component is responsible for returning JSX.

            .this.props can be used in child components to access properties/data passed from parent component.

            .this keyword is used to refer to the instance of the class.

Q.“In React, everything is a component.” Explain.
Ans:-
    .A component is a small, reusable piece of UI.
    .It’s like a building block of your application.

    .In React, every part of the UI (button, navbar, form, etc.) is made using components.
    .we can break the UI into multiple independent components.

Q. Why is it necessary to start component names with a capital letter?
Ans:-
    .React treats lowercase names as HTML tags (like <div>, <p>).
    .Always start your component names with a capital letter (like Header, App, MyButton, etc.).

Q. How would you prevent a component from rendering in React?
Ans:-
    .Use conditional rendering.
        .We decide when to show or hide a component 

Q. Why React uses className over class attribute?
Ans:-
    .JavaScript, class is a reserved keyword (used for creating classes).
    .Since JSX is JavaScript, using class would cause errors.
    .So, React uses className instead of class to avoid conflicts.

Q. SPA (Single Page Application).
Ans :-
    .A Single Page Application (SPA) is a web app that loads a single HTML page and dynamically updates content without reloading the page.

    .How it Works:
        .Loads only one HTML file initially (usually index.html).
        .On user actions, it updates the content using JavaScript.
        .Doesn’t reload the whole page — just updates parts of it.
        .Communicates with the server using AJAX or APIs.

    .Benefits of SPA:
        .Fast UI interactions
        .Smooth user experience
        .Faster initial load
        .Client-side routing (using React Router, etc.)

    .Challenges:
        .SEO Issues — Search engines can't easily index JavaScript-rendered content
        .Solution:-   Use SSR (Server Side Rendering) or frameworks like Next.js

Q. SPA(Single Page Application) vs MPA(Multi Page Application)
Ans :- 

  Feature	               SPA (Single Page App)	       MPA (Multi Page App)
 Page reloads	        No (uses dynamic updates via JS)	Yes (full reload per page)
 Performance	        Faster after first load	            Slower due to repeated full-page loads
 User experience	    Seamless and responsive	            Sometimes flickers or reloads
 Routing	            Handled on the client	            Handled on the server
 Initial load time	    Slightly higher	                    Usually lower


Q.Advantages of React.
Ans :- 
        .Simple to build single page applications(by using components).
        .React is a cross paltform and open source.
        .Lightweight and very fast.
        .Testing is easy.

    React is not good choice for very small applications.

Q. JSX ?
Ans:- 
        .JSX stands for javaScript XML
        .JSX is used by react to write Html-like code
        .JSX is converted to javaScript using Babel because browser understand javaScript not JSX
        .Behind the scene babel converted JSX back to React.createElement
        .It enhanced developer productivity

    Advantage:- 
                .Improve code readability.
                .Error checking in advance(Type safety)
                .Support JavaScript expressions.
                .improved performance.
                .code reusability.

Q.Difference b/w declarative and imperative appraoch
Ans:- 
        .Declarative appraoch:-  focus on describing the desired result without specifying the step-by-step process.

        .JSX in react is used to write declarative appraoch.

        Ex :- function App(){
            return <h1>Interview Happy<h1>
        }

        .Imperative Appraoch :- -Involves step by step process to achieve a particular gaol.
                                -JavaScript has an imperative appraoch.

        Ex:- function App(){
            const element = document.createElement('h1');
            element.textContent = 'Interview Happy'
            document.body.appendChild(element);
        }

Q. what is React Element?
Ans:- 
    .A React Element is a plain JavaScript object that describes what you want to see on the screen.
    .Once created, a React element cannot be changed.

Ex :-  const element = React.createElement('h1', null, 'Hello, world!');

Q. Difference b/w React Element and React Component.
Ans:- 
    
  .An react is a plain Object describing what you want to see on the screen in terms of the DOM nodes or the other components.
  .Element can contain other elements in their props.

  .whereas a component can be declared in several different ways.
  .It can be defined as class or defined as function.
  .In either case, it takes props as an input and return a jsx as the output.

Q. Babel :- 
Ans :- 

    .It is a JS compiler.
    .It's job to convert JSX code to react code.
    .Behind the scene JSX is converted back to React Element.
    .It also transpile the Es6 code to Es5 code that browser understand.

Q.Main files in react project.
Ans :-
    index.html :- Single page for react application.
    App.js     :- Main Component or container or Root component.
    index.js   :- Entry point for JavaScript. Render the main react component(App) into the root component.


Q.How React App load and display the components in browser?
Ans:- 
    1.index.html
        .A basic HTML file with a single <div id="root"></div>.
        .This is the mounting point for the entire React app.

    2.index.js
        .This is the entry point of the React application.
        .It uses ReactDOM to render the <App /> component inside the #root div of index.html.

    3.App.js
        .This is the root React component.
        .Acts as a container for all other components (child components).
        .It organizes and renders the overall layout and structure of the UI.

    4.Child Components
        .These are custom components created by us.
        .They are used inside App.js to build different parts of the UI (like Header, Footer, Sidebar, etc).

    .React takes over the empty HTML page and builds your UI by rendering components dynamically.

Q. Difference b/w React and Angular
Ans :- 

            React :-
                
                .React is a JavaScript library.
                .React uses a virtual DOM which makes it faster.
                .React is smaller in size and lightweight .
                .React depends on external libraries for many complex features .

            Angular :-

                .Angular is a complete framework following MVC/MVVM patterns.
                .Angular uses a real DOM.
                .Angular is bigger because it is a complete framework.
                .Angular is a complete framework , therefore it provide built-in support for features like routing, forms , validation and HTTP requests.

Q. What are stateful and state management terms?
Ans :- 

    Stateful and state management means,when a user performs some actions on the UI then the react application should be able to update and re-render that data or state on the UI.

Q. Props
Ans:-
        .Props(Properties) are the way to pass data from a parent component to a child component.
        .Props are read-only and cannot be modified within the component.
        .one way communication from parent to child.

Q. State
Ans :-
        The state in ReactJS is a JavaScript object that stores data specific to a component. It represents the current state of the component and can be updated over time. 

        state is local and managed within the component.

        React provides the useState() hook to manage state in function components.

Q. What are the difference b/w state and props?
Ans:-
    State is internal to a component and can be changed over time,
                                                                while props are external and passed to a component.

Q. What happens when you call setState?
Ans:-
    setState is used to update the state of a component and trigger a re-render.

Q. What are stateless components?
Ans:-
    If the behaviour of a component is independent of its state then it can be a stateless component. 

Q.What are stateful components?
Ans:-
    If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.

Q. Does React re-render all components and sub components every time setState is called?
Ans:-
    .No,
    .When you call setState(), React only re-renders the component where the state changed.
    .It also re-renders its child components — but only if necessary (based on props/state changes).
    .React uses a Virtual DOM to detect what actually changed, and updates only the parts of the UI that need to change.

Q.What are Default Props?
Ans:-
    .Default props are used to set default values for props in a component.
    .They ensure the component still works even if no value is passed from the parent.
    .Helps avoid undefined values and improves reliability.

Q. Is React a library or a Framework and why?
Ans:-
    .React is a JavaScript library, not a framework.
    .Focuses only on the "View" layer of an application (in MVC pattern).
    .Doesn't include built-in tools for:
        .Routing
        .State management
        .HTTP requests
        .Form handling
        (You need external libraries like React Router, Redux, Axios, etc.)

    .It’s declarative and helps in building interactive UIs.
    .Gives flexibility to choose your tools and structure.
    .Lightweight compared to a full-featured framework like Angular.

Q. What are nested component in react?
Ans:-
    In React, nested components refer to the idea of rendering components within other components. 

Q. What are children props
Ans :- 
        .In React, children is a special prop used to pass elements or components between the opening and closing tags of a component.

        .You can access it using props.children.

Q. What is NPM?
Ans:-
        NPM(Node Package Manager) is used to manage the dependencies for your react project, including the React library itself.

        it conain all the dependencies of the project .

Q. ReactDOM  and index.js file in react?
Ans:-
    .ReactDOM is a javaScript library that renders components to the DOM or browser.
    .It renders React components onto the web page.
    .Acts as a bridge between React (virtual DOM) and the browser’s real DOM.
    .Updates the real DOM when your component state or props change.
    .Ensures only the changed parts of the DOM are updated — improving performance.

    .index.js in React:-
        .The index.js file is the entry point of a React app.
        .It uses ReactDOM to render your main React component (usually <App />) into the root element of the index.html file.

        .It replaces the <div id="root"> in index.html with your React app.

Q. What is the role of App.js file in React?
Ans :-
    .App.js file contain the root component(App) of React application.

    .App component is like a container for the other components.

    .App.js defines the structure, layout and routing in the application.

Q. What is the role of return inside App.js?
Ans :-
    return is used to return the elements from the function.

Q. can we have a function without a return inside App.js?
Ans :-
    Yes, a function without a return statement is posssible.

    In that case , your component will not render anything in UI.

Q. What is the role of export default inside App.js?
Ans:-
    Export statement is used to make a component available or import using "import" statement in other files.

Q. What is the role of Fragement in JSX?
Ans :-
    .In React , fragement is a way to group multiple children's element.

    .Using a Fragement prevents the addition of unnecessary nodes to the DOM.

    . Using DIV -> may be impact on layout.
    . <Fragement> --> div tag ki tarah browser me rhta nhi hai , automatically gayab ho jayega.

Q. What is the difference b/w Transpiler and compiler?
Ans :-

    Transpiler :- is the tool that converts source code from one high-level programming language to another high-level programming langauage.

        Ex:- Babel.
    
    Compiler :- is the tool that converts high-level programming in to a lower-level language(machine code or bytecode).

Q. What is Prop Drilling in React?
Ans :-
    Prop drilling is the process of passing props through multiple layers of component.

    .why to avoid Prop Drilling :-

                .Prop drilling can make code harder to maintain as changes in data flow require updates across multiple components.

                .It increase code complexity and reduces code readability.

                .Debugging becomes challenging when props need to be traced through numerous components.

    .Ways to avoid props drilling :-

        .Context API
        .Redux

Q. Lifting state up :-
Ans :- Lifting state up means moving shared state from multiple child components to their closest common parent, so that parent can manage the state and pass it down via props.

        .Move the state up to a common parent
        .Let that parent control the data
        .Pass state and callbacks as props to children

    .When to Lift State :- 
            .Two or more components need to read or update the same state
            .One child needs to send data to another sibling

Q. <React.StrictMode>
Ans :-
        .React provides a special wrapper that helps you find bugs early.
        .warn about unsafe code.
        .works only in development not in production

Q. Different way to pass data from Child to Parent.
Ans :-
        .using callback function
        .Lifting up state
        .Context Api
        .Using useRef and forwardRef()
        .Using Redux and Zustand

Q. What is Shadow DOM?
Ans :-
    .The Shadow DOM is a web standard that enables encapsulation of HTML, CSS, and JavaScript in custom elements (Web Components). 

    .It allows developers to create isolated DOM trees that don't clash with the main document's styles or scripts.

<!-- Routing -->

Q. What is routing and Router in React?
Ans :-
    .Routing:-
        .Routing allows navigation between different pages or views in a Single Page Application (SPA).
        .It updates the URL and renders different components — without reloading the entire page.

    .React Router:-
        .React Router is a library that helps implement routing in React apps.
        .It lets you define routes that map URLs to specific components.
        .This makes your app feel like a multi-page site, even though it's a single-page app.

Q. How to implement Routing in React?
Ans :-
        .Install React Router
        .Import Router Components
        .Wrap App with <BrowserRouter>
        .Create Navigation (Optional)
        .Define Routes in App

Q. What is Routes and Route component in React Routing?
Ans :-
    .Routes Component:
        .Acts as a container for all your routes.
        .Wraps multiple <Route /> components.
        .Helps React Router decide which component to show based on the URL.

    .Route Component:
        .Defines a specific path (like /home, /about).
        .Loads a component when the URL matches the path.

    .Route Parameters:
        .Allow you to pass dynamic values in the URL.
        .You can access the value using useParams() hook.

Q. What is the role of Switch components in React Routing?
Ans :-
    Switch components ensures that only the first matching <Route> is rendered and rest are ignored.

    .Switch is commonly used to handle 404 or 'not found' routes.

    Ex:- <Switch>
            <Route path='/users' element={<UserList/>} />
            <Route path='/users/:id' element={<UserProfile />} />
         </Switch>

Q. What is the role of exact prop in React Routing?
Ans :-
    .exact prop is used with the <Route> component to match exactly to the provided path.

    Ex:- <Route path='/about' exact component={About} />

    .without exact default behaviour :- match /about, /about/team , /about/contact

Q.What is BrowserRouter?
Ans:-
    .It uses HTML5 history API (pushState, replaceState) to manage routing.
    .Keeps your app in sync with the URL.
    .Ideal when your server is configured to handle routing (e.g., Node.js server).

Q. What is HashRouter?
Ans :-
    .Uses the hash (#) part of the URL to manage routing (e.g., www.example.com/#/home).
    .No server setup needed – works well with static hosts like GitHub Pages.
    .Not ideal for SEO, but easy to set up.

Q. Link,NavLink,Outlets
Ans:-
    .Link :-
        .Replaces <a> tags for navigation in React.
        .Does not reload the page (SPA behavior).
        .Changes the URL and renders the component.

    .NavLink :-
        .Works like Link, but also:
        .Adds an "active" class or style when the link is active.
        .Useful for highlighting navigation menus.

    .Outlet :- 
        .Used for nested routes.
        .Renders the child route inside a parent layout component.

Q. URLSearchParams():- 
Ans:-
    .URLSearchParams() is used to read and manipulate URL query parameters.

    .Useful in React apps for routing, filters, pagination, auth tokens, etc.

Q. useParams() :-
Ans :-
    .useParams() is a React Router hook used to access URL parameters from the current route.

    .It returns an object containing key-value pairs of the dynamic parameters from the URL.

    ex:- 
        <Route path="/product/:productId" element={<ProductDetails />} />

        import { useParams } from "react-router-dom";

        const ProductDetails = () => {
        const { productId } = useParams();

        return <h2>Showing details for product ID: {productId}</h2>;
        };

Q. shimmer UI :-
Ans :-
    .We load fake page,until we get actual data from API.
    .Display a skeleton UI that matches the shape of your real content.
    .Replace it with real content once loading is complete.


<!-- Hook -->

Q. What are React Hook?
Ans:- 
    .React Hooks are inbuilt functions provided by React that allow functional components to use state and life cycle features.

    .Before Hooks, class components lifecycle methods were used to maintain state in react application.

    Ex:- useState,useEffect,useContext,useReducer,useCallback,useMemo,useRef,useLayoutEffect

Q. What is the role of useState() hook and how it works?
Ans:-
    .The useState hook enables functional components to manage state.
    
    .Working :- 
            .useState() function accept the initial state value as the parameter and returns an array with two element.

            .The first element is the current state value
            .second element is the function that is used to update the state .

    Note :- .Always try to called on the top of function(after function start) to avoid inconsistency in code.

    .never create useState variable inside if--else,for loop, fn.Due to this inconsistency will create in your program.

Q. useEffect.
Ans :-
    .The useEffect Hook in react is used to perform side effects in functional components.
    
    .Ex:- data fetching, subscriptions, or DOM manipulation  or any other operation that needs to be performed after the component has been rendered.

    .It serves the same purpose as componentDidMount,componentDidUpdate and componentWillUnMount lifecycles methods in React classes.but it unified in to a single API.

    .Every time the component is rendered useEffect will be called.


    Note :- 
            .useEffect is always called on initial renders.
            .It will accept two parameter.(Effect function,dependency array).
            .Always try to called on the top of function.

.Dependencies Array :- Dependency array acts as trigger for useEffect to rerun, meaning if any of dependencies values changes , the code inside useEffect() will be executed again.

        .Without dependency array, it will rendered everytime on component is rendered.

        .[] or [0] :- indicates that the effect function should only run once.

        .[btnNameReact] :- useEffect is called everytime, when dependency array is update.

        .Cleanup Function(like componentWillUnmount) :- Removing event listeners.

                                                        Clearing timers.

                                                        Unsubscribing from services.

Q. componentWillMount :-
Ans :-
    componentWillMount() Called just before the component mounts (before render()) – Deprecated.

Q. useLayoutEffect :-
Ans :-
    .useLayoutEffect is similar to useEffect,but it fires synchronously after all DOM mutations.


Q. useEffect vs Lifecycle Methods (class components)
Ans:- 
        Class Component	                       useEffect Equivalent
            componentDidMount	                 useEffect(() => {...}, [])
            componentDidUpdate	                 useEffect(() => {...}, [dep])
            componentWillUnmount	             Cleanup function inside useEffect 

Q.Life cycle methods.
Ans :- 
        .Lifecycle methods in ReactJS are special methods that are invoked at different stages of a component's lifecycle. They allow developers to perform specific actions at certain points, such as initializing state, updating the UI, or cleaning up resources.

        1. Mounting Phase (when the component is created and added to the DOM)

            .componentDidMount():- call after the component is mounted. Good for API calls, timers, etc.

        2. Updating Phase (when props or state changes)

            .componentDidUpdate():-Runs after the component updates(means props and state change)

            .Good for updating based on changes.
        
        3. Unmounting Phase (when the component is removed from the DOM)

            .componentWillUnmount():-Cleanup tasks like clearing timers, removing listeners


Note :- .Lifecycle methods are mostly used in class components

        .In modern React, we use Hooks (useEffect, useState, etc.) for lifecycle logic

Q. What are constructors in class components? when to use them
Ans:-
    constructor is a special method that is called when an instance of the class is created.

    Costructor is used for initializing the component's state or performing any setup that is needed before the component is rendered.

Q. What is the role of super keyword in constructor?
Ans :-  .super keyword is used in the constructor of a class component to call the constructor of the parent class.

        .This is necessary to ensure that the initialization logic of the parent class is executed.

Q. What is the role of render() method in component life cycle?
Ans :- Render() method returns the react elements that will be rendered to the DOM.

Q. How the state can be maintained in a class component?
Ans :-
    .this.setState() method is used to update the state.

    .this.state property is used to render the updated state in DOM.

Q. What is the role of useContext() hooks?
Ans:- 
    useContext in react provides a way to pass data from parent to child component without using props.

Q. What is createContext() method? what are Provider and Consumer properties?
Ans :- 
    .createContext() is a function in React used to create a context.
    .It returns an object with:
        .Provider
        .Consumer  

    .Provider:-
        .Provider is used to pass data (context value) to all child components.
        .It wraps around child components.

    .Consumer:-
        .Consumer is used to access the context value inside a child component (older way).
        .Mostly replaced now by useContext() (modern approach).
    
        Ex:-
            <MyContext.Consumer>
                {(value) => <div>{value}</div>}
            </MyContext.Consumer>

    .useContext():-
        .A React Hook used to get the context value in function components.
        .Simpler than using Consumer.

        Ex:- const value = useContext(MyContext);

Q. When to use useContext() hook instead of props in real applications?
Ans :- 
        Use useContext() instead of props when you want to avoid prop drilling and access context values directly within deeply nested component.


        use:-  .Theme Switching(Dark/Light)
               .Centralize Configuration Settings.
               .Notification System.

Q. What are controlled components in react?
Ans :- 
    A controlled component is a component whose form elements(like input fields or checkbox) are controlled by the state of the application.

    Any changes to the form data are handled through event handlers.

    This allows react to have full control over the form data making it easier to manage and validate the i/p.

Q. What are unControlled components in react?
Ans :-
        It store form data within the DOM itself rather than in the component's state.

        It can be simpler to implement for small forms.

        It donot offer the same level of control over the form data as controlled components.

Q. Characteristics of controlled components
Ans :- 
    .State control
    .Event Handling
    .State Update
    .Re-rendering

Q.How to handled forms in React?
Ans :-
    The preferred and recommended approach for handling forms in React is by using controlled components.

Q. How can you handle multiple input fields in a controlled form?
Ans :- 
    Maintain separate state variables for each input field and update them individually using the onChange event.

Q. How do you handle form validation in a controlled component?
Ans :-
    By using conditional rendering based on the state and validate input values before updating the state.

Q. Custom hook :- 
Ans :-
        .A custom hook is simply a user defined JavaScript function whose name starts with use.

        .It lets you extract reusable “hook logic” out of a component so that it can be shared across many components without repeating code.

        .Move duplicated hook logic (e.g., form handling, data fetching) into a single function.

<!-- Code Splitting -->

Q. What is code Splitting in React?
Ans :- 
    .Code Splitting means breaking your JavaScript bundle into smaller parts (chunks).
    .These parts are loaded only when needed.

    .Helps improve performance by:-
        .Loading smaller files at the start.
        .Reducing initial load time.

Q. How to implement Code Splitting in React?
Ans :-
    .Use React.lazy() to load components on demand.
    .Use Suspense to show a fallback UI (like a loader) while loading.
    .Make sure your bundler (e.g., Webpack) supports dynamic imports.

Q. Explain the concept of lazy loading in React.
Ans:-
    .Lazy loading = Load components only when needed.
    .Instead of importing all components at once, load them when the user navigates to them.
    .Use React.lazy(() => import('./Component')) to do this.

    .Benefit: Makes your app faster by avoiding unnecessary code loading.

Q. What is the role of Suspense methods in React?
Ans :-
    .Suspense is used to wrap lazy-loaded components.
    .It shows a fallback UI (like a spinner) while the component is loading.

Q. What are the pros and cons of code Splitting?
Ans :- 
    Pros :-
            .Faster Initial Load
            .Reduced Bundle Size
            .Optimized Bandwidth Usage
            .Improved Caching
            .Better User Experience
            .Parallel Loading
    Cons :-
            .Increased Code Complexity:-Requires additional setup with React.lazy() and Suspense.
            .More HTTP Requests
            .SEO Limitations (for SPAs)
            .Debugging Challenges
            .Tooling Dependency
                .Depends heavily on tools like Webpack or Vite for effective chunking.
            .Potential Runtime Errors
                .Lazy-loaded components may fail to load → need to handle fallback properly.

Q. What is the role of the import() function in code splitting?
Ans :-
    .import() is a dynamic import function that loads a module only when needed.
    .It returns a Promise, making it ideal for lazy loading components.

Q. What is the purpose of the fallback prop in suspense?
Ans:-
    .The fallback prop is used to show a loading indicator or placeholder UI while a lazy-loaded component is being fetched.
    
Q. How do you inspect and analyze the generated chunks in a React application?
Ans :-
    ..Use tools like Webpack Bundle Analyzer to:
        .Visualize the size of each chunk
        .Identify large modules
        .Optimize performance

Q. What are the 5 ways to style React components? Explain Inline Styles?
Ans :-
    .Inline Styles
    .CSS Stylesheets
    .CSS-Modules
    .Global Stylesheets
    .CSS Frameworks

Q. What are the differences b/w React and React Native?
Ans :- 

    React                                                          React Native

.React is a library.                                         .React Native is a framework.
.React is used for building web interfaces                   .React Native is used for building mobile applications.
.Run on Web browsers.                                        .Run on iOS and Andriod platforms.
.HTML and CSS are used for UI.                               .Native UI components are used for UI.
.Deployed as web applications.                               .Deployed through app stores.


Q. What are the ways to achieve state managements? When to use What in React?
Ans :-
    useState Hook :- Simple componet-level state.
                     Ideal for applications having small components and isolated state because it is Lightweight and built into React only.

    Contexct API :-  Prop drilling avoidance for sharing global data.

    Redux        :-  Large-scale applications with complex state.
                     Centralized store.

Q. What is the use of React Profiler?
Ans:- React Profiler is a set of tools in React that allows developers to profile(analyze) the performance of a React application.

    Ex:- <React.Profiler id="example" onRender={callback}>
            <!-- your code -->
         </React.Profiler>

                                    
Q. Popular testing library for React?
Ans:- 
    .Jest
    .Cypress
    .Enzyme
    .React Testing library

Q. How can you Optimize Performance in a React applications?
Ans :- 
    .Memoization with useMemo and useCallback.

    .Optimizing Renders with React.Fragment.
        
    .Lazy loading with React.lazy.

    .Code Splitting.
    
Q. How to pass data from child component to parent component in React?
Ans :-
   .Parent provides a callback function to child and then child component can then invoke this callback to pass data back to the parent.

Q. How to Know If There’s a Performance Issue
Ans:-
    .Symptoms in the UI :-

        .App feels slow or laggy

        .Delayed rendering after user interaction

        .Large bundle sizes

        .High CPU usage during re-renders

        .Scroll jank (choppy or delayed scrolling)

        .Frequent re-rendering of components without need

    .Tools & Techniques to Detect Performance Problems :-

        .React Developer Tools (Profiler Tab) :- Ideal for: Component-level performance analysis

            Use the "Profiler" tab to:

                .Record renders

                .See which components re-render

                .See how long each render takes

                .Spot unnecessary re-renders

        .Chrome DevTools (Performance Tab) :-

            .Record a timeline trace during user interaction.

            Look for:

                .Long tasks (>50ms)

                .Excessive scripting or layout time

                .Recalculating styles

                .Paint bottlenecks

            .Ideal for: Browser-level bottlenecks (not just React)

        .Use console.log to Track Renders (Basic Debugging)

        .Install why-did-you-render Package :- npm install @welldone-software/why-did-you-render

            .In development mode, it detects unnecessary re-renders.

        .Bundle Analyzer :- npm install --save-dev webpack-bundle-analyzer

            .Large bundles slow down app load and performance.

            .Use webpack-bundle-analyzer to inspect your bundle size.
    
        .Grafana is an open-source data visualization and monitoring tool, similar to Kibana.
        
            .It is used to analyze, query, and visualize metrics and logs.

            .Visualization focus -->Time-series, graphs, alerts	-->Logs, metrics, security, dashboards

            .Use Case in React or Frontend Projects

                .Grafana is not used inside React apps, but it monitors and analyzes:

                    .Performance of backend APIs

                    .CPU, memory, disk usage of your servers

                    .Response times, error rates, latency

                    .Application logs (with Loki)

                Example:-

                If your React app is deployed on a cloud server:

                    .Grafana can show how many users are hitting the app

                    .How fast the backend responds

                    .How much memory/CPU it's using


Q What is Memoization?
Ans :- 
        In programming,memoization is an optimization technique that makes applications more efficient and hence faster.
        It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing again.

Q. What is a Higher-Order Component in React?
Ans :-
    A Higher-Order Component is a component which takes another component as an argument and adds extra features to that another component and return a new component.

    Ex:- ReactMemo

Q. useMemo
Ans :-
    .The useMemo hook is used in React to optimize performance by memoizing (caching) the result of an expensive computation so that it does not re-run on every render unless necessary.

    .it is used inside the functional component to memoize the result of expensive computation.

    ex:- const result = useMemo(()=>{
            console.log('Inside useMemo')
            return (marks*100)/100
    },[marks])


Q .useCallback
Ans :-
    useCallback is a React Hook used to memoize functions, so the function reference doesn’t change unless its dependencies change.

    Syntax :-
        const memoizedCallback = useCallback(() => {
            // function body
        }, [dependencies]);

        It returns a memoized version of the function.

        The function will be re-created only when a dependency in the array changes.

    .Why use useCallback?

        In React, functions are re-created on every render, which can cause:

                .Unnecessary re-renders of child components using React.memo().

                .Performance issues in deeply nested components.

Q. useRef :-
Ans :-
    The useRef hook in React is used to:

        .Access DOM elements directly.

        .Persist values across renders without causing a re-render.

        .Store mutable data (like instance variables in a class).

    syntax :-
            const myRef = useRef(initialValue);


Q. ReactMemo :- 
Ans :-
    .React.memo is a higher-order component (HOC) that memoizes a functional component.

    .It memoize whole functional component.

    .It prevents a component from re-rendering if its props haven't changed.

    .It is used only in functional component.

    .PureComponent and shouldComponentUpdate we used in class component for memoization.

        syntax :-
                const MemoizedComponent = React.memo(Component);

                or

                export default React.memo(MyComponent);

    .Why Use React.memo?

            .By default, React re-renders a child component every time the parent renders — even if the child’s props didn’t change.

            .React.memo helps in performance optimization by avoiding unnecessary renders of functional components.

            .By default, React.memo does a shallow comparison.

Q. Pure Component
Ans:-
        PureComponent is similar to component but it skips re-renders for same props and state.

        class Greeting extends PureComponent{
            render(){
                return <h1>Hello,{this.props.name}!</h1>
            }
        } 
Q. purpose of shouldComponentUpdate method
Ans :- 
    is a lifecycle method that determines if a component should re-render.Developer can use it to optimize performance by preventing unnecessary renders.

Q. Difference b/w useMemo and react.Memo
Ans :-
        useMemo                                            React.Memo

    .Hook                                        .Higher-Order Component (HOC)
    .Memoizes the result of a function (value)   .Memoizes a whole functional component
    .Recalculating expensive values              .Re-rendering a component if props haven’t changed
    .Caching computations                        .Avoiding re-render of child components with unchanged props

Q. 

<!-- Redux -->

Q. Redux
Ans :-
    Redux is an open-source JavaScript library used for state management.

    Redux provides a centralized store that holds the entire state of an application and allow components to access and update the state in a predictable manner.

    Redux Store comes from reduxjs/toolkit package.

Q. Redux Toolkit.
Ans :- Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup and reduces boilerplate.

Q .What is the flow of data in React while using Redux?
Ans :-
    .Component (e.g., AddItem)
        .User clicks "Add to Cart" button
        .dispatch(addItemAction(payload))
        .Action -> Describes what happened 
        .Reducer -> Receives the action and Returns new updated state
        .Store   -> Holds the updated state
        .Component re-renders
            .Components that use useSelector() get the latest data from the store
            .This is called subscribing to the store

Q .What is reducer in redux.
Ans :-
    A reducer is a pure function that takes the previous state and an action as arguments and returns the new state of the application.

Q. useReducer :-
Ans :-
    .useReducer is used for complex state logic or when state depends on previous state.
    .It is an alternative to useState.
    .It uses a reducer function to update the state based on dispatched actions.

    .How it works:
        .Define a reducer function that decides how to update state.
        .Use dispatch(action) to send actions to the reducer.
        .The reducer returns the new state.

Q. Core principle of redux.
Ans :-
    .single source of truth :- All state lives in a single javaScript object(the store).

    .State is read-only     :- 
        .You can’t change state directly.
        .The only way to change state is by dispatching an action 

    .Changes are Made with Pure Functions
        .State updates are done using pure functions called reducers.
        .Reducers take the current state and an action, and return a new state

Q. Difference b/w local component state and Redux state.
Ans :-

    local component state                                           Redux state

  .Limited to the component where defined.          .Global and accessible across components.

  .Managed internally by the component.             .Managed externally by Redux Store.

  .More Performant for small scale appln.           .More performant for large scale appln.

  .Simpler to setup and manage                      .Comparatively complex to manage.

Q. What are the disadvantages while using Redux?
Ans :-
    .Too Much Boilerplate
    .Steep Learning Curve
    .Added Complexity
    .Overkill for Small Projects
    .Global State for Local Needs

Q. Provider
Ans :-
    .The Provider is a special component comes from the react-redux library.
    .It wraps your entire app and makes the Redux store available to all components inside the app.
    .This allows any component to access the store using hooks like useSelector() and useDispatch().

Q. Explain the concept of middleware in react-redux?
Ans :-
    .Middleware is like a middle layer between dispatching an action and reaching the reducer.
    .It lets you run extra code (e.g., logging, async calls) before the action hits the reducer.
    .Useful for:
        .Logging actions
        .Handling asynchronous operations (e.g., API calls)
        .Modifying or blocking actions

    .Redux itself only supports synchronous actions.
    .To handle async operations (like API calls), we use middleware like:
            .redux-thunk
            .redux-saga

        .With redux-thunk:-
            .You can dispatch a function instead of an action.
            .Inside that function, you can do things like fetch data and then dispatch real actions.

Q. useSelector :- 
Ans :- 
    .Comes from the react-redux package.
    .Used to read data from the Redux store.
    
    .How it works:
        .Allows your component to select specific state from the store.
        .Avoid selecting the entire state – only pick what you need.

Q. UseDispatch :-
Ans :-
    .Also comes from the react-redux package.
    .Used to send actions to the Redux store.

    .How it works:
        .Gives access to the dispatch() function.
        .Dispatching an action updates the state via reducer.

Q. Explain createSlice and the configuration it takes?
Ans :-
    .createSlice is a helper function from the @reduxjs/toolkit package.
    .It simplifies creating a slice of state along with its actions and reducer.

    .What is a Slice?
        .A slice is a section of the Redux store.
        .It includes:
            .initialState
            .Reducer logic
        .Automatically generated action creators

Q. How can we access redux store outside  a react component?
Ans :-
    1. Create and Export the Store
    2. Use the Store Outside React

        Ex :- import store from './store';

        const state = store.getState(); // Access current state
        console.log('User ID:', state.user.id);

        // Optional: Dispatch action
        store.dispatch({ type: 'user/logout' });

    .Use Case:-
        .Auth headers	--> Add token from Redux state to every API request
        .Preload data	--> Fetch something before the React tree loads

Q. Client-side routing 
Ans:-
    .Client-side routing is handled by the browser using JavaScript (without reloading the page).
    .Used in SPAs (Single Page Applications)
    .Libraries like React Router are commonly used.

    .Key Points:
        .Fast transitions between pages
        .No full-page reload
        .Better user experience

    .SEO can be a challenge

Q. Server-side routing
Ans:-
    .Server-side routing is handled by the server.
    .Each new URL request sends a new HTML page from the server.

    .Key Points:
        .Slower page transitions (reload on every route change)
        .Better SEO (search engines can crawl HTML pages easily)

Q. SEO(Search Engine Optimization)
Ans:-
    .SEO is the practice of improving a website to increase its visibility in search engine results (like Google).

    .Key Goals:
        .Get more organic (non-paid) traffic
        .Rank higher in search results

Q. Render props
Ans:- 
    .Render Props is a technique for sharing logic between components using a function as a child.
    .It allows one component to provide data or behavior to another via a render function.

Q. Difference b/w JSON and JavaScript object
Ans :-
    JavaScript object :- A JavaScript Object is a data structure in JavaScript used to store key-value pairs.

        Ex:- const person = {
                name: "John",
                age: 30,
                isAdmin: true,
                greet: function () {
                    console.log("Hello!");
                }
                };

        .Can contain: functions, undefined, symbols, nested objects

        .Fully usable in JavaScript runtime

        .Not meant for data exchange, just for in-memory use

    JSON :- JSON is a string-based data format used for storing and transferring data (especially between servers and web apps).

        Ex:- 
                {
                "name": "John",
                "age": 30,
                "isAdmin": true
                }

        A string representation of data

        Based on a subset of JavaScript object syntax

        Does not allow: functions, comments, undefined, or symbols

        Used with fetch, APIs, configuration files, etc.

    .Conversion Between Them

        Operation	             Method
        Object → JSON	    JSON.stringify(obj)
        JSON → Object	    JSON.parse(jsonString)

        ex:- 

            const obj = { name: "John", age: 30 };
            const json = JSON.stringify(obj); // → '{"name":"John","age":30}'

            const parsedObj = JSON.parse(json); // back to JS object

Q. React DevTools
Ans :-
    React DevTools is a browser extension that allows you to inspect the react components tree, view props and state and debug React app efficiently.

Q. What is package.json and package-lock.json?
Ans :-
    
    .package.json :-
                    We have information about generic version of installed package.


    .package-lock.json :-
                        We have information about the specific or exact version of installed package

Q. React19 features  
Ans :-
    npm install react@latest react-dom@latest (using a modern bundler like Vite or Next.js 14+ ).

    1.Actions (New Form Handling API)
        React 19 introduces actions, a new way to handle form submissions.
        It's designed to make mutations (POST/PUT) easier and more declarative, especially in server components or async rendering.

    2.useOptimistic (For Optimistic UI Updates)
        New hook for optimistically updating UI before server response.
        Makes apps feel more responsive and fast.

    3.useFormStatus (Form State Awareness)
        Lets you track the pending/submitting status of a form or button inside forms.

    4.useFormState (For Managing Form Responses)
        Lets you manage form state, such as server responses or field-level errors.
        const [state, formAction] = useFormState(handleSubmit, initialState);

    5.Improved Server Components (RSC)
        Server components are officially supported.
        Enables zero-bundle-size components that render on the server only.
        Great for SEO and performance.

    6.Async Server-Side Rendering (SSR) by Default
        React 19 supports full async rendering during server-side rendering.
        You can now use await directly inside components (when using server components).

    7.New Compiler (React Compiler - in progress)
        A new compiler is being introduced that automatically optimizes reactivity (like auto-memoization).
        Similar to how Svelte or Solid works under the hood.
        Currently experimental but expected to be a game-changer.

    8.Better Performance & Smaller Bundle Sizes
        Internals improved to reduce overhead.
        Tree-shaking friendly.
        Faster hydration and update cycles.

    9.Support for Web Standards Forms
        Full support for HTML5 form behavior.
        You can now rely more on native forms with better developer ergonomics.

    10.Transition API Improvements
        Smoother experience for handling UI transitions (e.g., loading states).
        Supports better concurrent rendering experience.

Q. Server-side rendering or service-side rendering
Ans :-
    .SSR means rendering React components on the server into HTML.
    .The browser gets fully rendered HTML, then React takes over to make the page interactive (hydration).

    .Why Use SSR:-
        .Faster first load – Page loads with content immediately.
        .SEO friendly – Search engines can crawl content easily.
        .Better performance – Reduces JavaScript workload on slower devices.

    .How SSR Works?
        .User requests a page
            .Browser sends request to server.
        .Server renders React code
            .Generates HTML from React components.
        .HTML sent to browser
            .Browser displays it immediately.
        .React hydrates the page
            .Attaches event listeners and makes it interactive.

    .Next.js – Most popular framework for SSR in React.

    .Disadvantages of SSR:
        .Increased server load – Every request needs server rendering.
        .More complexity – Handling auth, API calls, and caching becomes harder.

Q. Diiferent way to setup react project.
Ans :-
     1. Using create-react-app
     2. Using Vite – Fast & Modern Alternative (npm create vite@latest my-app)
     3. Using Next.js – Server-side Rendering & Routing Built-in

            .Best for: SEO, SSR, hybrid static/dynamic apps, production-ready apps.

                npx create-next-app my-app
                cd my-app
                npm run dev

    4. Manual Setup with webpack,parcel and Babel

Q. peventDefault().
Ans :-
    .event.preventDefault() is a method that stops the default behavior of an event from happening.
    .Forms: Prevent form from submitting and reloading the page.
    .Links: Prevent <a> tags from navigating to another page.

Q. What are event handler?
Ans :-
    .An event handler is a function that runs when a user interacts with a React component — like clicking, typing, or submitting a form.

    .How It Works:
        .React uses its own system called SyntheticEvent.
        .This wraps native browser events for better performance and cross-browser consistency.

        .onClick, onChange, onSubmit, onMouseEnter, onKeyDown, onFocus, onBlur
    
    .React wraps native events in a SyntheticEvent object.
        .Works the same across browsers
        .Provides useful methods like:
            .event.preventDefault()
            .event.stopPropagation()

        .Has useful properties like:- type, target, currentTarget

Q. stopPropagation.
Ans :-
    prevents an event from bubbling up the DOM tree.

Q. What is event object?
Ans :-
    .The event object is automatically passed to event handler functions. It contains all the details about what happened during the event (like a click or key press).

    .It Includes:
        .Type of event → (e.g., 'click', 'submit', 'keydown')
        .Target element → The DOM element that triggered the event
        .Methods:
            .preventDefault() → Stops default behavior (like form submission)
            .stopPropagation() → Prevents the event from bubbling up

Q. What is the purpose of the "render" method in ReactJS?
Ans:-
    .The render() method is used to display the UI of a React component. It returns JSX (the UI layout).

    .Returns the JSX structure (HTML-like code).
    .Called automatically when state or props change.
    .Used in class components (not in function components).

Q. What is the purpose of the "key" prop in ReactJS?
Ans:-
    .key helps React identify which items have changed, been added, or removed in a list.
    .It makes rendering more efficient by tracking elements uniquely.

Q. What is the impact of indexes as keys?
Ans:-
    .Using indexes as keys can lead to:
    .Wrong reordering of items
    .Loss of component state
    .Slower performance
    .Only use indexes if the list won't change

Q. How does React handle event handling?
Ans:-
    .React uses a system called Synthetic Events (a wrapper around browser events).
    .It gives a consistent behavior across different browsers.
    .Events like onClick, onChange, onSubmit, etc., are used in JSX.

Q. Explain the concept of "forwarding refs" in React.
Ans:-
    .Forwarding refs allows a parent to access a child’s DOM node or component methods.
    .Useful for focus control, scrolling, or measuring size.

Q. How do you clean up or release the resources associated with a ref in React?
Ans:-
    .Use the useEffect hook to return a cleanup function.
    .Helps remove event listeners, timers, or clear values when the component unmounts.

Q. How to apply validation on props in React?
Ans:-
    .use the PropTypes library.

Q. React Fiber :- 
Ans :-
    .React Fiber is the new reconciliation method in React (introduced in React 16).

    .It is a complete rewrite of the old React rendering system.

    .Built to support concurrent rendering, prioritization, and better UI responsiveness.

    .Why React Fiber?

        .To break rendering work into smaller units.

        .To pause, resume, abort, or reuse rendering tasks.

        .To handle complex UIs and animations smoothly.

        .To improve performance and user experience.


Q. How do you handle authentication and authorization in React applications?
Ans:-
    .Ways to Handle Auth in React:-
        .Using Third-Party Providers :- Auth0, Firebase Auth, Okta, AWS Cognito

        .Custom Authentication (Self-Hosted API) :-
            .Backend handles:
                .User validation
                .JWT (or session) token generation
                .Authorization roles/permissions

            .Frontend handles:
                .Login form & API call
                .Storing token in localStorage, sessionStorage, or cookies
                .Protecting routes using React Router

        .Authorization (Role-Based Access)
                .Use roles like admin, user, editor, etc.
                .Conditionally render components/pages based on roles.
        
Q. Integration testing :-
Ans :-
    Integration testing focuses on testing how different modules or components of an application work together.

Q. End-To-End testing :-
Ans :-
    E2E testing simulates real user scenarios by testing the entire application flow, from start to finish, as a user would.

--------------------------------------------------------------------------------------------------
<!-- Fetch and axios -->

Q. Axios :-
Ans:-
    .Axios is a third-party JavaScript library designed for making HTTP requests. 
    
    .It works with both Node.js and browsers. Like Fetch, Axios uses the Promise API introduced in ES6. 
    
    .Axios is known for its simplicity and extra features, such as request/response interception, error handling, and support for cancellation.

    .Uses data to send and receive content.
    .Sends JavaScript objects directly.
    .Automatically parses JSON responses.
    .Returns error only when status is not in the 200 range.

ex:- 

    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        console.log("GET response:", response.data);
    })
    .catch((error) => {
        console.error("GET error:", error);
    });

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "Axios POST Example",
        body: "This is a test post",
        userId: 1
    })
    .then((response) => {
        console.log("POST response:", response.data);
    })
    .catch((error) => {
        console.error("POST error:", error);
    });

Q. Fetch :-
Ans :-
    .The Fetch API is a built-in JavaScript feature available in modern browsers. 
    
    .It provides a simple way to make network requests using the fetch() method, which is part of the window object. This method returns a Promise that resolves with the response to the request.

    .Uses body for sending data.
    .Data must be stringified using JSON.stringify().
    .You must call .json() to parse the response.
    .Requires manual check of response.ok for errors.

    ex:- GET and POST Operation

    fetch("https://jsonplaceholder.typicode.com/posts/1")       //GET
    .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
    })
    .then((data) => {
        console.log("GET result:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {        //POST
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "React Fetch Example",
            body: "This is a test post.",
            userId: 1,
        }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then((data) => {
            console.log("POST result:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

-------------------------------------------------------------------------------------------------
<!-- Error boundary -->

Q. What are error boundaries in react?
Ans:-
    .Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    .Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

    .It introduces in React v16.


Note:-

    Error boundaries do not catch errors for:-

        .Event handlers
        .Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
        .Server side rendering
        .Errors thrown in the error boundary itself (rather than its children)

    .A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 

    .Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

    ex:- 

        class ErrorBoundary extends React.Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false };
            }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        componentDidCatch(error, errorInfo) {
            // You can also log the error to an error reporting service
            logErrorToMyService(error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
            }

            return this.props.children; 
        }
    }

    <ErrorBoundary>
        <App />
    </ErrorBoundary>

-------------------------------------------------------------------------------------------------
<!-- Webpack,Parcel -->

Q. Webpack :-
Ans :-
    Webpack is a module bundler for JavaScript applications (like React apps). It takes all your files — JS, CSS, images, fonts, etc. — and bundles them into optimized files for the browser to load efficiently.

        Features:-
            .Hot Module Replacement (HMR): Updates only the changed modules without full reload.
            .File Watching (C++ algorithm): Watches your files and rebuilds on changes.
            .Bundling: Combines many modules/files into fewer files.
            .Minification: Reduces file size for faster loading.
            .Cleaning: Removes unnecessary code from final build.
            .Dev vs Prod Builds: Different builds for development (fast) and production (optimized).
            .Fast Build Algorithm: Improves speed for better developer experience.
            .Image Optimization: Compresses images for better performance.
            .Caching: Uses smart caching to speed up rebuilds.
            .Compression: Reduces final bundle size (e.g., gzip).
            .Browser Compatibility: Supports older browsers through polyfills.
            .HTTPS Support in Dev: You can enable secure dev servers.
            .Consistent Hashing: Helps with long-term caching.
            .Zero Config: Works out-of-the-box with tools like webpack-cli.
            .Tree Shaking: Removes unused/dead code.

        .HMR:-
            .Automatically reloads parts of the app during development without refreshing the whole page.
            .Uses a file-watcher algorithm (written in C++) to track file changes in real-time.
            .Improves developer experience by preserving app state while updating modules.

        .webpack-cache:
            .Webpack creates a .cache (or internal memory) to store compiled modules.
            .On the first build, it takes more time to analyze and bundle files.
            .On subsequent builds, it reuses cached modules — making the process faster.
            .This results in better performance and faster rebuilds.

        .dist:
            Webpack outputs all final production-ready files into a dist/ directory.
            Files are minified and optimized for performance.
            Contains:
                .JavaScript bundle(s)
                .Minified CSS
                .Optimized images
                .Source maps (optional)
                .Webpack uses hashing for consistency and long-term caching (e.g., bundle.abc123.js).

                .npx webpack --mode production

        .Tree Shaking:-
                .Tree shaking removes unused code from the final bundle.
                .Helps reduce file size and improve app performance.
                .It only works in ES6 modules (import/export), not in require().

.Browserslist:-
    .Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.

    It makes our code compatible for a lot of browsers.

    In package.json file do: 

            "browserlist":[
                "last 2 versions"
            ]
-------------------------------------------------------------------------------------------------
<!-- React Query -->

Q. React Query   --> npm install @tanstack/react-query
Ans :-
    React Query is a powerful data-fetching and state management library for React that helps you:

        .Fetch,
        .Cache,
        .Synchronize, and
        .Update remote data in your UI (typically from APIs).

    .React Query simplifies and automates:-
            .Built-in hooks for fetching
            .Auto handles loading & error states
            .Automatic caching, background updates
            .Persisted across route changes

    
    .useQuery	            -->              Fetch and cache data (GET requests)
    .useMutation	        -->              Perform changes like POST, PUT, DELETE
    .QueryClient	        -->              Handles configuration, caching, retry logic
    .QueryClientProvider	-->              Wraps your app, similar to Context API
    .Query Keys	            -->              Unique identifier for each query's cache


    .Benefits of React Query :-

        .Fast and lightweight

        .Caching with stale/refresh control

        .Background refetching

        .Out-of-the-box support for paginated and infinite queries

        .Reduces boilerplate (useState, useEffect, axios repeated everywhere)

    .Use React Query when your app:-

        .Communicates with remote APIs

        .Needs efficient data fetching, caching, and updating

        .Requires features like pagination, polling, invalidation, offline support

--------------------------------------------------------------------------------------------------
<!-- RTK Query -->

Q. RTK Query
Ans :- 
    RTK Query is a powerful data fetching and caching tool that comes built-in with Redux Toolkit.

    It helps :-
            .Fetch data from APIs

            .Cache the responses

            .Automatically handle loading and error states

            .Refetch when needed

            .Minimize boilerplate

---------------------------------------------------------------------------------------------------
<!-- Project description -->

Project: E-Separation
Domain: Employee Exit Management
Role: Frontend Developer / Full-Stack Developer (Based on your actual role)
Duration: [Add your duration, e.g., July 2024 – April 2025]

Project Overview:
The E-Separation system is designed to manage the employee exit process efficiently. It streamlines workflows such as employee clearance, approvals, and documentation during offboarding.

Roles & Responsibilities:
Provided production support, performed bug fixes, and implemented new features based on client requirements.

Designed and developed multiple frontend screens including:

Employee Details Page (with address section)

Accordion Page for displaying grouped data

Employee Details – Screen 1 & Screen 2

Approver Page – Screen 1 & Screen 2

Created and integrated RESTful APIs for:

Accordion Page

Employee Details Page

Approver Details Page

Performed various levels of testing:

Unit Testing

Integration Testing

End-to-End (E2E) Testing

Utilized Postman for API testing, debugging, and validation.

Contributed to overall application stability by fixing UI and logic bugs across the application.

Collaborated with cross-functional teams to ensure smooth delivery and feature rollout.

Module :-
        .Employee information.
        .Inbox module --> here searching is available
        .Accordion Page
        .Progress page(Initiate,validation,Approval,Clearence and final settlement)--> resignation in which stage show
        .Initiator page
        .validation page(By HR)
        .Approve by approver1 page
        .Approve by approver2 page
        .Employee details page(for both screen1 and screen2) --> here all parsonal details
        .Employee rehire page(Employee can be eligible for rehire or not)
        .Notice period page --> NP detail,Notice Cost
        .Declaration page
        .Button(save,approve ,reject and withdrawal)
















        


        