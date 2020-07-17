# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# JavaScript Functions

### LEARNING OBJECTIVES

_After this lesson, you will be able to:_

- Give the definition of a function
- Identify the parts of a function
- Differentiate between function expression and declaration
- Define a function in an object
- Pass a function as a parameter

## Opening

**Function** is a term that comes out of mathematics. You may remember hearing it in your high school algebra class.

The basic idea of a function is simple — it's a relationship between a set of inputs and a set of outputs.

## Introduction: Functions

In JavaScript, a function can be:

1.  Made up of either a single reusable statement or a group of reusable statements.
2.  Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable pieces. You might hear this described as making the code modular. Modularity is good.

#### Example of using a function

Here's an example of what a function can do:

This repeats for every additional movie.

```js
const movie1 = 'Saving Private Ryan';
const year1 = 1998;
console.log(`${movie1} was released in ${year1}`);

const movie2 = 'Interstellar';
const year2 = 2014;
console.log(`${movie2} was released in ${year2}`);

const movie3 = 'Jason Bourne';
const year3 = 2016;
console.log(`${movie3} was released in ${year3}`);
```

This is all easy enough to write out, but if we have a lot of movies, this results in a lot of repeated code! Also, if we want to change the formatting, we have to change it in every place.

Let's try to keep our code from getting out of hand by using a function.

```js
const printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
};

printMovie('Saving Private Ryan', 1998);
printMovie('Interstellar', 2014);
printMovie('Jason Bourne', 2016);
```

Notice how much cleaner and simpler this function looks than our repeated lines of code?

Using functions is a great way to save time for yourself, and simplify things for your team members.

#### DRY - Don't repeat yourself

Functions are a critical component of programming because they allow us to execute on a key tenant of engineering:

"**D**on't **R**epeat **Y**ourself" (aka "DRY" code).

Our goal is to craft our programs in as few lines of code as possible, while still being clear.

##### Why should we avoid repetition?

1.  **Performance -** Having repeated code will lead to longer scripts. Longer scripts take up more memory and will take more time to load, which can make a website seem slow.

2.  **Maintainability -** Imagine that we have the same line of code repeated 10 times in our program. If we ever want to change that functionality, we would have to search for all 10 places where that code is repeated and make 10 individual changes.

#### Why use functions - Summary

