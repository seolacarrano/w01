[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


## TERMS 

1. When would you use const or let to define a variable? 
   I would use const for a value that won't be changed because it can be redeclared. 
   let can be redeclared, so I would use let only within a local scope so I won't have issues when I declare it again later.


2. Define "Control Flow" in your own terms.
   Control Flow is an instruction for a computer to execute statements. Statements in a program should be executed like a story from top to bottom. 
   For example, 
   
   let age = 22;
   if (age >= 25) {
     greeting = "Welcome!"
   } else {
     greeting = "Sorry, come back when you're over 25!"
   }
   console.log (greeting)

   In conditional execution above, each line will be read from top to bottom, and it will return a result that meets one condition. 

## FOR LOOPS


```js
//Here is an example of a "for loop" that prints a message 3 times:
for (let i=0; i < 3; i += 1) {
	console.log('Hello World');
}
```
## Answer the following questions
1. What are the components that make up the for loop? 
   1) initializing a variable: let i = 0
   2) evaluating a condition: i < 3
   3) incrementing a value of the initial variable: i += 1

2. Write a for loop in ascending order that will console.log the numbers 0 to 10.
   for (let i=0; i < 11; i ++) {
     console.log(i)
   }

3. Write a for loop in descending order that will console.log the numbers 10 to 0.
   for (let i=10; i>=0; -- i) {
     console.log(i)
   }

4. Write a for loop in ascending order that will console.log only even numbers between 0 to 10
   for (let i=0; i<=10; i += 2) {
     console.log(i)
   }

## CONDITIONS

Using if/else or if/else if/else structure to work out the logic below

1) If you are under 16, you cannot do much outside of going to school
2) If you are 16 or older, you can drive
3) If you 18 or older, you can vote
4) If you are 21 or older, you can drink alcohol
5) If you are 25 or older, you can rent a car
6) If you are 35 or older, you can run for president
7) If you are 62 or older, you collect social security 

 NOTE: Keep in mind that the most specific condition should be evaluated first as more than one condition can evalutate to true.

```let age = 21;```


SOLUTION 1: Logic should follow the sequence in the instructions starting with the first condition evaluating 16. 
Also this solution should not include the AND (&&) and OR (||) Binary operators

```js
let age = 21;
  if (age < 16) {
  console.log("You cannot do much outside of going to school")
  } else if (age >= 16) {
    console.log("You can drive")
  } else if (age >= 18) {
    console.log("You can vote")
  } else if (age >= 21) {
    console.log("You can drink alcohol")     
  } else if (age >= 25) {
    console.log("You can rent a car")
  } else if (age >= 35) {
    console.log("You can run for president")
  } else if (age >= 62) {
    console.log("You collect social security")
  } else {
    console.log("Please check your age again")
  }
```

SOLUTION 2: Logic should go in reverse order starting with the first condition evaluating 62. 
```js
let age = 21;
if (age >= 62) {
  console.log("You collect social security")
  } else if (age >= 35) {
    console.log("You can run for president")  
  } else if (age >= 25) {
    console.log("You can rent a car")
  } else if (age >= 21) {
    console.log("You can drink alcohol")     
  } else if (age >= 18) {
    console.log("You can vote")
  } else if (age >= 16) {
    console.log("You can drive")
  } else if (age < 16) {
  console.log("You cannot do much outside of going to school")
  } else {
    console.log("Please check your age again")
  }
```

SOLUTION 3: Logic can go in any order you want but must include using one or both of the Binary operators (&& ||)
```js
let age = 21;
  if (age < 16) {
  console.log("You cannot do much outside of going to school")
  } else if (age = 16 || age >= 17) {
    console.log("You can drive")
  } else if (age = 18 || age >= 19) {
    console.log("You can vote")
  } else if (age = 21 || age >= 22) {
    console.log("You can drink alcohol")     
  } else if (age = 25 || age >= 26) {
    console.log("You can rent a car")
  } else if (age = 35 || age >= 36) {
    console.log("You can run for president")
  } else if (age >= 62) {
    console.log("You collect social security")
  } else {
    console.log("Please check your age again")
  }
```

## Try performing the above logic using a switch statement
```js
let age = 21;
switch (age) {
  case age < 16:
   console.log("You cannot do much outside of going to school");
   break;
  
  case age = 16 || age >= 17:
    console.log("You can drive");
    break;
  
  case age = 18 || age >= 19:
    console.log("You can vote");
    break;
  
  case age = 21 || age >= 22:
   console.log("You can drink alchohol");
   break;
  
  case age = 25 || age >= 26:
   console.log("You can rent a car");
   break;

  case age = 35 || age >= 36:
   console.log("You can run for president");
   break;

  case age >= 62:
   console.log("You collect social security");
   break;
  
  defult:
  console.log("Please check your age again")
   
```

## FIZZBUZZ
Using a for loop, boolean logic, and if/else statements work
out the logic for fizzbuzz.  

NOTE: look up the % modulus operator as it is needed as well

Here are the requirements:
- Initiate the loop 15 times
- In the loop, every time a number is divisible by **3**, 
  instead of logging the number itself, the word "fizz" should appear.
- If the number is divisible by **5**, the word "buzz" should be logged.
- If the number is divisible by both **3** and **5**, then the word "fizzbuzz" should be logged.

Below should be the console.log output:

1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
fizz
fizzbuzz
*/

```js
for (i=1; i<16; i++) {
  if (i%3===0 && i%5===0) {
    console.log("fizzbuzz")
  } else if (i%3===0) {
    console.log("fizz")
  } else if (i%5===0){
    console.log("buzz")
  } else 
    {console.log(i)}
}
```


