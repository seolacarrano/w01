# The Knot

For this assignment you'll be implementing a front end desing. When you're done, [it should look like this.](https://codepen.io/jkeohan/live/YzXpyXy).

Use the starter code and commit each step of the exercise.

## Prerequisites

* HTML, CSS & JavaScript
* The DOM & jQuery

## Instructions

1. Fork and clone this repository.
1. Fullfill the listed requirements.
1. Make a pull request to turn your work in.

### Commit 1

* The starter index.htm. style.css and app.js files have been created but need to be linked. jQuery also needs to be imported and imported via the head tag. Once you have added and linked the files make sure to test that they are linked.  

### Commit 2

* Examine the `<li>` stored in the `<ul>` nested inside the `<nav class="ListContianer">`. Organize them into an array of objects.  The objects should contain the following keys however the info should be specific to that element.

```javascript
[ {
  icon: "far fa-clock fa-2x",
  title: "Wedding Day Timeline"
  description: "The who, what, when and where of your wedding day in one timeline"
 }, {}, {} ]

```

### Commit 3

* Comment out the html that contains entire `<ul>` nested inside the `<nav class="ListContianer">` element.  Only comment out the `<ul>` and nested `<li>'s`. The is should remove the elements from being displayed.  Now using jquery loop over the array of objects, creating the supporting html structure, populating each with the specific data.  Once complete the elements should look like how they appeared before you commented them out. 


### Commit 4

* Now add the needed css to emulate the deisgn. You may and should use Dev Tools to examine the working design
