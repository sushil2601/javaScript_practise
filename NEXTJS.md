<!-- Core Concept -->

Q. What is nextJs?
Ans :- 
    Next.js is a React framework that helps you build fast, scalable, and production-ready web applications with features like:

        Server-side rendering (SSR)

        Static site generation (SSG)

        API routes(File-based Routing)

        Built-in routing

        SEO optimization

        Image optimization

Q. What is the difference between Next.js and React?
Ans :-
    .React :-
            .A JavaScript library for building user interfaces.
            .Created and maintained by Meta (Facebook).
            .Focuses only on the view layer.
            .Requires additional libraries for routing, data fetching, etc.
            .By default, Client-Side Rendering (CSR).
            .No built-in routing. Need to use libraries like React Router.
            .SEO challenges
            .No backend capabilities — needs a separate server/API.
            .Performance depends on developer setup and tools.

    .Next.js :-
            .A React framework built on top of React, developed by Vercel.
            .Adds extra features like server-side rendering (SSR), static site generation (SSG),Client-Side Rendering(CSR), API routes, and image optimization.
            .Comes with built-in routing and performance optimizations.
            .File-based routing — just create a file in the pages/ directory, and it becomes a route automatically.
            .SSR/SSG means HTML is sent directly from the server, improving SEO.
            .Can create backend endpoints inside the pages/api/ folder (API routes).
            .Built-in optimizations like Image Optimization, Automatic Code Splitting, and Prefetching.

Interview : -
            ."React is the core library for building UI components, but it only handles the view layer. Next.js is a React framework that adds features like server-side rendering, static site generation, file-based routing, and API endpoints — making it ideal for production-ready, SEO-friendly applications."

Q. How does SSR (Server-Side Rendering) work in Next.js?
Ans :-
    .In Server-Side Rendering (SSR), the HTML for a page is generated on the server at request time, instead of in the browser.
    .The server sends fully rendered HTML to the client, and then React hydrates it to make it interactive.

    .Work Flow :-
        .User Requests a Page
            .A browser sends an HTTP request to your Next.js server for a route (e.g., /products).

        .Next.js Executes getServerSideProps()
            .If your page exports a function named getServerSideProps, Next.js runs it on the server for every request.
            .This function can fetch data from databases, APIs, etc.

        .Data + React Components → HTML
            .The server takes the fetched data and renders the React component into HTML (using React’s server renderer).

        .Send HTML to the Client
            .The browser gets a fully rendered HTML page instantly (good for SEO & fast first paint).

        .Hydration
            .React’s JavaScript bundle runs on the client, attaching event listeners and making the page interactive.

Q. What are the different rendering strategies in Next.js?
Ans :-
    .SSR — Server-Side Rendering
            .HTML is generated on every request.
            .Use getServerSideProps().
            .Always fresh data, SEO-friendly.
            .Slower than pre-rendered pages (runs every time).
            .Use case: Live data pages (stock prices, dashboards).

    .SSG — Static Site Generation
            .HTML is generated at build time (once, during deployment).
            .Use getStaticProps().
            .Super fast, served from CDN.
            .Cons: Data becomes outdated until next build.
            .Use case: Blogs, docs, marketing pages.

    .ISR — Incremental Static Regeneration
            .Like SSG, but can update at runtime without rebuilding the whole site.
            .getStaticProps() with revalidate key.
            .Best of SSG & SSR — fast, but updates automatically.
            .Use case: E-commerce product pages, news articles.

    .CSR — Client-Side Rendering
            .HTML is generated in the browser after JavaScript loads.
            .Fetch data inside useEffect() or client components.
            .Data updates without page reload, great for highly interactive UIs.
            .Slower first load, not SEO-friendly by default.
            .Use case: Logged-in user dashboards, chat apps.

Q. How do you implement static generation with dynamic routes?
Ans :-
    .To implement static generation with dynamic routes in Next.js, create a dynamic route file like [id].js, use getStaticPaths to list all paths you want to pre-render, and use getStaticProps to fetch data for each path at build time. This gives you fast, SEO-friendly pages even for dynamic URLs."