[Check out this link to review the three main reasons that functions are created.](http://circuits-assets.generalassemb.ly/prod/asset/5016/Slide-17-Chart.svg)

---

<a name="function-expressions"></a>

## Function Expressions

Now we know what functions are and why we use them. But how do we create them?

As you saw in our movie example, just as we do with a variable, we must define a function before we call or "use" it.

In JS, functions can be defined in several ways. Two of the more common methods of defining a function are **function expression** and **function declaration**.

#### Function Expressions - Overview

Let's take a look at **function expressions** first.

A **function expression** defines a function by producing a value that's stored in a variable.

This is similar to the way an expression produces a value that's stored in a variable—hence its name.

```js
const pickADescriptiveName = function() {
  // code block
}
// 'pickADescriptiveName' is the function name
// 'function' is the keyword that declares a function
// parentheses is needed an can have optional parameters
```

Have you ever tried to move forward to the next page of an online form, only to be greeted by an alert that says "Please fill out all the required fields"?

This kind of code can be placed in a function and this function can be called anytime the user hasn't filled out a field on any form on the site. Let's code for this popup alert using a function expression:

```js
const errorAlert = function() {
  alert('Please be sure to fill out all required fields');
}
```

Let's take a look at the function in more detail:

1.  The first line begins by declaring a variable called `errorAlert`. This is the name that we can then use to call that function.
2.  This is followed by the word `function`, which is a keyword we use to let JS know that we are creating a function.
3.  Next, you have a list of parameters surrounded by parentheses. Even though the parameters that can go within the parentheses are optional, the parentheses themselves are _always_ required.
4.  The statements inside the function will run every time the function is called. The function body must always be wrapped in curly braces `{ }`, even when it consists of only a single statement.

#### Naming Conventions

Now that we've learned about function expressions, let's discuss naming conventions.

You may have noticed how we capitalize names in JavaScript using the camelCase style.

Let's take a quick look at some good and bad examples of function names, and what can cause them to break down:

- **Bad:** thisfunctioncalculatestheperimeterofarectangle
  (no camelCase, too verbose)

- **Bad:** my new function
  (contains spaces)

- **Bad:** myNewFunction
  (doesn't explain what it does!)

- **Good:** calculateArea
  (describes what it does, short, and uses camelCase)

#### Calling a function

To run the code in a function, we **call**, or invoke, the function by using the function name followed by parentheses.

Remember our function printMovie?

What happens if we just type `printMovie`?

Now we add the parentheses.

```js
printMovie();
```

<a name="arguments-and-parameters"></a>

## Arguments and Parameters

#### Syntax - Parameters and Arguments

**Parameters** are the names listed in the function definition.

Let's write a function that calculates the area of a rectangle.

We need to provide our `area` function with a width and a length so we won't need to create a separate function every time we want to measure the dimensions of a new room.

```js
const area = function(width, length) {
  console.log(width * length);
}

area(5, 3); // 15
area(12, 16); // 192

```

1. Width and length are our parameters. Note that they are in a comma separated list. This tells our function that we are going to give it a width and a length.
2. There is nothing special about the words `width` and `length` here. These are just descriptive names to remember what information that is being given to our function. We could use other names as well i.e. `width` and `height`, `l` and `w`, etc
3. When the name of the function is followed by `()` the function is being called. By passing comma separated values in between the parentheses (i.e. arguments) correlate to the name of the parameters when the function was declared. Ex: `5` relates to `width` and `3` relates to `length`. Note that the order does matter.

To write functions with more than one parameter, use a comma separated list:

e.g., (parameter1, parameter2, parameter3, parameter4, etc.)

Here is an example of a function with four strings as parameters:

```js
const greetUser = function(firstName, lastName, year, city) {
  console.log(
    'Hello ' +
      firstName +
      ' ' +
      lastName +
      ' born in ' +
      year +
      ' from ' +
      city +
      '!',
  );
};
```

> Check: What would happen if we called the function with the following arguments?

```js
greetUser('Bruce', 'Wayne', 1939, 'Gotham');
```

> Have the students discuss what would happen if we don't provide all of the parameters.

The code in a function will not run when the function is defined. The code will only run when the function is called.

## Exercise:

1.  Write a function that console.logs 'Hello World'
2.  Write a function that console.logs whatever you want it to say
3.  Write a function that prints every number between 1 and 100
4.  Write a function that takes an array of numbers as a parameter and adds each element of that array to a counter and prints the final value of the counter (i.e. the sum of all of the numbers in the array).
5.  Write a function that loops over the following array of SEI students and prints out their name and what class they are currently in.

```js
const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe',
];
```

6.  Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word.
    e.g. passing this function an array `['i', 'am', 'the', 'best']` should give you back `[1, 2, 3, 4]`
    Hint: you can call .length on a string!
7.  Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third.
    e.g. passing this function `1, 2, 3` should give you back the answer to `(1 * 2)^3`

Bonus Functions!

1.  Write a function that prints every EVEN number between 1 and 100
2.  Recreate the Fibonacci sequence between 1 and 20. If you don't know what that is, Google is your best friend!

---

<a name="return-values"></a>

## Return Statements

We now know how to communicate with functions in one direction, by passing values to functions using parameters and arguments.

But, functions can also communicate back to you and return values.

#### Why use return statements?

Sometimes we don't necessarily want to show or log something immediately to the console, or update something on the page.

Instead, we might just want to update a variable within a function, or even call another function without showing its effects.

To do this, we use `return` statement.

Let's look at an example of updating a variable within a function.

```js
const doubleValue = function(x) {
  return x * 2;
};
```

The `return` statement _stops the execution of a function_ and returns a value from that function.

#### Storing a return value in a variable

When we `return` something, it ends the function's execution and "spits out" whatever we are returning.

We can then store this returned value in another variable.

#### Exiting a function

We can also use `return;` by itself as a way to stop the function and prevent any code after it from running.

Take a look at this example:

```js
const rockAndRoll = function(muted) {
  const song = 'Come Together';
  const artist = 'The Beatles';

  if (muted) {
    return; // Here we use return as a way to exit a function, instead of returning any value
  }

  console.log(`Now playing: ${song} by ${artist}`);
};

rockAndRoll(true);
```

Here, we use `return;` as a way to exit the function instead of returning any value.

So when we call the function passing in `true` as an argument for `muted`, the log statement will never run.

How can we modify our area function to return our value instead of printing it?

---

<a name="function-declarations"></a>

## Function Declarations

Now we'll take a look at another way to define functions (**function declarations**) and how these differ from the function expressions we've been using.

Watch this short [video](https://generalassembly.wistia.com/medias/g1w03wkvth) for an overview of Function Declarations and Function Expressions.

#### Function Declarations vs. Function Expressions

Remember the `printMovie()` function?

Let's take a look at how we could rewrite that function by changing the way we declare the function (the bottom example).

```js
const printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
};
```

vs

```js
function printMovie(movie, year) {
  console.log(`${movie} was released in ${year}`);
}
```

Both functions do the exact same thing, they're just written differently. We'll take a look at the difference between the two in just a few minutes.

#### Syntax

As you can see, a function declaration always has:

- The keyword `function`.
- A descriptive name that refers to the function (this can be anything you want, as long as it's in camelCase).
- An optional list of parameters surrounded by parentheses.

```js
function pickADescriptiveName() {
  // code block
}
```

What's the difference between them? It all comes down to something called **hoisting**.

#### Scope

Scope is the space of computer memory where any given variable lives.

If I define a variable _globally,_ that is to say, outside of any function, my entire program (and any functions I write in it) have access to that variable, and any function I write can manipulate it.

However, scope only flows _downward._ That is to say, functions can only see variables that have been defined within their scope or above them, so trying to access a variable defined in one function by calling another will throw an un error

#### Hoisting

Right now, let's dive deeper into the differences between function declarations and function expressions. While both methods are similar, one of their main differences is the concept of **hoisting**.

In JS, function declarations are always moved, or "hoisted," to the top of their scope by the interpreter. (Remember, the interpreter is the console in JS — the software that runs the code).

In other words, _you can call a function declaration before defining it_.

Let's look at an example of hoisting:

```js
sayHello()

function sayHello() {
  console.log('hey')
}

// works great!!
```

```js
sayHello()

const sayHello = function() {
  console.log('hey')
}

// ERROR: What's sayHello??
```

Function expressions must be defined before they are called. The function is not processed until the interpreter gets to that statement. We have to wait for the interpreter to reach that line, otherwise we will get an error.

## First-class citizens!

Functions in JavaScript are often referred to as 'first-class citizens'. What that means, essentially, is that anything you can do to regular values and datatypes, you can do to functions.

## Conclusion

Functions are very important in JavaScript, and you must have a thorough understanding of how to define them, as well as how you can use them.

---

# JavaScript Objects

### Objectives
*After this lesson, students will be able to:*

- Compare objects and key-value stores to arrays as data structures
- Explain the difference between object properties and methods
- Create empty objects and objects with multiple properties and methods using object literal syntax
- Compare adding and retrieving properties to an existing object using the dot and bracket notations
- Access properties of an object using keys and helper methods (.hasOwnProperty)
- Iterate over the keys of an object to return and manipulate values

### Preparation
*Before this lesson, students should already be able to:*

- Create and manipulate variables with javascript
- Use the chrome dev tools console

## Intro to Objects

In this lesson, our focus is objects, an exciting aspect of JavaScript that ties into many of the concepts you've already learned.

Let's start by visiting a site some of you may be familiar with, [AirBnB](https://www.airbnb.com/). If we type something to search for, you may notice all the results have similar properties: price per night, title, rating and photo.

In JavaScript, we need a way to contain logic and data about things in the real world and represent them in our programs. An effective way to do this is with objects.

### What is an object?

* In JavaScript, an object is a type of key-value store, or a way to group many pairs of keys and values together. In other languages, it goes by different names, like a hash (in Ruby) or a dictionary (in Python)
* Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than indices to order and access those pieces of data. The keys which we explicitly state when defining a property are analogous to our array indexes. They are how we access the object's associated value
* Each object can have its own properties and methods. Properties are the characteristics associated with an object. Methods are just functions, but because they're attached to an object, you can think of them as actions that the object can invoke on itself


### Collection of key-value pairs

The following is an example of an object's key-value pair syntax:

```
const car = {
	make: 'Honda',
	model: 'Civic',
	year: 1989
}
```
> "make" is the key, while "Honda" is the value

> Objects must have both a key and a value - neither can be empty.

Unlike arrays, objects use *named keys* rather than ordered indexes. Each piece of data is bound to its key, rather than assigned an index. The data is not sequential.

We could store this same information in an array like this:

```
const car = ['Honda', 'Civic', 1989]
```

But with the array above, we don't know what the values mean. Does 'Civic' refer to the name of the owner, or the model of the vehicle?

#### Independent Practice: Model SEI Student

Your goal is to code an object:

- In pairs, spend 2 minutes thinking about what attributes an SEI student should have (think of at least 5!).
- Take 3 minutes to construct your object with the appropriate key-value pairs by drawing it on the table.
- **Bonus** - One key value pair contains an array
- **Double Bonus** - one key value pair contains another object


## Interacting with Objects

### Create

There are 4 different ways to create an object. [airbnb](http://airbnb.io/javascript/#objects)

##### Object constructor

The [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) constructor creates an object wrapper for the given value.

```javascript
const myObject = new Object();
```

##### Object literal syntax

This is also called an [object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

This is equivalent to the syntax above, and is the one we use to create JSON objects.

```javascript
const myObject = {};
```

##### Constructor function

It is also possible to use a `function` statement to create an object that serves as a "constructor function."

The first step is to write a function that will define the object. By convention, this function we start the function name with a capital letter. Once the function is defined (in the current scope), you can create a new object by using the keyword `new`.

```javascript
function Cohort(name, numberOfStudents) {
  this.name = name;
  this.numberOfStudents = numberOfStudents;
}

const sei = new Cohort('SEI Jeopardy NYC', 29);
const sei2 = new Cohort('SEI Bananas NYC', 18);
```

##### Object.create

It is possible to use the syntax [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

This method can take an object in argument as the prototype, allowing you to create an object without having to use a constructor function.


```javascript
const Person = {
  type: 'Human',
  displayType: function(){
    console.log(this.type);
  }
}

const person1 = Object.create(Person);
person1.displayType();
=> Human

const person2 = Object.create(Person);
person2.type = 'Man';
person2.displayType();
=> Man
```

#### Let's take a sidebar to look at `this`

In the context of our objects, `this` is used in place of the object name to refer to the current object instance.

In a method, `this` refers to the object containing the function.

For example, in the function below, `this` refers to the animal object that contains the method `makeNoise`.

```js
const animal = {
  name: 'Rover',
  species: 'dog',
  breed: 'Golden Retriever',
  noise: 'bark!',
  makeNoise: function () {
    console.log(this.noise);
  }
};
```

Because `this` refers to the `animal` object, using it would be the same as writing out:

```js
console.log(animal.noise);
```

#### Check:

- What does `this` refer to in the following scenario, and why?
- What will be logged to the console?

```js
const paintbrush = {
  tool: 'paintbrush',
  brand: 'Winsor & Newton',
  price: 12.23,
  pattern: 'zig zag',
  drawShape: function () {
    console.log(this.pattern);
  }
};
```

### Read

To access object properties, we use either dot `.property` or bracket `['property']` notation.

**Dot notation** is common for simple scenarios.

Remember the syntax we used when learning about arrays to find out the length of an array?

```js
const fruits = ["blueberries", "strawberries", "apples"];
fruits.length; => 3
```

By using our array name, followed by `.length`, we were able to access the length property of our array.

This is the dot `.` notation.

With objects, can access values using the object name, followed by a period `.`, followed by the name of the property we want to access.

```js
console.log( car.make )
console.log( car['make'] )

// What happens when we try to access a property yet to be defined?
console.log( car.owner )

// NOTE: When accessing properties whose keys have a "-" or space in them, you must use bracket notation.
console.log( car['tire-type'] )

// NOTE: When accessing properties with a variable, you must also use bracket notation
function(carProp) {
  car[carProp]
}
```
**Bracket notation** can also be used to access and update the properties for an object.

The square bracket syntax is commonly used when a variable name is used in place of a property name:

```js
const propertyName = 'firstName';
const supermanFirst = superman[propertyName];   => 'Clark'
```


### Update

We can also update values using dot notation.

To do so, we use the name of the object (in this case, `car`), followed by the name of the property we want to update (in this case, `.year`).

We then use the assignment operator (`=`) followed by the new value.

```
car.year = 2003
// or
car['year'] = 2003
```

We can also create brand new properties for an object after it's initialized using this method.

```
// Now our car has a smell property equal to "Leathery Boot". 
// We did not initially declare this property.

car.smell = "Leathery Boot"

console.log(car)
```

#### Bracket Notation vs. Dot Notation

As with dot notation, we use the name of the object, followed by the property name wrapped in quotes and square brackets (`[ ]`). Next, we use the assignment operator (`=`), followed by the new value.

Although dot notation is often a popular method, as it's slightly easier to write out, we'll need to use square bracket syntax anytime we are generating our property names dynamically, i.e., when we want to use a variable for a property name.

#### Independent Practice

Consider the following object:

```js
const pet = {
  species: 'iguana',
  gender: 'female',
  age: 12,
  name: 'Godzilla'
};
```

1. How would you retrieve the value for `name` from the object, and store this value in a variable `petName` using square bracket syntax `[ ]`?
2. How would you assign `13` as the value for `age` using square bracket syntax `[ ]`?
3. How would you add a new key, `favoriteFood`, with value `'crickets'` using square bracket syntax `[ ]`?

### Delete Properties

Excellent! Now, let's discuss how we can use the `delete` operator to remove a property from our object.

Here's what the syntax for deleting a property looks like (using the dot notation or the square bracket syntax):

```js
delete object.property      // Dot notation
delete object['property']   // Square bracket syntax
```

This deletes the whole key-value pair, not just the value.

Here's an example:

```js
const superman = {
  // Properties
  firstName: "Clark",
  lastName: "Kent",
  superheroName: "Superman",

  // Method
  revealIdentity: function () {
    return this.firstName + " " + this.lastName + " is " + this.superheroName;
  }
};
```

**Dot Notation:** `delete superman.firstName;`  
**Square Bracket Notation:** `delete superman['firstName'];`


## Enumerating properties of an object

There are three native ways to *list the properties* of an object:

* **for...in loops** This method traverses all enumerable properties of an object and its prototype chain
* **Object.keys(o)**  This method returns an array with all the own (not in the prototype chain) enumerable properties' names ('keys') of an object o.
* **Object.getOwnPropertyNames(o)** This method returns an array containing all own properties' names (enumerable or not) of an object o.

##### for...in

You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.

```js
const fruit = {
  color: 'yellow',
  name: 'banana'
};

for (const prop in fruit) {
  console.log(`fruit.${prop} = ${fruit[prop]}`);
}

// Expected output:
// "fruit.color = yellow" // fruit.color = fruit[color]
// "fruit.name = banana"
```
##### Object.keys(o)

```js
const fruit = {
  color: 'yellow',
  name: 'banana'
};

console.log(Object.keys(fruit));
// expected output: Array ["color", "name"]
```

##### Object.getOwnPropertyNames(o)

```js
const fruit = {
  color: 'yellow',
  name: 'banana'
};

console.log(Object.getOwnPropertyNames(fruit));
// expected output: Array ["color", "name"]
```

This section from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects#Objects_and_properties)


## Comparing Objects

In JavaScript, if two objects are created separately, they are distinct, even if they are given the same properties.

```javascript
const student = {name: 'Chris'};
=> undefined

const student2 = {name: 'Chris'};
=> undefined

student == student2
=> false

student === student
=> true
```

If you're still confused by the difference between `==` and `===` review MDN's notes on [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_()) and [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_())

---
### Nested Collections

Object properties aren't limited to simple data types. We can also nest collections inside of collections.


```js
const car = {
  make: "Honda",
  model: "Civic",
  year: 1997,

  // An array within an object.
  gears: ["Reverse", "Neutral", "1", "2", "3", "4"],

  // An object within an object.
  engine: {
    horsepower: "6 horses",
    pistons: 12,
    fast: true,
    furious: false
  }
};
```

> Check: In the above examples, how do we access:
>
> * "Neutral" (i.e., array value within an object)?
> * "6 horses" (i.e., object value within an object)?

---
### Independent Practice (20 minutes)

- Create a `dog` object, which has the following properties:

  - `name`
  - `breed`
  - `foodsEaten`

  And the following methods:

  - `eatSomething(thingAsString)`
  - `introduce`: producers a string introducing itself, including its name, species, and what it's eaten

- Create 3 dogs total. Make sure all 3 dogs have all properties set and methods defined.

- Exercise your dogs by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

---
### Conclusion

In this lesson, we took a look at how we can store data in a way that models real-life using objects.

Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages (in Python, they're called a dictionary; in Ruby, they're called Hashes).

Understanding and being able to manipulate and access values in objects is a skill that will not only come in handy when writing JavaScript — but can be applied to many other programming lanugages.

---
### Additional Resources
- Videos
  - JS Circuits - [Intro to Objects](https://generalassembly.wistia.com/medias/m8d1oq04br)
  - JS Circuits - Why use objects? [Sports analogy](https://generalassembly.wistia.com/medias/wk0zfyxxsc)
- Readings
	- Eloquent JavaScript Chapter 6 - [The Secret Life of JS Objects](http://eloquentjavascript.net/06_object.html) (Great resource!)
	- MDN - [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
	- MDN - [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)


