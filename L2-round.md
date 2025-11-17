## Q. What happens if you update state during rendering in react ?

Ans :-

    .It cause an infinite loop. State updates triggers re-renders, and if done during render(not in event handlers or effects), the re-renders triggers again immediately.

## Q. can you explain how useEffect cleanup works in React

Ans :-

    .Ther return function inside useEffect is a cleanup function.

    .It runs before the component unmount or before re-running the effect due to dependency change.

    .Ex:-  usseEffect(()=>{
                let timer = setTimeout(...);
                return () => clearTimeout(time);//cleanup
            },[])

## Q. Difference b/w useRef and useState

Ans :-

    .useRef doesnot cause re-render when updates. is ideal for storing mutable values.
    .useState does trigger re-render

## Q. what's the react rendering behaviour when setState is called multiple times

Ans :-

    .React batches state update, if multiple setState calls are made synchronously, react will group them and update once.

## Q. Why does key prop matter in a list rendering?

Ans :-

    .It helps recat identify which items have changed/added/removed.

    .Incorrect key usage causes performance issues and UI bug.

## Q. can a functional component have lifecycle method?

Ans :-

    .Not directly, but with useEffect

    1. Mount   = useEffect(()=>{},[])
    2. Update  = useEffect(()=>{}.[dep])
    3. umMount = useEffect(()=>{ return()=> cleanup})

## Q. Context :- 

Ans :-

    .provides values globally without prop chain.
    .used for theme, auth, etc.

## Q. Why does react re-render even if props doesn't changes ?

Ans :-

    .Due to reference inequality(especially for object/functions)
    .React sees a new prop value even if it's content is the same

    .use useMemo,useCallback to prevent this.

## Q. const with primitive and non-primitive

Ans :-

    .const with primitive     :- cannot be reassigned

    .const with non-primitive :- we cannot reassign the reference but we can modify the internal content. It locks the reference address, not the internal data

## Q. get output 1,2 without let

Ans :- 

    .Problem :-

            for(var i=1;i<=2;i++){
                setTimeout(()=>{
                    alert(i)
                },100)
            }

    .solution :-

            for(var i=1;i<=2;i++){
                print(i)
            }

            funnction print(i){
                setTimeout(()=>{
                    console.log(i)
                },100)
            }

## Q. prototype and how it works

Ans :-

    .For inheritence purpose we use in javaScript

    .

## Q. get the second last element from the array let arr = ['a','b','c','d','e','f']

Ans :-

    let arr = ['a','b','c','d','e','f']

    console.log(arr[arr.length-2])

## Q.  Interceptors

Ans :-

    .Axios interceptors allow you to run logic before requests and responses, helping manage authentication, errors, and common API behaviors in React.

## Q. how to manage nested routes in terms of role based routing

Ans :-


## Q. How to do form validation in react?

Ans :-

    .Manual validation using useState
    .Using Form Libraries like Formik + Yup (most common in interviews)
    .Using React Hook Form (best for performance)

## Q. Batches in react

Ans :-

    .Batching means React groups multiple state updates and performs only one re-render for performance optimization.

    .If React re-rendered the component after every state update, it would be slow.

    .So React batches updates → 1 render.

    .Before React 18, batching only worked inside event handlers.

    .Since React 18, batching happens:-

            .inside event handlers
            .inside async callbacks
            .inside promises
            .inside setTimeout
            .inside API calls

    Ex:- setCount(count + 1);
         setName("Sushil");     //React batches these → only one re-render

## Q. Different type of popup we used in javaScript

Ans :-

    .alert()
    .confirm()
    .prompt()

## Q. how do you handle tight deadline

Ans :-

    .I handle tight deadlines by breaking the work into smaller tasks, prioritizing the most important parts first, and maintaining clear communication with my team. 

    .I focus on delivering the core requirements first, avoid distractions, and use quick checkpoints to ensure I’m on track. If any risk arises, I communicate early so that we can adjust before it's too late.

## Q. How do you handle work pressure?

Ans :-

    .Plan the tasks properly
    .prioritizing the task and based on that work to finish work with given deadline


## Q. Strength and weakness

Ans :-

    .Strength :- I manage my time well. I prioritize tasks based on impact and dependencies, so even under tight deadlines, I deliver without compromising quality

    .waekness :- I’m not naturally strong at presenting in front of large groups.

                 But I’m improving by taking ownership of small demos and sprint reviews

## Q. package-lock.json and package.json

Ans :-

    .package-lock.json :- 
                        .Stores the exact versions of all dependencies AND sub-dependencies.
                        .and it can be generated again if we delete this file using npm i.

        .When do you UPDATE the lock file? :- 1.npm update, 2.install a new package

    .package.json      :-
                        .It keep tracks what version of package is installed.
                        .Automatically version upgraded here
                        .cannot recover if we delete this file 

