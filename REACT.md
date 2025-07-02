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
            <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
            </div>
        );
    }

    Types of components :-

                . Functional component.
                . Class component.

    .Functional Component :-

                ->A functional component is just a plain javaScript pure functions that accepts     props as an argument and return react element(JSX).

                ->It run from top to bottom and once the function is returned it can't be keep alive.

                ->statless components as they simply accept the data and display them.

                ->Hooks can be used in functional component to make them stateful.

                ->It uses JS function to create component.

                ->React life cycle cannot be used in functional component.

    .Class Component :-

                .Class components are defined using JavaScript classes.
                .They are stateful component by using the lifycycle methods.
                .The render method in a class component is responsible for returning JSX.

            .this.props can be used in child components to access properties/data passed from parent component.

            .this keyword is used to refer to the instance of the class.

            .have lifecycle method and render methods.

Q. SPA (Single Page Application).
Ans :-
        A Single Page Application is a web application that have only one single web page.

        A single Html page is loaded initially.

        Whenever user do some action on the website,then in response content is dynamically updated without refreshing or loading a new page.

        Uses JavaScript to dynamically update content on the page.

        Communicates with the server using AJAX / APIs.

        Example App: Blog, E-commerce, Dashboard, Admin Panel.

        Benefits :- 
                    .Fast UI interactions.
                    .Smooth user interactions.
                    .Faster initial load.
                    .Client-side routing.

        Challenges of SPAs :- 

                SEO issues :- Search engines can't index JavaScript easily → Use SSR or Next.js


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
        .Large community and Ecosystem.
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

Q. What is Babel?
Ans :-
        Babel in react is used to tranpile JSX in to javaScript which browser can understand.

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
Ans:- A React Element is a plain JavaScript object that describes what you want to see on the screen.
    -Once created, a React element cannot be changed.

Ex :-  const element = React.createElement('h1', null, 'Hello, world!');

Q. Difference b/w React Element and React Component.
Ans:- 
    
    React Element	                                        React Component
A plain JavaScript object that represents a DOM node  A function or class that returns React elements
Static description of the UI	                      Reusable logic and UI blueprint
React.createElement() or JSX (<div>)	              function MyComponent() or class MyComponent
Reusable? :-	 No	                                  Yes
State & Props	No state or lifecycle	              Can use state, props, lifecycle (with hooks or class)
Renders a DOM node	                                  Renders one or more React Elements

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
    index.js   :- Entry point for JavaScript.Render the main react component(App) into the root component.


Q.How React App load and display the components in browser?
Ans:- 
        index.html :- Single page which loads index.js by React libraries.
        index.js   :- Replace root element of index.html file by App component.
        App.js     :- Root component which is the container of all the child components.
        childComponent.js :- Custom child components placed over app component.

Q. Difference b/w React and Angular
Ans :- 

            React :-
                
                .React is a JavaScript library.
                .React uses a virtual DOM which makes it faster.
                .React is smaller in size and lightweight .
                .React depends on external libraries for many complex features .

            Angular :-

                .Angular is a complete framework.
                .Angular uses a real DOM.
                .Angular is bigger because it is a complete framework.
                .Angular is a complete framework , therefore it provide built-in support for features like routing, forms , validation and HTTP requests.

Q. What are state,stateless,stateful and state management terms?
Ans :- 

    state :- refers to the current data fo the component.

    Stateful and state management means,when a user performs some actions on the UI then the react application should be able to update nd re-render that data or state on the UI.

Q. Props
Ans:-
        .Props(Properties) are the way to pass data from a parent component to a child component.
        .Props are read-only and cannot be modified within the component.
        .one way communication from parent to child.

Q. What are children props
Ans :- 
        In React, children props are a special type of props that enables components to receive and render other components or elements.By passing components as children.

        To access the children passed to a component, we use the props.children property within the components definition.

        It return the content placed b/w the opening and closing tags of the component.

Q. What is NPM?
Ans:-
        NPM(Node Package Manager) is used to manage the dependencies for your react project, including the React library itself.

        it conain all the dependencies of the project .

Q. What is public folder
Ans:-
    It contain static assets that are erved directly to the user's browser, such as images,fontsand the index.html file.

Q. What is src folder
Ans:-
    src folder is used to store all the source code of the application which is the responsible for the dynamic changes in your web application.

Q. What is the role of index.html page in react?
Ans:-
    index.html file is the main HTML file(SPA) in react application.

    here the div with id="root" will be replaced by the component inside index.js file.

Q. ReactDOM  and index.js file in react?
Ans:-
    ReactDOM is a javaScript library that renders components to the DOM or browser.

    index.js file is the JavaScript file that replaces the root element of the index.html file with the newly rendered component with the help of ReactDOM.

