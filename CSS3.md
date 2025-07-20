Q.What is CSS?
Ans:-
    .CSS stands for Cascading Style Sheets. 
    .used to define styles for web pages, including the design, layout and variations in display for different devices and screen sizes.

Q. What are the possible ways to apply CSS styles to a web page?
Ans:-   
    There are 3 ways to apply CSS styles to a web page. They are:

    Inline CSS
    Internal CSS
    External CSS

Q. What are some new features in CSS3?
Ans:-
    Some new features of CSS3 are:

    New selectors.
    Pseudo-classes
    Rounded Corners(Border-radius)
    Text shadow
    Gradient, etc

Q. What are the css selectors?
Ans:-
    CSS selector is a part of css rule which is used to apply styles to a target specific HTML element or group of elements.

Q. What is universal selector in css?
Ans:-
    The universal selector is a css selector that can be used to apply styles to all elements on a page or to reset styles for all elements to their default values

Q. Explain the difference between classes and IDs in CSS.
Ans:-
    Classes are used to group together elements with similar styles, while IDs are used to target specific elements on a page. IDs must be unique, while classes can be used multiple times on a page.

Q. Explain box model in CSS.
Ans:-
    The box model in CSS is a way of representing elements as boxes with content, padding, borders, and margins. The content area is the actual content of the element, the padding is the space between the content and the border, the border is a line around the element, and the margin is the space between the border and the surrounding elements.

Q. What is the difference between margin and padding in CSS?
Ans:-
    Margin is the space between the border of an element and the surrounding elements, while padding is the space between the content of an element and its border.

Q. Explain the CSS display property and its values.
Ans:-
    The CSS display property controls how an element is displayed on a page. The possible values are block, inline, inline-block, none, and others.

Q. What is the CSS position property and its values?
Ans:-
    The CSS position property controls how an element is positioned on a page. The possible values are static, relative, absolute, fixed, and sticky

Q. What is the difference between absolute and relative positioning in CSS?
Ans:-
    Relative positioning moves an element relative to its current position without affecting the position of other elements, while absolute positioning positions an element relative to its closest parent element, potentially affecting the position of other elements.

Q. Explain the CSS float property and its values.
Ans:-
    The CSS float property controls the alignment of an element in a page layout. The possible values include left, right, none, and inherit. When an element is floated left or right, other elements will flow around it.

Q. What is the CSS clear property?
Ans:-
    The CSS clear property controls whether an element is allowed to float next to another element or not. The possible values include left, right, both, and none. When an element is cleared, it will be moved below any floated elements.

Q. What is the CSS z-index property?
Ans:-
    The CSS z-index property controls the stacking order of elements on a page. Elements with a higher z-index value are displayed on top of elements with a lower z-index value. The default value of z-index is auto.

Q. What are CSS pseudo-classes? Give some examples.
Ans:-
    CSS pseudo-classes are selectors that target elements based on their state or position in the document. Some examples include :hover, :active, :focus, :first-child, :last-child, and :nth-child.

Q. What is CSS animation?
Ans:-
    CSS animation is a way to add movement and dynamism to the HTML element on a web pages using CSS. It is used to enhance users experience.

Q. How do you define a CSS animation?
Ans:-
    We can define CSS animation by creating a set of keyframes that specify the start and end states of an animation. We can apply the animation to an element using the animation property in css.

Q. How do you trigger a CSS animation to start and stop?
Ans:-
    You can trigger a CSS animation to start and stop using various CSS selectors and events. For example, you can use the :hover pseudo-class to start an animation when a user hovers over an element.

Q. How do you create a responsive CSS animation?
Ans:-
    We can create responsive CSS animation by using relative units like percentages instead of fixed units like pixels. We can also use media queries to adjust the animation properties based on the size of the viewport.

Q. How do you optimize CSS animations for performance?
Ans:-   
    We can optimize CSS animation for performance by using techniques like reducing the number of elements being animated, minimizing the use of box-shadow and text-shadow, and using transform and opacity instead of top, left, bottom, and right.

Q. How do you debug CSS animations and troubleshoot common issues, such as animations not playing or playing too quickly?
Ans:-
    We can debug CSS animations by checking for typos or syntax errors, checking browser's compatibility if it supports the property or not, checking for code that may override the animation.

Q. What is transition in CSS?
Ans:-
    A transition in CSS is a way to create animation effects when a property of an HTML element changes, allowing developers to smoothly animate changes to an element's style over a specified duration.