Q. What is the purpose of getStaticProps, getServerSideProps, and getStaticPaths?
Ans :-
    .getStaticProps
        .Purpose:
            .Fetch data at build time to generate static HTML (SSG or ISR).

        .When it runs:
            .During build (next build)
            .Again at runtime if using ISR with revalidate
        
    .getServerSideProps
        .Purpose:
            .Fetch data on every request for server-side rendering (SSR).

        .When it runs:
            .On the server at request time

    .getStaticPaths
        .Purpose:
            .Define which dynamic routes should be statically generated (used with getStaticProps).
        .When it runs:
            .At build time

Q. How does Next.js optimize performance for production builds?
Ans :-
    .Automatic Code Splitting
        .Next.js splits JavaScript by page.
        .Only the code needed for the current page is loaded — smaller bundle size, faster load.

    .Pre-rendering
        .Pages are pre-rendered to HTML (via SSG or SSR) before sending to the client.
        .Improves First Contentful Paint (FCP) and SEO.

    .Image Optimization
        .The <Image> component automatically:
            .Resizes images
            .Uses modern formats (WebP, AVIF)
            .Lazy loads images offscreen

    .Static Assets on CDN
        .By default, static pages & assets are cached and served via a CDN, reducing latency.

    .Automatic Prefetching
        .Links created with <Link> prefetch page resources in the background.
        .Clicking feels instant.

    .Minification & Compression
        .Uses Terser to minify JavaScript.
        .gzip/brotli compression for smaller network payloads.

    .Incremental Static Regeneration (ISR)
        .Allows pages to be re-generated in the background without rebuilding the whole app.

    .Route-Based Caching
        .Static files get long-term caching with hash-based filenames (.next/static).

    .Automatic Polyfills Removal
        .Only loads polyfills for browsers that need them.

Q. What is the _document.js file used for in Next.js? How is it different from _app.js?
Ans :-
    ._document.js
        .Customize the entire HTML document structure (the <html> and <body> tags) that Next.js sends to the browser.

        .runs Only on the server during the initial page load.
    
    ._app.js
        .Customize the root App component that wraps all pages.
        .On every page change, both on the server (SSR) and client (CSR).

Q. What are middleware in Next.js, and how do you use them?
Ans :-
    .Middleware in Next.js lets you run code before a request is completed — between the incoming request and the response.
    .To modify the request/response, check conditions, or redirect users before rendering a page or API route.
    .Runs on the Edge Runtime (closer to the user, faster than a server).

    .use case :-
            .Authentication & access control (e.g., redirect if not logged in)
            .URL rewrites or redirects
            .Blocking requests from certain regions

    .How to Use Middleware
            .Create a file named middleware.js (or middleware.ts) in the root of your project.
            .Export a middleware function.

Q. How does routing work in Next.js? Can you explain dynamic routing?
Ans :-
    .In Next.js, routing is file-based — files in pages/ become routes automatically. Dynamic routes are created using square brackets, e.g., [id].js, which lets you handle URLs with changing segments. You can combine them with getStaticPaths and getStaticProps for pre-rendering."


 <!--Advance features  -->

 Q. Explain Incremental Static Regeneration (ISR). When would you use it?
 Ans :-
    .What is ISR?
        .ISR lets you update static pages after the build, without rebuilding the whole site.

    .How it works:
        .You pre-render pages at build time (like SSG).
        .Next.js re-generates the page in the background at a set time interval (revalidate) when a request comes in.
        .The updated page replaces the old one for future requests.

    .When to Use ISR
        .Data changes periodically, but not on every request.
        .You want fast static performance but with fresh data over time.