Q. What is the role of App.js file in React?
Ans :-
    .App.js file contain the root component(App) of React application.

    .App component is like a container for the other components.

    .App.js defines the structure, layout and routing in the application.

Q. What is the role of return inside App.js?
Ans :-
    return is used to return the elements rom the function.

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



<!-- Routing -->

Q. What is routing and Router in React?
Ans :-
    .Routing allows you to create a single page web application with navigation without the need for a full page refresh.

    .React Router :- React Router is a library for handling routing and enables navigation and rendering of different components based on the URL.

Q. How to implement Routing in React?
Ans :-
        . install React Router packages (npm install react-router-dom)
        . Create Navigation.
        . Create Routes.

Q. What is Routes and Route component in React Routing?
Ans :-
        Routes :- is used as the root container for declaring your collection of routes.

        Route :-  is used to define a route and specify the component that should render when the route matches.

        Route Parameter :- Route parameters in React Router are a way to pass dynamic values(data) to the component as part of the URL path.

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

Q. What is BrowserRouter?
Ans:-BrowserRouter is a router implementation that uses the HTML5 history API (i.e., pushState, replaceState, and pop events) to keep your UI in sync with the URL.

It's part of the react-router-dom package and is required to use routing features in a React SPA (Single Page Application).

    What Does BrowserRouter Do?
        .Listens to changes in the browser’s address bar

        .Keeps React components in sync with the current URL

        .Enables client-side navigation — no full page reloads

