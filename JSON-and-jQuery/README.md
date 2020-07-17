# Using JSON with jQuery

In this lesson, we'll learn to pull JSON data from an API using the `fetch()` method and render it to the HTML DOM using jQuery. We'll look at this in four basic stages.

> To learn and understand more (recommended), see:
> * [What is JSON?](resources/JSON.md)
> * [fetch() and Promises](resources/Promises.md)

For now, we'll walk through the process step by step.

## Getting the data

JavaScript can natively handle HTTP requests through the `fetch()` method. On its surface, `fetch()` is quite simple and requires only one parameter:
```javascript
fetch('http://the.url/that/iWant/toRetrieve')
```

Great!

### Using `.then()` to process the data

To *use* the data once it has been retrieved, however, we'll need to chain additional functions onto `fetch()` using the `.then()` method, which waits until the response is retrieved and *then* performs additional actions on the response via a callback function. The callback function will have one argument: the value retrieved by `fetch()`.

The simplest approach to hooking this up involves two stages.

First, because `fetch()` retrieves an HTTP response with headers and all sorts of other info, we need to pull *just* our JSON string out of the response body and convert it to a JavaScript object with the `.json()` method:
```javascript
    .then(httpResponse => httpResponse.json())
```

### Using the processed data

Because `fetch()` is asyncronous, meaning it operates somewhat outside the normal flow of JavaScript, the simplest approach is to use the data we've retrieved inside another `.then()` like this:

```javascript
    .then(processedData => {
        // Do whatever you want with your processedData
    })
```

All together, it looks something like this:

```javascript
fetch(targetUrlAsString)                // retrieves the target URL
    .then(response => response.json())  // parses response JSON into JS object
    .then(data => {                     // uses parsed data in a new code block
        console.log(data)               // here we'll just console.log it
    })
```

## Digging through the data

For our first project, we're using JSON data from Google Sheets, which sends a *lot* of information we don't plan to use in our JavaScript. The first thing we should do with our data is parse it into a more straightforward format.

The response from Google includes a `"feed"` object, which contains almost all the data that was sent. Inside *this* is an `"entry"` object, which actually contains our list of project entries. So we can find that array using `data.feed.entry`.

This info, though, is a little more complex than we need, and not semantically easy to read. We can use `.map()` to return a new array with better names for our keys. Let's take a look:

```javascript
// ... other fetch logic here

    .then(data => {
         const projects = data.feed.entry.map( entry => {
             return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
         })
    })
```

You can see that our `.map()` function pulls some awkwardly named values like `gsx$description.$t` from each Google Sheet entry and gives them more semantic keys. Now we've set `projects` as an array of objects, each with title, image, description, and URL. This will be much easier to use!

## Using your data in your application logic

There's one more thing we need to do to get our data into our app. Running our JavaScript before the data is ready could cause all kinds of trouble; we can force it to wait for the data by wrapping the main application logic in a function that we will invoke *inside* a `.then()` block. The whole thing together looks like this:

```javascript
const url = ''  // insert your Google Sheet JSON API URL as a string here

fetch(url)  // starts the fetch process
    .then( response => response.json() )    // returns the JSON data as a JS object
    .then( data => {
        const projects = data.feed.entry.map( entry => {
             return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
         })

         app(projects)  // invokes the application with projects array as argument
    })

const app = (projects) => {
    // all the application logic goes here
}
```

## Using the data in the DOM

Within your `app()` function, you'll have access to all that newly retrieved, semantically organized project data. Which means you can use jQuery to plug it in however you think is best!

One simple example would be to define a function that creates a DOM element from a project entry:

```javascript
const createProjectElement = (project) => {
    const $div = $('<div>').addClass("project")
    $div.append($('<h2>').text(project.title))
    $div.append($('<img>').attr('src', project.image))
    $div.append($('<p>').addClass("description").text(project.description))
    $div.append($('<a>').attr('href', project.url).text("LINK >>"))
    return $div
}
```

Now you can use various loop methods to add your project divs to your DOM however you like! Let's try using a `.forEach()` loop to plug them straight into the body:

```javascript
projects.forEach(project => {
    const $projectDiv = createProjectElement(project)
    $('body').append($projectDiv)
})
```

The rest is up to you! You might prefer to arrange elements within each project div differently; you might want to add a single featured project (or randomly selected project) in a particular place; you might prefer not to use a `createProjectElement()` function and instead include that logic in your loop; *et cetera*!

The key is that you now know how to retrieve JSON data from an API and include it in the DOM using jQuery. Congratulations!