Q. Can you specify multiple CSS transitions for an element?
Ans:-
    Yes, you can specify multiple CSS transitions for an element by separating them with commas in the "transition" property.

Q. What are gradients in CSS?
Ans:-
    It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors. There are two types of gradients in CSS. They are: Linear gradient and radial gradient.

Q. What is the difference between linear and radial gradient in CSS?
Ans:-
    A linear gradient creates a smooth transition between two or more colors in a straight line while the radial gradient creates a smooth transition between two or more colors in a circular shape.

Q. What is flexbox?
Ans:-
    Flexbox is a CSS3 layout module which provides more flexible and efficient way to align arrange and align the elements within the container. It is widely supported by the modern web browser.

Q. What is the difference between flex-grow and flex-shrink properties in Flexbox?
Ans:-
    flex-grow is a property in Flexbox that specifies how much a flex item should grow relative to the other items in the container, while flex-shrink specifies how much a flex item should shrink relative to the other items when there is not enough space available in the container.

Q. What is the difference between flex-wrap: nowrap and overflow: hidden in CSS?
Ans:-
    flex-wrap: nowrap prevents flex items from wrapping to the next line when they overflow the container, while overflow: hidden hides any content that overflows the container's boundaries.

Q. What is the gap property in Flexbox, and how is it used to add spacing between flex items?
Ans:-
    The gap property in Flexbox sets the spacing between flex items, both horizontally and vertically. It is a shorthand for row-gap and column-gap.

Q. How do you center an element using flexbox?
Ans:-
    To center an element using flexbox, we need to set the parent container's display property to flex and use the justify-content & align-items properties with the value of center.

Q. What is CSS grid?
Ans:-
    CSS grid is a layout system in CSS that allows you to create complex, multi-dimensional grid layouts for web pages.

Q. How do you use the grid-template-columns and grid-template-rows properties to define the size and number of columns and rows in a grid?
Ans:-
    You can use the grid-template-columns and grid-template-rows properties to define the size and number of columns and rows in a grid. For example, you might define a grid with three columns, where the first column is 100 pixels wide, the second column is 50% of the available width, and the third column takes up the remaining space, with the following CSS:

    grid-template-columns: 100px 50% 1fr;

Q. How do you specify the number of columns in a grid using CSS?
Ans:-
    You can specify the number of columns in a grid by using the grid-template-columns property. For example, grid-template-columns: repeat(3, 1fr) will create a grid with three columns that are each one fraction of the available space.

Q. How do you align items within a grid using CSS?
Ans:-
    You can align items within a grid using the justify-items and align-items properties. justify-items aligns items horizontally within a grid, while align-items aligns items vertically.

Q. What is the difference between grid-row and grid-column in CSS Grid?
Ans:-
    grid-row is used to position an item within a row, while grid-column is used to position an item within a column. Both properties can take a value of either a number or a named grid line.

Q. What is a CSS transition?
Ans:-
    A CSS transition is a way to add a gradual animation effect to an element when its CSS properties change.

Q. What is the purpose of the transition-property property in CSS transitions?
Ans:-
    The transition-property property specifies which CSS property or properties should be transitioned when a change occurs.

Q. What is the function of the transition-timing-function property in CSS transitions?
Ans:-
    The transition-timing-function property specifies the rate of change of the transition over time. This can be used to control the speed of the transition and how it accelerates and decelerates. Example: ease-in, ease, ease-out.

Q. How do you delay the start of a CSS transition?
Ans:-
    You can delay the start of a CSS transition using the transition-delay property. This property specifies the amount of time to wait before starting the transition, in seconds or milliseconds. Example: transition-delay: 1s;

Q. How do you apply a transition to multiple properties at once?
Ans:-
    You can apply a transition to multiple properties at once by separating the property names with commas in the transition-property property. example, transition-property: background-color, color, opacity;

Q. What are CSS 2D Transforms?
Ans:-
    CSS 2D Transforms are a set of properties that allow you to transform the position, rotation, scaling, and skewing of an element in two dimensions, without affecting the surrounding elements.

Q. Can you use negative values with CSS 2D transforms? If so, what effect do they have?
Ans:-
    Yes, you can use negative values with CSS 2D transforms. The effect of negative values depends on the function being used. For example, a negative value for the rotate() function will rotate the element counterclockwise instead of clockwise.

