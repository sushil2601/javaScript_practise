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

    Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

Q. Why is it necessary to start component names with a capital letter?
Ans:-

    In React, it is necessary to start component names with a capital letter. If we start the component name with lower case, it will throw an error as an unrecognized tag. It is because, in JSX, lower case tag names are considered as HTML tags.

Q. How would you prevent a component from rendering in React?
Ans:-
    To prevent a component from rendering in React, you can use conditional rendering. You can wrap the component's JSX code inside an if statement or a ternary operator, where you specify a condition. If the condition evaluates to true, the component will render; otherwise, it won't. 

Q. Why React uses className over class attribute?
Ans:-
    React uses className instead of class in HTML because class is a reserved keyword in JavaScript. Using class would cause conflicts with JavaScript syntax. 

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
Ans:- A React Element is a plain JavaScript object that describes what you want to see on the screen.
    -Once created, a React element cannot be changed.

Ex :-  const element = React.createElement('h1', null, 'Hello, world!');

Q. Difference b/w React Element and React Component.
Ans:- 
    
    React Element	                                        React Component
A plain JavaScript object that represents a DOM node  A function or class that returns React elements
Static description of the UI	                      Reusable logic and UI blueprint
React.createElement()               	              function MyComponent() or class MyComponent
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
    index.js   :- Entry point for JavaScript. Render the main react component(App) into the root component.


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
    No, React does not re-render all components and subcomponents every time setState is called. It only re-renders the components that are affected by the state change.

Q. How does React renderer work exactly when we call setState?
Ans:-
    When you use setState in React, it triggers a process called reconciliation. React compares the old and new state, figures out what changed, and updates only the necessary parts of the user interface. It does this by creating a virtual copy of the user interface called the virtual DOM and then efficiently applying the required changes to the actual web page. This helps React make updates quickly and keeps your app running smoothly.

Q.What are Default Props?
Ans:-
    In React, default props are used to define default values for props in a component. Default props ensure that if a parent component doesn't provide a value for a certain prop, the component will still have a default value to work with.

Q. Is React a library or a Framework and why?
Ans:-
    React is a JavaScript library for UI building, not a framework. It focuses on the view layer, offering efficient ways to create UI components and manage state. Unlike frameworks, React doesn't provide a full set of development tools, but it excels at making interactive web applications with its declarative approach and efficient UI updates.

Q. What are nested component in react?
Ans:-
    In React, nested components refer to the idea of rendering components within other components. 

Q. What are children props
Ans :- 
        In React, children props are a special type of props that enables components to receive and render other components or elements.By passing components as children.

        To access the children passed to a component, we use the props.children property within the components definition.

        It return the content placed b/w the opening and closing tags of the component.

Q. What is NPM?
Ans:-
        NPM(Node Package Manager) is used to manage the dependencies for your react project, including the React library itself.

        it conain all the dependencies of the project .

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

<!-- Routing -->

Q. What is routing and Router in React?
Ans :-
    .Routing allows you to create a single page web application with navigation without the need of a full page refresh.

    .React Router :- React Router is a popular library in React for handling routing in a web application. It allows developers to create single-page applications with multiple views or pages. React Router works by defining routes that map to different components.

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
Ans:-
    BrowserRouter is a router implementation that uses the HTML5 history API (i.e., pushState, replaceState, and pop events) to keep your UI in sync with the URL.

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
    .It gives users the impression of content structure before real content is ready.
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
        .createContext() :- createContext() function returns an object with Provider and Consumer properties.

        .The Provider properties is responsible for providing the context value to all it's child component.

        .useContext() method or Consumer property can be used to consume the context value in child component.


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

    In controlled components, form elements values are  managed by React state.

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

Q. Custom hook :- 
Ans :-
        .A custom hook is simply a user defined JavaScript function whose name starts with use.

        .It lets you extract reusable “hook logic” out of a component so that it can be shared across many components without repeating code.

        .Move duplicated hook logic (e.g., form handling, data fetching) into a single function.

<!-- Code Splitting -->

Q. What is code Splitting in React?
Ans :- 

    .Code Splitting is a technique to split in JavaScript bundle into smaller chunks, which are loaded on-demand.

    .Improve performance by reducing the initial bundle size.

Q. How to implement Code Splitting in React?
Ans :-
    1. Use React.lazy() to lazily import components.
    2. Wrap components with Suspense to handle laoding.
    3. Configure your build tool(eg. Webpack) for dynamic imports.