Q. What is HashRouter?
Ans :-
    .HashRouter is a router in React Router that uses the hash (#) portion of the URL to simulate different paths without needing server configuration.

    .It’s useful when your web server can’t handle dynamic requests (like GitHub Pages).

Q. Link,NavLink,Outlets
Ans:-
    .Link :- Used to navigate between routes without reloading the page (client-side routing).

            Replaces <a href="..."> (but prevents full-page reloads)

            Maintains app state (SPA behavior)

            Changes the URL and triggers route rendering

    .Don’t use this:

        .<a href="/about">About</a> --> causes full-page reload

    .NavLink :- .Just like Link, but with extra functionality
                .It automatically adds an active class or style when the link matches the current URL.

    .Outlet :-  .Used to render nested child routes inside a parent route layout.


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
    
    .Ex:- data fetching from API, subscriptions or any other operation that needs to be performed after the component has been rendered.

    .It serves the same purpose as componentDidMount,componentDidUpdate and componentWillUnMount lifecycles methods in React classes.but it unified in to a single API.

    .Every time the component is rendered useEffect will be called.


    Note :- .useEffect() is called after the component renders.Ex:-side effects.
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


Q. useEffect vs Lifecycle Methods (class components)
Ans:- 
        Class Component	                       useEffect Equivalent
            componentDidMount	                 useEffect(() => {...}, [])
            componentDidUpdate	                 useEffect(() => {...}, [dep])
            componentWillUnmount	             Cleanup function inside useEffect 

Q.Life cycle methods.
Ans :- 
        .Lifecycle methods are special methods in class components that are automatically called at specific points during a component’s life cycle — from creation, updating, to unmounting.

        .componentWillMount():-   When the component is created and inserted into the DOM.

        Note :- Jitne method isme honge wo component ke render hone se phle dom me aa jate hai.


        .componentWillUpdate():-  When the component re-renders due to props/state changes.
        .componentWillUnmount():- This runs once, just before the component is removed from the DOM.

                                    Ex:- Cleanup (e.g., remove event listeners, clear timers).


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

Q. What is the role of componentDidMount() methods in component life cycle?
Ans :-
    .Rendered after constructor initialization

    .Render after componentDidMount() to run side effects and then call render() method of updating phase again.

    .componentDidMount() lifecycle methods in react is the part of mounting phase nd it is called after a component has been rendered to the DOM.

Q. What is the role of useContext() hooks?
Ans:- 
    useContext in react provides a way to pass data from parent to child component without using props.

Q. What is createContext() method? what are Provider and Consumer properties?
Ans :- 
        .createContext() :- createContext() function returns an object with Provider and Consumer properties.

        .The Provider properties is responsible for providing the context value to all it's child component.

        .useContext() method or Consumer property can be used to consume the context value in child component.


Ex:- 
    import {createContext} from 'react'

    const MyContext = createContext();

    const Parent = () =>{
    const contextValue = "Hello how r u?"

    return {
        <MyContext.Provider value={contextValue}>
            <Child></Child>
        <MyContext.Provider>
    }
}

const Child = () =>{
    const contextValue = useContext(MyContext)
    return <p>{contextValue}</p>

    or 

    return {
        <MyContext.Consumer>
            {(contextValue) => <div>{contextValue}</div>}
        </MyContext.Consumer>
    }
}

Q. When to use useContext() hook instead of props in real applications?
Ans :- 
        Use useContext() instead of props when you want to avoid prop drilling and access context values directly within deeply nested component.


        use:-  .Theme Switching(Dark/Light)
               .Localization.
               .Centralize Configuration Settings.
               .User Performance.
               .Notification System.

Q. What are controlled components in react?
Ans :- 
    A controlled component is a component whose form elements(like input fields or checkbox) are controlled by the state of the application.

    Any changes to the form data are handled through event handlers.

    This allows react to have full control over the form data making it easier to manage and validate the i/p.

    In controlled components, form elements have their values managed by React state, ensuring a single source of truth.

    It offer better control and maintainability compared to uncontrolled components, making them the best practice for handling forms in React applications.


Q. What are unControlled components in react?
Ans :-
        It store form data within the DOM itself rather than in the component's state.

        It can be simpler to implement for small forms.

        It donot offer the same level of control over the form data as controlled components.

Q. What are the differences b/w Controlled and Uncontrolled Components?
Ans :-

    Controlled                                                  Uncontrolled

.Values are controlled by React state.           .Values are not controlled by React state.
.Event handlers update React state.              .No explicit state update,values can be accessed directly from the DOM.
.Don't depend on useRef().                       .Commonly uses useRef() to access form element values.
.Re-renders on state change.                     .less re-rendering since values are not directly tied to React state.
.A recommended nd standard practice for form handling in React.   Useful in certain scenarios but less commonly considered a best practice.


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

<!-- Code Splitting -->

Q. What is code Splitting in React?
Ans :- Code Splitting is a technique to split in JavaScript bundle into smaller chunks, which are loaded on-demand.

Q. How to implement Code Splitting in React?
Ans :-
    1. Use React.lazy() to lazily import components.
    2. Wrap components with Suspense to handle laoding.
    3. Configure your build tool(eg. Webpack) for dynamic imports.

Q. What is the role of Lazy and Suspense methods in React?
Ans :-
    React.lazy is a function that allows you to laod a component lazily

    It enables code splitting by allowing you to import a component asynchronously/dynamically ,meaning component is loaded only when needed only.

    The Suspense component is used to display a fallback UI while the lazily loaded component is being fetched.

Q. What are the prons and cons of code Splitting?
Ans :- 
    Pros :-
            .Faster Initial Load Time.
            .Optimized Bandwidth Usage.
            .Improved Caching.
            .Parallel Loading.
            .Easier Maintenance.
    
    Cons :-
            .Complexity
            .Tooling dependencies
            .Potential for runtime Errors.
            .Increased Number of Requests.
            .Learning Curve.

Q. What is the role of the import() function in code splitting?
Ans :-
    The import() function returns a promise that allow dynamic loading of modules.

Q. What is the purpose of the fallback prop in suspense?
Ans:-
    The fallback prop provides a loading indicator or UI while the dynamically imported component is being loaded.

Q. Can you dynamically load CSS files using code splitting in React?
Ans:-
    Yes, using dynamic import() for CSS files allows you to load styles on-demand along with the corresponding components.

Q. How do you inspect and analyze the generated chunks in a React application?
Ans :-
    Use tools like Webpack Bundle Analyzer to analyze the size and composition of chunks.

Q. What is aHigher-Order Component in React?
Ans :-
    A Higher-Order Component is a component which takes another component as an argument and adds extra features to that another component.

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

Q. What is GraphQL?
Ans:-
    GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.

    GraphQL and React are often used together.React components can use GraphQL queries to fetch the data required for rendering.

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

Q. Difference b/w fetch and axios in react for api calls in React?
Ans :-

      Fetch                                                              Axios
    .Fetch is built-in JavaScript function,                .Axios is a third-party libraries,that
    so it doesn't require any additional libraries.   simplifies the process of making HTTP request.

    .fetch returns promises, making it easy to work        .Axios allows you to use interceptors,
    with asynchrounous code using async/await syntax.    which can be good for tasks like request/
                                                        response logging,authentication and error
                                                        handling.

    .if you want to keep http requests simple,             .If you want to intercept http request/
    fetch is a good choice.                             response,or improve error handling then 
                                                        axios has more function to do it.

                                    
Q. Popular testing library for React?
Ans:- 
    .Jest
    .Cypress
    .Enzyme
    .React Testing library

Q. How can you Optimize Performance in a React applications?
Ans :- 
    .Memoization with useMemo and useCallback.
        --> use this hook to memoize values and , reducing unneccessary recalculations.

    .Optimizing Renders with React.Fragment.
        --> use it avoid unneccessary wrapper elements that could cause additional DOM nodes.

    .Lazy loading with React.lazy.
        --> use it to load components lazily,reducing the initial bundle size and improving initial loading performance.

    .Code Splitting.
        --> Using code splitting to divide your application into smaller chunks that are loaded on demand,improving initial load times.
    
Q. How to pass data from child component to parent component in React?
Ans :-
    Parent provides a callback function to child and then child component can then invoke this callback to pass data back to the parent.



Q. useMemo

Q . useCallback

Q. useRef

Q. ReactMemo


<!-- Redux -->

Q. Redux
Ans :-
    Redux is an open-source JavaScript library used for state management.

    Redux provides a centralized store that holds the entire state an application and allow components to access and update the state in a predictable manner.

Q. Redux Toolkit.
Ans :- Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup and reduces boilerplate.

Q .What is the flow of data in React while using Redux?
Ans :-
    Component → dispatch(action) → reducer → new state → store updates → component re-renders

Q. What is the role of Store in React Redux?
Ans :-
    Redux store is a centralized place for holding the state of all the components in the  application.

    Redux store enables the application to update store using the defined reducer.

    Redux Store comes from reduxjs/toolkit package.

Q .What is reducer in redux.
Ans :-
    A reducer is a pure function that takes the previous state and an action as arguments and returns the new state of the application.

Q. Core principle of redux.
Ans :-
    .single source of truth :- All state lives in a single javaScript object(the store).

    .State is read-only     :- You can't change the state directly --> only via dispatching actions.

    .changes via pure functions :- you use reducers to return new state based on actions.

Q. Difference b/w local component state and Redux state.
Ans :-

    local component state                                           Redux state

  .Limited to the component where defined.          .Global and accessible across components.

  .Managed internally by the component.             .Managed externally by Redux Store.

  .More Performant for small scale appln.           .More performant for large scale appln.

  .Simpler to setup and manage                      .Comparatively complex to manage.

Q. What are the disadvantages while using Redux?
Ans :-
    .Biolerplate code
    .Learning curve
    .Complexity
    .Overhead for small projects
    .Global state for local components.

Q. Provider
Ans :-
    Provider component of react-redux will make the Redux store available to all connected components.

    comes from react-redux package.

Q. Explain the concept of middleware in react-redux?
Ans :-
    Middleware provides a mechanism to add extra functionality to the redux store.

    Middleware can intercept actions , modify them, or execute additional logic in actions before they reach to the reducers.

Q. useSelector :-  comes form react-redux package
Ans :- 
        Read data from the Redux store.

        It allows your component to select a specific piece of state from the Redux store.

           Ex:- const data = useSelector((state) => state.someSlice.someValue);

        Only select what you need – avoid selecting the entire state.

        Memoize complex selectors if performance is critical.

        Combine with React.memo() or useMemo() if needed.

Q. UseDispatch :- comes form react-redux
Ans :-
        Send actions to the Redux store.

        Actions is a plain JS object that describes what should change in the applications state.

        It gives you access to the dispatch() function from Redux, which allows you to send actions to the store to change the state.

            Ex:- const dispatch = useDispatch();
                 dispatch(action);

Q. Slice  --> comes from reduxjs/toolkit package
Ans :- 
    In Redux Toolkit , a slice is a collection of redux related code, including reducer logic and actions, that corresponds a specific piece of the application state.

    Slice are created using the createSlice utility function provided by Redux Toolkit.

Q. Asynchronous action in redux.
Ans :-
    Redux supports asynchronous actions using middleware like redux-thunk or redux-saga.
    
    The dispatch function allows you to handle asynchronous operations by dispatching actions inside function and handling those actions asynchronously.


Q. Explain createSlice and the configuration it takes?
Ans :-
    
    .createSlice is a utility function provided by redux toolkit that simplifies the process of creating Redux Slices.

    .A redux slice is a piece of the Redux store that includes a set of actions, a reducer and an initial state.

    .It helps reduce boilerplate code associated with defining actions and the reducers for a specific slice of your Redux store.


Q. Client-side routing 
Ans:-
    Client-side routing and navigation are managed on the client-side typically within web browser.

    JavaScript framework and libraries such as Router are commonly used to implement client-side routing.

    .fatser transition.
    .SPA
    .SEO challenges

Q. Server-side routing
Ans:-
    Server-side routing manages routing and navigation on the server.

    When a user requests a different url, the server generates and sends a new HTML page for the toute.

    .Slower transition
    .SEO friendly

Q. SEO(Search Engine Optimization)
Ans:-


Q. Render props
Ans:- 

Q. Cross origin 
Ans:-
    The cross origin attributes in the script tag enables cross origin resources sharing for loading external JS files from different origin than hosting web page.

    Ex:- .Making HTTP requests
         .Accessing data










        


        