Q. What are the properties of CSS 2D transform?
Ans:-
    The properties of CSS 2D Transforms are:

    transform: specifies the transformation functions to be applied to an element
    transform-origin: specifies the point around which the transformation should occur
    translate: moves an element along the x-axis and/or y-axis
    rotate: rotates an element clockwise or counterclockwise around a given point
    scale: increases or decreases the size of an element
    skew: skews an element along the x-axis and/or y-axis
    Can you apply multiple transformations to the same element using CSS 2D transforms?
    Yes, you can apply multiple transformations to the same element using CSS 2D transforms. You can do this by separating each transformation function with a space in the transform property.

Q. What is the difference between the translate() and rotate() functions?
Ans:-
    The translate() function is used to move an element along the x-axis and/or y-axis, while the rotate() function is used to rotate an element clockwise or counterclockwise around a given point.

Q. What are the properties of CSS 3D transform?
Ans:-
    The properties of CSS 3D Transforms are:

    transform-style: determines whether an element's children are transformed in 3D space
    perspective: determines the distance between the viewer and the element, affecting the appearance of 3D transforms
    perspective-origin: specifies the origin point of the perspective
    transform: applies a 3D transformation to an element, such as rotateX(), rotateY(), rotateZ(), translateX(), translateY(),translateZ(), scale(), and skew()
    transform-origin: specifies the origin point of the transformation
    backface-visibility: determines whether or not the back face of an element should be visible when the element is rotated.
    What is the difference between RGB and RGBA colors?
    RGBA is similar to RGB, but it includes an additional alpha value that represents the opacity of the color. The alpha value is a number between 0 and 1, with 0 being completely transparent and 1 being completely opaque.

Q. What is color contrast?
Ans:-
    Color contrast is how much the colors of the text and the background of a website stand out from each other.

Q. How does color contrast applies to accessibility in web design?
Ans:-
    It is important because people with visual impairments or color blindness may have trouble seeing things if there is not enough contrast. There are guidelines for making sure there is enough contrast which makes the website content more accessible to the people.

Q. what is css filter?
Ans:-
    CSS filters are a set of visual effects that can be applied to HTML elements using CSS. Filters can be used to adjust the appearance of an element in various ways, such as changing its color, blurring or sharpening it, adjusting its brightness or contrast, and more.

Q. What are some important considerations when using text effects?
Ans:-
    Important considerations include making sure the text remains readable and legible, ensuring the effect is appropriate for the overall design, and avoiding overuse of effects.

Q. What is a CSS sprite?
Ans:-
    A CSS sprite is a technique used to combine multiple images into a single image file, reducing the number of HTTP requests required to load the page and improving loading times.

Q. What is the :not() pseudo-class used for in CSS?
Ans:-
    The :not() pseudo-class is used to select all elements that do not match the specified selector.

Q. How do you target all even or odd elements using a pseudo-selector in CSS?
Ans:-
    The :nth-child() pseudo-selector can be used with the "even" or "odd" keyword to target all even or odd elements of a parent element.

Q. What is the :visited pseudo-class used for in CSS?
Ans:-
    The :visited pseudo-class is used to target a link that has been visited by the user.

Q. How do you target the first letter of a text element using a pseudo-selector in CSS?
Ans:-
    The ::first-letter pseudo-element is used to target the first letter of a text element.

Q. What is the :active pseudo-class used for in CSS?
Ans:-
    The :active pseudo-class is used to target an element when it is in an active state, such as when a user clicks on it.

Q. What is the :lang() pseudo-class used for in CSS?
Ans:-
    The lang() pseudo-class is used to target elements based on the language attribute of the HTML document. For example, you can use :lang(en) to target all elements in English, or :lang(fr) to target all elements in French.

Q. What is the :checked pseudo-class used for in CSS?
Ans:-
    The :checked pseudo-class is used to target form elements that have been selected by the user, such as checkboxes or radio buttons. This can be used to change the appearance or behavior of the selected element.

Q. What is the @media rule in CSS?
Ans:-
    The @media rule in CSS allows developers to apply styles to a web page based on the size of the device or screen being used to view it, making it more responsive.

Q. What is the difference between fluid and fixed layouts in CSS?
Ans:-
    A fluid layout in CSS adjusts its width and height based on the size of the screen, while a fixed layout has a set width and height. Fluid layouts use percentages to set their dimensions, while fixed layouts use pixels.

Q. How do you make images responsive in CSS?
Ans:-
    To make images responsive in CSS, you can use the max-width: 100% property, which will make the image scale down proportionally to fit the width of its container while maintaining its aspect ratio.

