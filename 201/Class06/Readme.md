# Object basics

+ A object is a collection of related data and/or functionality.

+ an object literal is when written out the object contents as we've come to create it. 
 
 +  when you want to transfer a series of information,or related data items in the server to be put into a database.

 ## Dot notation

 + dot notation when we access a object's properties and methods the name of a simple property, or an item of an array property, or a call to one of the object's methods

 ## Bracket notation

 + Bracket notation provides an alternative way to access object properties. Instead of using dot notation.

 ## What is "this"?

 + The this keyword refers to the current object in most cases this it's equivalent to person. 

 ## Introducing constructors

 +  A constructor is just a function called using the new keyword. This can be used to create a new object, bind this to the new object, so you can refer to this in your constructor code, run the code in the constructor, and return the new object.

 # Reading questions
+ How would you describe an object to a non-technical friend you grew up with?
I would describe object as a way tostore the information or data we want the system to collect and retain.

+ What are some advantages to creating object literals?
Some advantages is that we can enter any information into the obj and test for functionality.

+ How do objects differ from arrays?
They are really similar when it comes to accessing the data however people prefer to use the dot method to access the data stored than using the numbers to call them.

+ Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
    + If an object property name is held within a variable, then then i would use bracket notation to access the value,

+ Evaluate the code below. What does the term this refer to and what is the advantage to using this?
    + The this term refers to the dog in this instance when we call for the data placed it would be the age of the dog and the name of the dog. An advantage would be we cancreate multiple object literals and use the “this” term to specifically look at data from those table individually.
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}




# Introduction To The DOM

+ What is the DOM?
    
  DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content is presented  as nodes and objects this way, programming languages can interact with the page.

# Reading questions

 How would you describe an object to a non-technical friend you grew up with?
  + I would describe object as a way tostore the information or data we want the system to collect and retain.

What are some advantages to creating object literals?
+ Some advantages is that we can enter any information into the obj and test for functionality.

How do objects differ from arrays?
+ They are really similar when it comes to accessing the data however people prefer to use the dot method to access the data stored than using the numbers to call them.

Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
 + if an object property name is held within a variable, then then i would use bracket notation to access the value,

Evaluate the code below. What does the term this refer to and what is the advantage to using this?
 The this term refers to the dog in this instance when we call for the data placed it would be the age of the dog and the name of the dog. An advantage would be we cancreate multiple object literals and use the “this” term to specifically look at data from those table individually.

+ const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}

# Introduction To The DOM

What is the DOM?
 + DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content is presented  as nodes and objects this way, programming languages can interact with the page.

Briefly describe the relationship between the DOM and JavaScript.
+ So dom is like the document and elements for a web page and java script come in where we can edit the data like header ect. Without java script the dom wil be unreadable. 