Q. How does image optimization work in Next.js (next/image)?
Ans :-
    .Optimizes images automatically for better performance and SEO.
    .Reduces file size, serves the right format, and uses lazy loading by default.

    .How It Works
        .When you use <Image> instead of <img>:
            .Next.js automatically resizes and compresses the image.
            .Serves modern formats (WebP, AVIF) if supported by the browser.
            .Delivers the image from the Next.js Image Optimization API.

        .Responsive Images
            .Automatically generates multiple sizes for different screen widths.
            .Serves the correct size based on the device.

        .Lazy Loading
            .Images outside the viewport load only when they are about to appear.

        .Caching
            .Optimized images are cached at the CDN level for fast repeated loads.

Q. What is the purpose of API routes in Next.js?
Ans :-
    .API routes let you create backend endpoints directly inside a Next.js project.
    .Useful for building full-stack applications without setting up a separate backend.
    .Runs server-side only — code is not sent to the browser.

    .How It Works
        .Create JavaScript/TypeScript files in the pages/api/ directory.
        .Each file exports a function that handles HTTP requests (req) and sends responses (res).
        .These routes run on the Node.js server or serverless functions (depending on deployment).

    .Benefits
        .No need for a separate Express/Node server.
        .API code stays in the same project as frontend code.
        .Automatically optimized for serverless environments.

Q. How can you handle authentication and session management in Next.js?
Ans :-
    .Using Libraries
        .NextAuth.js
            .Handles OAuth providers (Google, GitHub, Facebook, etc.).
            .Supports email/password and JWT-based auth.
            .Automatically manages sessions with cookies.

        .Auth0 / Firebase Auth
            .External services for authentication

    .Custom Implementation
        .JWT-based authentication
            .Store JWT in HTTP-only cookies (safer than localStorage).
            .Verify token on the server via API routes or middleware.

        .Session-based authentication
            .Store session data in a database (e.g., Redis, PostgreSQL).
            .Use cookies to store session ID.
        
    .Where to Handle Auth in Next.js
        .Middleware (middleware.js)
        .API Routes (pages/api/...)
        .Server-Side Rendering (getServerSideProps)
        .Client Side

Q. How do you manage environment variables in Next.js?
Ans :-
    .Avoid hardcoding sensitive information in source files.
    .Create a .env file in the root of your project.

Q. What are some common performance bottlenecks in Next.js apps, and how can you fix them?
Ans :-
    .Large JavaScript Bundles
        .Too much JS sent to the browser → slows down page load & interactivity.
        .Code-splitting: Use dynamic imports to load components only when needed.
        .Tree-shaking: Import only what you need from libraries.
        .Bundle analysis: Use next-bundle-analyzer to find big dependencies.

    .Unoptimized Images
        .Large image sizes → slow loading.
        .Use next/image for automatic resizing, WebP conversion, and lazy loading.

    .Too Much Server-Side Rendering (SSR)
        .Every page request hits the server → increases TTFB (Time to First Byte).
        .Use Static Site Generation (SSG) or Incremental Static Regeneration (ISR) where possible.
        .Limit SSR to pages that truly need real-time data.

    .Blocking Data Fetching
        .Fetching data sequentially instead of in parallel.
        .Fetch multiple APIs in parallel using Promise.all() inside getServerSideProps or API routes.

    .Rendering Large Lists
        .Huge lists rendered at once cause slow rendering.
        .Use pagination or infinite scroll.
        .Apply windowing with libraries like react-window or react-virtualized.

    .API Route Latency
        .Slow API responses delay page rendering.
        .Add caching (Redis, CDN edge caching).
        .Use ISR to cache static results.
        .Optimize database queries.

    .CSS & Style Bottlenecks
        .Large or unused CSS slows rendering.
        .Remove unused CSS with PurgeCSS (already built into Next.js with Tailwind).
        .Use CSS modules or styled-components for scoped styles.

    .Hydration Mismatch
        .Mismatch between server-rendered HTML and client JS → extra rendering cost.
        .Avoid rendering browser-only code during SSR.
        .Wrap client-only code in useEffect or disable SSR for that component.