Q. What is the difference between min-width and max-width in CSS media queries?
Ans:-
    In CSS media queries, min-width sets the minimum screen width at which a set of styles will be applied, while max-width sets the maximum screen width at which a set of styles will be applied. For example, if you use min-width: 768px, the styles will only be applied to screens that are 768 pixels wide or larger, while if you use max-width: 768px, the styles will only be applied to screens that are 768 pixels wide or smaller.

Q. What is the difference between responsive and adaptive design in CSS?
Ans:-
    Responsive design in CSS adapts to different screen sizes and devices by using flexible grids, fluid images, and media queries to adjust the layout and content of the website. Adaptive design in CSS, on the other hand, uses predefined layout sizes and breakpoints to adjust the layout and content based on the screen size and device being used.

Q. How do you optimize responsive images for faster loading in CSS?
Ans:-
    To optimize responsive images for faster loading in CSS, you can use smaller file formats like JPEG and PNG, reduce the image size and resolution, and use lazy loading to only load images when they are needed.

Q. How does calc() work in css?
Ans:-
    The CSS3 calc() function allows us to perform mathematical operations on property values. Example: div{width: calc(100px + 50px)}

Q. What is the overflow property in CSS used for?
Ans:-
    The overflow property specifies what should happen if content overflows an element’s box. It's possible values are: auto, none, scroll, visible.

Q. What is the difference between visibility:hidden and display:none?
Ans:-
    visibility:hidden means the tag is not visible, but the space is allocated for it on the page. display:none means the tag will not appear at all and there will be no space allocated for it between the other tags.

Q. Are quotes mandatory in URL’s?
Ans:-
    Quotes are optional in URL’s, and it can be single or double.

Q. Explain what are web-safe fonts and fallback fonts.
Ans:-
    Web-safe fonts are fonts that are commonly installed on most devices and web browsers. Fallback fonts are alternative fonts specified in case the primary font is not available on the user's device.

Q. What is the purpose of CSS content property?
Ans:-
    The CSS content property is used to insert content before or after an HTML element using the ::before and ::after pseudo-elements.

Q. How can we create custom cursor in CSS?
Ans:-
    To create a custom cursor in CSS, you can use the "cursor" property and set it to "url" with the path to the image file that you want to use as the cursor.

Q. What is the "line-height" property in CSS?
Ans:-
    The "line-height" property in CSS is used to control the spacing between lines of text within an element.

Q. What is specificity in CSS?
Ans:-
    Specificity in CSS is a way of determining which CSS rule applies to an element. It is based on the number of selectors and their types in a CSS rule. Specificity is calculated using a formula: inline styles have the highest specificity, followed by IDs, classes, and then elements.

Q. Which property is used to control the scrolling of an image in the background?
Ans:-
    The background-attachment property is used to control the scrolling of an image in the background.

Q. Which CSS property is used to capitalize text or convert text to uppercase or lowercase letters?
Ans:-
    The text-transform property is used to capitalize text or convert text to uppercase or lowercase letters.

Q. What is word-wrap property in CSS3?
Ans:-
    The word-wrap property allows long words to be able to be broken in order to prevent overflow and wrap onto the next line.

Q. Describe ‘rule set’ in CSS?
Ans:-
    It is an instruction that tells browser on how to render a specific element on the HTML page. It consists of a selector with a declaration block that follows.

Q. How can you create a CSS-only dropdown menu?
Ans:-
    A CSS-only dropdown menu can be created by using the "hover" pseudo-class and the "display" property. When the user hovers over a parent element, the "display" property of the child element can be set to "block" or "inline-block" to reveal the dropdown menu.

Q. What are the potential drawbacks of using CSS frameworks such as Bootstrap?
Ans:-
    Using CSS frameworks like Bootstrap can lead to bloated code, difficulties in customizing the design, and unoriginal or generic looks.

Q. What is group in Tailwind CSS?
Ans:-
    In Tailwind CSS, group is a utility class that allows you to apply styles to child elements when the parent element is in a specific state (like hover, focus, etc.).

Use Case:
    Style child elements based on the state of the parent element.

How it works:
    Add the group class to the parent element.

    Use group-* variant in child elements (e.g., group-hover:text-red-500) to style them when the parent is in that state.

Example: Hovering a parent changes child text color

    <div class="group p-4 border border-gray-300 hover:bg-gray-100">
    <h2 class="text-xl font-bold group-hover:text-blue-600">Hello, User!</h2>
    <p class="text-sm group-hover:underline">Hover over this box</p>
    </div>


Q. viewport,em,%,px,shadow,overflow,opacity,gradients,boxSizing,