## Q. Difference b/w tilde and caret

Ans :-

    .tilde :- 
            .Update only patch versions, not minor or major.
            .Only bug fixes

            Ex :- "axios": "~1.3.0"

                   .This will allow updates to:- 1.3.1 , 1.3.2 ,  1.3.9 , But NOT:- 1.4.0 (minor) , 2.0.0 (major)

    .caret :- 
            .Update to the latest minor & patch versions, but NOT major versions.

            .This will allow updates to:- . 18.2.1 (patch) , 18.3.0 (minor) , 18.4.9 (minor … anything until 18.x.x)
                                          . But NOT:- 19.0.0 (major change — NOT allowed)

    
## Q. X.X.X -> 18.4.9

Ans :-

    .18 :- MAJOR  -->   Big changes, breaking changes, not backward compatible.

                Ex :- React 17 → React 18 (new rendering features) 
                      Old code may stop working if you upgrade without changes

    .4  :- MINOR  -->   New features added but backward-compatible.

                Ex :- Add new function , Add optional parameter , Add new component

    .9  :- PATCH  -->   Bug fixes, small improvements, no new features.

                Ex :- Only bug fixes like Fixing a crash, Fixing a typo, Fixing performance issue

    
## Q. How does a React application work?

Ans :-

    .A React application works by mounting a root component into index.html.

    .React converts components into a Virtual DOM, and on every state or prop change, it generates a new Virtual DOM.

    .Then React uses its diffing algorithm to compare the old and new Virtual DOM and updates only the changed parts of the real DOM.

    .React Fiber optimizes rendering using priority-based scheduling.

    .With hooks, lifecycle events run through useEffect.

    .Finally, React works as a single-page application, where routing is client-side and no full page reload happens.

## Q. How to handle rest api calls in react? write a simple code for api calls(post,get,options,delete,update)

Ans :-

    .handle REST API calls in React using fetch and axios.


## Q. What is the one point, which makes the customer to choose react.js rather than other front-end tool?

Ans :-

    .The primary reason businesses choose React.js is its exceptional performance due to the Virtual DOM.

    .Unlike other frameworks that directly manipulate the real DOM—which is slow—React works on a lightweight virtual representation.

    .Whenever data changes, React intelligently compares the old and new virtual DOM, and updates only the affected parts of the real UI.

    .This results in faster rendering, smoother interaction, improved user satisfaction, and lower development costs because React apps scale easily and remain maintainable even as the project grows

## Q. Why React over Angular?

Ans :-

    .React is often chosen over Angular because it is lightweight, fast, flexible, and easy to integrate.

    .Angular is a full-fledged framework with many built-in features, but this also makes it heavier, more complex, and harder to learn.

    .React, being a library, focuses purely on the UI and uses the Virtual DOM, which makes rendering extremely efficient.

    .Developers can choose their own routing, state management, and utilities, creating a more customized and faster development workflow.

    .The learning curve of React is much smoother compared to Angular’s TypeScript-heavy, opinionated structure.

    .This results in faster onboarding, quicker development cycles, and lower project costs—making React the preferred choice for many companies.

## Q. When Angular is a better choice than React?

Ans :-

    .When You Need a Full-Fledged Framework (Not Just a Library)
            .Built-in routing
            .Form handling
            .HTTP client

    .Large, Complex Enterprise Applications
            .Banks
            .Insurance companies
            .Healthcare
            .Government

    .Angular is written in TypeScript at its core

    .Applications Requiring Higher Security

    .Following a Strict Architecture Is Important

## Q. why we always write our code inside return?

Ans :-

    .We write UI code inside return() because a React component must return JSX, which represents the structure of the UI. All business logic stays outside the return, and the return function defines what should appear on the screen. JSX is transformed into React elements, so without returning JSX, React cannot render the component.

## Q. React starter code

Ans :-

    .my-app/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
│
├── public/
│
├── package.json
├── vite.config.js  (if using Vite)
└── README.md

## Q. What does figure and nav tag?

Ans :-

    .figure :- 

            .Used for: - Images , Diagrams, Illustrations, Charts, Code snippets

    .nav    :- Navigation section --> Header menu , Sidebar menu, Footer menu


## Q.1 <button onClick={() => handleIncrement()}>Increment</button> 

Ans :-

    .If you need to pass arguments
    .If you need to do multiple things inside onClick

    Ex:- 
    function App() {
        const handleClick = (a, b) => {
            console.log("Sum =", a + b);
        };

        return (
            <button onClick={() => handleClick(10, 20)}>
                Add
            </button>
        );
    }

    <button
        onClick={() => {
            funcOne();
            funcTwo();
            funcThree();
        }}
    >
        Click Me
    </button>

## Q.2 <button onClick={handleIncrement}>Increment</button>

Ans :-

    .When the function does NOT need arguments
    .More efficient (does not recreate functions every render)