Q. What is the difference between client-side navigation and server-side navigation in Next.js?
Ans :-
    In Next.js, server-side navigation happens when the browser requests a full page from the server, reloading everything. Client-side navigation uses Next.js routing (next/link), where only the necessary components and data are fetched, making transitions faster and preserving state.

Q. How would you implement internationalization (i18n) in Next.js?
Ans :-
    .Internationalization (i18n) means making your app support multiple languages and locales without rewriting the whole codebase.

Q. What are some strategies for securing API routes in a Next.js application?
Ans :-
    . Authentication & Authorization
        .Authentication → Verify who the user is.
        .Authorization → Check what the user can do.

    .JWT (JSON Web Token) Validation
    .Middleware for Protection
    .Rate Limiting
    .Input Validation & Sanitization
    .HTTPS Only

<!-- Practical/Scenario-Based -->

Q. How would you migrate a Create React App to Next.js?
Ans :-
    .Create a New Next.js App
    .Move src Files
        .Copy all components, styles, and utils from CRA’s src/ into Next.js’ pages/, components/, and styles/ folders.
    .Convert index.js to Next.js Page
    .Move Routes
        .In CRA: react-router-dom handles routing.
        .In Next.js: Folder-based routing, no react-router-dom needed.
    .Handle Assets
    .Update Imports
    .Add _app.js for Global Layout
    .Move API Calls
        CRA → You may have fetch in useEffect.
        Next.js → You can now use:
            .getStaticProps → Static data
            .getServerSideProps → SSR data
    .Install Dependencies

Q. How do you handle SEO in a Next.js application?
Ans :-

Q. How would you implement lazy loading in Next.js?
Ans :-
    .In Next.js, I use next/dynamic to lazy load components, which splits the bundle and loads components only when needed. For images, next/image has built-in lazy loading. I also use the Intersection Observer API for custom cases, like fetching data when an element becomes visible. This reduces initial load time and improves performance.

Q. What tools do you use to test Next.js applications?
Ans :-
    .For testing Next.js apps, I use Jest with React Testing Library for unit and integration tests, Cypress or Playwright for end-to-end testing, and Supertest for API route testing. I also use Lighthouse to check performance and SEO, and TypeScript for type safety.

Q. Explain the role of next.config.js and some common customizations.
Ans :-
    .next.config.js is the central configuration file for customizing Next.js’ default behavior.
    .It is executed on the server side during the build process (not in the browser).
    .Allows you to modify build settings, environment variables, redirects, rewrites, headers, and other optimizations without touching the core Next.js code.

.For SSR methods like getServerSideProps, I return an error in props or redirect.

.In Next.js, forms are handled like in React on the client, and submitted to API routes for server-side processing. I use both client-side validation (for instant feedback) and server-side validation (for security), often with libraries like react-hook-form and Yup.


.Disadvantage :-

        .Slow Builds for Big Sites – If you use static generation with many pages, building the site can take a long time. We can fix this with ISR, but without it, deployments are slower.

        .More Load on the Server with SSR – Server-side rendering makes fresh pages for every request, which is great for real-time data but also slows down responses and costs more to host. In one project, we solved this by adding good caching.

        .Extra Setup for Advanced Features – For things like custom image domains, redirects, or special webpack changes, we have to edit next.config.js. It’s powerful, but adds complexity.

        .No Built-in State Management – Next.js doesn’t handle app state by itself, so for complex UIs we still need tools like Redux or Zustand."

<!--                 lecture notes             -->

<!-- Pages in next by default -->

.This is top to bottom hierarchy page.In this ways they executed.

.layout.js
.template.js
.error.js
.loading.js
.not-found.js
.page.js

Q. React server component
Ans :-
    .React server component is a new architecture that was introduced by react.
    .This architecture introduce a new approach to creating React components by dividing them into two distincts types:
        .Server components
        .Client components

Q. Server components :-
Ans :-
    .By default , Next.js treats all components as server components
    .These components can perform server-side tasks like reading files or fetching data directly from a database.
    .They can't use Recat hooks or handle user interaction.