Q. Explain the concept of lazy loading in React.
Ans:-
    .Lazy loading in React is a technique used to optimize performance by loading components only when they are needed. Instead of loading all components at once.
    
    .We can dynamically import them using the React.lazy function and render them when required. This helps reduce the initial bundle size and improves the loading speed of your application.

Q. What is the role of Suspense methods in React?
Ans :-
    The Suspense component is used to display a fallback UI while the lazily loaded component is being fetched.

Q. What are the pros and cons of code Splitting?
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

    This helps you prevent unnecessary re-renders of child components or avoid re-creating functions on every render.

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

Q. Redux Toolkit.
Ans :- Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup and reduces boilerplate.

Q .What is the flow of data in React while using Redux?
Ans :-
    Component(click to ADD button) → dispatch(action) → reducer(fn) → new state → store updates → component re-renders

    Ex:- Suppose we add item in cart. Cart is here the store.

        AddItem component

            When we click on the 'add Item button' .It dispatches an action. Which calls the reducers function, which update the slice of our redux store and then add the item to be added to our slice.

            for reading data we use selector. It will read the data from store and 

            selector --> This phenomenal is known as subscribing to the store.

Q. What is the role of Store in React Redux?
Ans :-
    Redux store is a centralized place for holding the state of all the components in the  application.

    Redux Store comes from reduxjs/toolkit package.

Q .What is reducer in redux.
Ans :-
    A reducer is a pure function that takes the previous state and an action as arguments and returns the new state of the application.

Q. What is the role of the useReducer hook in React? How does it differ from the useState hook?
Ans:-
    The useReducer hook serves as an alternative to useState for managing complex state logic. It takes a reducer function and an initial state, returning the current state value and a dispatch function. By dispatching actions to the reducer, state updates can be controlled and organized in a more structured manner.


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

    When a user requests a different url, the server generates and sends a new HTML page for the route.

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
                    It keeping track what version of package is installed in to system.
                    In this automatically version upgraded.


    .package-lock.json :-
                        Keeps a track of exact version of package that is being installed.
                        It locks the version.
                        It doesnot have caret or tilde.

Q. React19 features  
Ans :-
    npm install react@latest react-dom@latest (using a modern bundler like Vite or Next.js 14+ ).

    1.Actions (New Form Handling API)
        React 19 introduces actions, a new way to handle form submissions.

        It's designed to make mutations (POST/PUT) easier and more declarative, especially in server components or async rendering.

        function Form() {
        async function handleSubmit(formData) {
            'use action';
            // server-safe logic
        }

        return <form action={handleSubmit}>...</form>;
        }

    2.useOptimistic (For Optimistic UI Updates)
        New hook for optimistically updating UI before server response.

        Makes apps feel more responsive and fast.

        const [optimisticTodos, addOptimisticTodo] = useOptimistic(
        todos,
        (currentTodos, newTodo) => [...currentTodos, newTodo]
        );

    3.useFormStatus (Form State Awareness)
        Lets you track the pending/submitting status of a form or button inside forms.

        const { pending } = useFormStatus();

        return <button disabled={pending}>Submit</button>;

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

        const [isPending, startTransition] = useTransition();

        startTransition(() => {
        // state updates that can be deferred
        });


Q.Conditional rendering
Ans :-
    Conditional Rendering in React means showing or hiding parts of the UI based on certain conditions (like state, props, or variables). 
    It’s similar to using if statements in regular JavaScript, but within JSX.

        ex:- function Greeting({ isLoggedIn }) {
                return (
                    <div>
                        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
                    </div>
                );
            }

            Ternary operator :- The ternary operator is a shorthand way to write an if...else condition 

            Ex:- condition ? expressionIfTrue : expressionIfFalse

Q. Server-side rendering
Ans :-
    Server-Side Rendering (SSR) means that your React components are rendered on the server (not in the browser) into HTML, which is then sent to the client. Once the HTML is loaded in the browser, React takes over and makes the page interactive.

    why use ssr :-
                    .Faster first load
                    .SEO friendly
                    .Better performance

    How SSR Works in React:-

                    .User requests a page → browser sends request to server.

                    .Server runs React code → renders the React components into HTML.

                    .HTML is sent to browser → browser displays page instantly.

                    .React hydrates → React attaches event handlers and makes the page interactive.

        .Next.js – Most Popular Framework for SSR

        Disadv :-
                .SSR increases server load, because the server must render for each request.

                .SSR adds complexity for things like authentication, API requests, and caching.


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
    event.preventDefault() is a method provided by the browser's event system. It is used to prevent the default action that belongs to the event from happening.

    .By default, a form submits and reloads the page.It stop the reloading.
    .Clicking an <a> tag navigates to another page. You can prevent it:

Q. What are event handler?
Ans :-
    An event handler in React is a function that’s called when a user interacts with a component — like clicking a button, typing in an input, submitting a form, etc.

    React wraps the browser’s native events in its own SyntheticEvent system for better performance and cross-browser compatibility.

        Event	                                                Description
        onClick	                                                Fired when an element is clicked
        onChange	                                            Fired when input value changes
        onSubmit	                                            Fired when a form is submitted
        onMouseEnter	                                        Fired when mouse enters element
        onKeyDown	                                            Fired when a key is pressed
        onFocus	                                                Fired when input gets focus
        onBlur	                                                Fired when input loses focus

    SyntheticEvent in React
        All events in React are instances of SyntheticEvent, which:

                Wrap native browser events

                Work consistently across browsers

                Include common properties: type, target, currentTarget, preventDefault(), stopPropagation()

Q. What is a Synthetic Event?
Ans:-
    In React, a SyntheticEvent is a cross-browser wrapper around the browser’s native event (like click, change, submit, etc.).

    React creates a synthetic version of the native event so it works consistently across all browsers.

Q. stopPropagation.
Ans :-
    prevents an event from bubbling up the DOM tree.

Q. What is event object?
Ans :-
    The event object is a special object that is automatically passed to event handler functions when an event occurs (like a click, key press, form submit, etc.).

    It contains information about the event, such as:

        What triggered the event

        The type of event

        Mouse/key positions

        Target element

        Methods like preventDefault() or stopPropagation()

    
Q. What is the purpose of the "render" method in ReactJS?
Ans:-
    The "render" method in ReactJS is a crucial part of a component. It is responsible for returning the JSX (JavaScript XML) code that defines the structure and content of the component's UI. The render method is called automatically whenever there is a change in the component's state or props.

Q. What is the purpose of the "key" prop in ReactJS?
Ans:-
    The "key" prop in ReactJS is used to uniquely identify elements in a list of components . It helps React efficiently update and re-render only the necessary components when the list changes.

Q. What is the significance of keys in React?
Ans :-
    Keys are used to uniquely identify and differentiate between components in React.They help react to identify which items have changed,added or removed.

Q. What is the impact of indexes as keys?
Ans:-
    .Using indexes as keys in React can cause problems. When components are rendered using indexes as keys, React may not properly update or reorder them when the order changes. 
    
    .This can result in incorrect rendering, loss of component state, and slower performance. 

Q. How does React handle event handling?
Ans:-
    React handles event handling by using synthetic events. When an event is triggered, React creates a synthetic event object and passes it to the event handler function.

Q. Explain the concept of "forwarding refs" in React.
Ans:-
    "Forwarding refs" in React allows a parent component to pass a ref to its child component. This way, the parent can access and control the child's DOM element or component. It's like giving a special power to the parent component to interact with its child component's internals.

Q. How do you clean up or release the resources associated with a ref in React?
Ans:-
    To clean up or release resources associated with a ref in React, you can leverage the useEffect hook. Within the useEffect hook, you can return a cleanup function that will be called when the component unmounts or when the ref value changes. This allows you to handle any necessary cleanup operations, such as removing event listeners or cancelling timers, ensuring that your application's resources are properly managed.

Q. How to apply validation on props in React?
Ans:-
    To apply validation on props in React, you can use the PropTypes library.

Q. What is ReactDOM package?
Ans:-
    The ReactDOM package in React is responsible for rendering the React components to the browser's DOM (Document Object Model). It provides methods and functionality for efficiently updating and manipulating the DOM based on changes in the React component tree. ReactDOM acts as the bridge between React's virtual representation of the UI and the actual HTML elements on the webpage, ensuring that any changes in the component hierarchy are reflected in the rendered UI.

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
    There are two main ways to handle authentication and authorization in React applications. One way is to use a third-party library, such as Auth0 or Firebase. These libraries provide a number of features that make it easy to implement authentication and authorization in your application, such as user management, password hashing, and session management.

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
    RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.














        


        