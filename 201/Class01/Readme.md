# Class 01 notes

<br>

# How computers work

## Client and servers

Computers on wifi are reffered to as clients and servers. Clients are the useres device connected to the wifi using web access. Servers are computers that store webpages, sites or apps when the client wants to acess a page a copy is downloaded and displayed.

# Small terms

+ Your internet connection: Allows you to send and receive data on the web. 

+ TCP/IP- (Transmission Control Protocol) and (Internet Protocol) are communication protocols that define how data should travel across the internet. 

+ DNS- (Domain Name System) is like an address book for websites.

+ HTTP: Hypertext Transfer Protocol is the protocol that defines a language for clients and servers to speak to each other. 

+ Component files: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. 
    + Code files: Web built using HTML, CSS, and JavaScript
    + Assets: This is a collective name for the miscellaneous makes up a website: images, music, video, Word documents, and PDFs.

## Order componet files are parsed

+ HTML files often contain <link> elements referencing external CSS stylesheets and <script> elements referencing external JavaScript scripts.

+ The browser parses the HTML file first recognizing any <link>-element references to external CSS stylesheets and any <script>-element references to scripts

+ As the browser parses the HTML it also requests back to the server for any CSS files it has found from <link> elements, and any JavaScript files it has found from <script> elements, and from those, then parses the CSS and JavaScript.

+ The browser generates an in-memory DOM tree from the parsed HTML, generates an **in-memory** CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript

+ The browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript displaying the desired screen.

## Dns explained 

+ IP adress (63.245.215.20)  represents a unique location on the web but its hard to remember so they created domain name servers

## What is JavaScript?

+ JavaScript is a powerful programming language that can add interactivity to a website. with java you are able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, etc.


## Variables

+ Variables are containers that store values. You start by declaring a variable with the let keyword, followed by the assigned name:

"let myVariable;"

+ The semicolon at the end of a line indicates where a statement ends. After declaring a variable, you can give it a value. Also, you can do both these operations on the same line:

let myVariable = "Bob";

myVariable = "Bob";

+ Retrieve the value by calling the variable name:

myVariable;

+ After assigning a value to a variable, you can change it later in the code:

let myVariable = "Bob";
myVariable = "Steve";

+ String	This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks.	

let myVariable = 'Bob'; or
let myVariable = "Bob";

+ Number  This is a number. Numbers don't have quotes around them.	

let myVariable = 10;

+ Boolean	This is a True/False value. The words true and false are special keywords that don't need quote marks.	

let myVariable = true;

Array	This is a structure that allows you to store multiple values in a single reference.	

let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.

+ Object	This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.	

let myVariable = document.querySelector('h1');
All of the above examples too.

## Comments

+ The browser ignores text marked as comments. You can write comments in JavaScript and CSS aswell:

/*
Everything in between is a comment.
*/

If your comment contains no line breaks you can apply two slashes like this:

// This is a comment

## Operators

+ An operator is a mathematical symbol that produces a result based on two values (or variables).

    + Addition	Add two numbers together or combine two strings.
        "+"
    	6 + 9;
'Hello ' + 'world!';

Subtraction, Multiplication, Division	
 These do what you'd expect them to do in basic math.
 	-, *, /	

    9 - 3;
    // multiply in JS is an asterisk
    8 * 2; 
    9 / 3;

    Strict equality	This performs a test to see if two values are equal. It returns a true/false (Boolean) result.	    
        ===	
        let myVariable = 3;
myVariable === 4;

Not, Does-not-equal

Turns a true statement or value into false. The negation operator tests whether two values are not equal.

!, !==

let myVariable = 3;
!(myVariable === 3);

Here we are testing "is myVariable NOT equal to 3". This returns false because myVariable is 3.

## Conditionals

Conditionals are code structures used to test if an expression returns true or not using if else statements.

"let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}"

## Functions

+ Functions are a way of packaging functionality that you wish to reuse. This is a good alternative to repeatedly writing the same code.

let myVariable = document.querySelector("h1");
Copy to Clipboard
alert("hello!");

 + math example

 function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

+ test your self

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

# Java script

Compose a short poem describing how HTTP sends data between computers. 

+ If DNS can find the location, https sends a the location, When a message is received the code your computer can deceive- oogway kd
 
Describe how HTML, CSS, and JS files are “parsed” in the browser.

+ The HTML files contain link elements that reference external css sheets and external javascript scripts the website first searches for these links and then starts with the CSS applied to the additions to the page. After the CSS has been added it goes to add the javascript files to the page finally rendering your desired content.

How can you find images to add to a Website?

+ You can find images to add via google chrome and then save them to your pc

How do you create a String vs a Number in JavaScript?

+ So a string is described as a variable enclosed in single or double quotation marks, and a number doesn't have to be enclosed in these marks.

What is a Variable and why are they important in JavaScript?

+ A variable is a container that stores a value using the let function, this is important because when we use the let function we can store a value in the variable and recall it instead of retyping the same code over and over

# HTML

What is an HTML attribute?

+ An HTML attribute is like extra information that isn't displayed in the content you can add the class  attribute to target the element with some style

Describe the Anatomy of an HTML element.

+ A HTML element anatomy consists of the content wrapped in opening and closing tags

What is the Difference between "article" and "section" element tags?

+ Sections and articles are the same however sections reference the main content and article can be used to provide information that is not directly connected to the main

What Elements does a “typical” website include?

+ A typical website includes a: main, article, section, aside information, your Nav, and the footer.

How does metadata influence Search Engine Optimization?

+ The metadata influences the languages or the characters when the page has been full rendered. Mostly allowing you to change the lang used in your browser.

How is the "meta" HTML tag used when specifying metadata?

+ The meta HTML tag is used by starting with the opening tag <meta> and adding the charset (or language render)  =”utf-8(the languages allowed to be rendered)”/>

# Miscellaneous 

What is the first step to designing a Website?

+ The first step to designing a web page is to decide what it is that I want from this creation.

What is the most important question to answer when designing a Website?

+ What is the purpose of this web page and how can it help me reach my goals?

# Semantics

Why should you use an "h1" element over an "span" element to display a top-level heading?

+ The "h1" element is recognized to be the very head or top and the "span" can be used the same however it doesn't have the same value as using the correct "head" element.

What are the benefits of using semantic tags in our HTML?

+ The benefit of using these semantic tags is that we can come to understand the reason or meaning of the codes we used.
What is javascript

Describe 2 things that require JavaScript in the Browser.

+ The buttons we click on to go to other pages are an example of javascript, also sites that have the option to enter information java s can run expected outputs to your rendered information like chat boxes.

How can you add JavaScript to an HTML document?

+ We can add javascript to the document the same way we do for our CSS style sheets we just use the link attribute for rendering the styles information.