Q. Client components :-
Ans :-
    .To create a client component, you will need to add the 'use client' directive at the top of your component file.
    .Client can't perform server-side tasks like reading files,they can use hooks and handle user interaction.

Q. Routing :-
Ans :-
    .Next.js has a file-system based routing system.
    .URLs you can access in your browser are determined by how you organize your files and folders in your code.

    .Every file in app folder become a route.

    .Routing conventions:-
        .All routes must live inside the app folder
        .Route files must be named either page.js or page.tsx
        .Each folder represents a segment of the url path.

Q. Private folders
Ans :-
    .A way to tell next.js,'hey, this folder is just for internal stuff - don't include it in the routing system.'
    .The folder and all its subfolders are excluded from routing.
    .Add an underscore at the start of the folder name.

    .use :-
        .keeping your UI logic separate from routing logic
        .Having a consistent way to organize internal files in your project
        .Making it easier to group related files in your code editor
        .Avoiding potential naming conflicts with future Next.js file naming conventions.

        .use %5f in url in place of _.

Q. Route groups
Ans :-

Q. Layout
Ans :-
    .Pages are route-specific UI component.
    .A layout is UI that is shared between multiple pages in your app.

    .create layout:-
            .Default export a React component from a layout.js file
            .That component takes a children prop,which Next.js will populate with your page content.

Q. Routing metadata
Ans :-
    .The Metadata API in Next.js is a powerful feature that lets us define metadata for each page
    .Metadata ensures out content looks great when it's shared or indexed by search engines

    .Two ways to handle metadata in layout.js or page.js files
        .export a static metadata object
        .export a dynamic generatedMetadata function

    .Both layout.js and page.js can export metadata.
    .Layout metadata applies to all its pages, while page metadata is specific to that page.

    .Metadata follows a top-down order,starting from the root level
    .when metadata exits in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.

Q. Param and searchParams
Ans :-
    .params : - is a promise that resolve to an object containing the dynamic route parameters(like id)

    .searchParams : - searchParams is a promise that resolves to an object containing the query paramters(like filters and sorting)

    .while page.js has access to both params and searchParams, layout.js only has access to params.

Q. Templates
Ans :-
    .Templates are similar to layouts in that they are also UI shared between multiple pages in your app.
    .Whenever a user navigates between routes sharing a template,you get a completely fresh start

        .a new template component instance is mounted
        .DOM elements are created
        .state is cleared
        .effects are re-synchronized

    .like layouts, template need to accept a children prop to render the nested route segments
    .We can use both layout.js and template.js both in app route, and layout is rendred first and then it's children is replaced by template component output.

Q. loading 
Ans :-
    .This file help us create loading states that users see while waiting for content to load in a specific route segment
    .The loading states appear instantly when navigating,letting users know that the application is responsive and actively loading content

Q. error
Ans :-
    .It automatically wraps route segments and their nested children in a React Error Boundary
    .You can create custom error UIs for specific segments using the file-system hierarchy
    .It isolates errors to affected segments while keeping the rest of your app functional
    .It enables you to attempt to recover from an error without requiring a full page reload.

    .reset --> is used to recovered from error -> only used in client
    .To handle server side error recovery we used useRouter,startTransition

    .Handling errors in nested routes
        .Errors always bubble up to find the closest parent error boundary.
        .An error.js file handles erros not just for its own folder,but for all the nested child segments below it too
        .By strategically placing error.js files at different levels in your route foders, you can control exactly how detailed your error handling gets

    .Handling error in layouts
        .The error boundary won't catch errors thrown in layout.js within the same segment because of how the component hierarchy works.


    .Handling global errors
        .If an error boundary can't catch errors in the layout.js file from the same segment, what about errors in the root layout, it doesn't have a parent segment.
        .Next.js provides a special file called global-error,js that goes in your root app directory.

    .global error boundary only works in production mode
    .require html and body tags to be rendered.

