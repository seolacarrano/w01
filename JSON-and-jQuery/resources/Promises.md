# `fetch()` in JavaScript

Front-end development often involves getting information from a remote API using `fetch()`. On its surface, `fetch()` is quite simple and requires only one parameter:
```
fetch('http://the.url/that/iWant/toRetrieve')
```
Great! This should return the data you want, right? Unfortunately, there are two crucial obstacles in the way:
1) The data can take a while to arrive from the remote server.
2) It will arrive in the form of an HTTP response with headers and other data. The data you want will be in the response body.

## Promises and `.then()`
The first problem above is resolved by the fact that `fetch()` returns a special object called a `Promise`, which represents the *eventual* completion (or failure) of the request. On the next clocktick after your `fetch()` command, your request will almost certainly be unresolved, so trying to use the data on subsequent lines of your code will result in `undefined` or worse.

Fortunately, the `Promise` object includes a `.then()` method that executes a callback function only *after* the request is resolved. The callback function will automatically be passed one argument -- the now-fulfilled value of the `Promise`.

```
fetch('http://the.url/that/iWant/toRetrieve')
    .then(resolvedValue => console.log(resolvedValue))
```
This will get us a console log of the actual response rather than `Promise <pending>`, at least, but it still looks like an HTTP response rather than a JS object.

## `.then()` and JSON
Fortunately, callback functions inside the `.then()` method can use the `.json()` method to convert the HTTP response body into JavaScript objects. This *also* creates a `Promise`, but once it has resolved, it returns a JS object. Below is one typical way this is used:

```
fetch('http://the.url/that/iWant/toRetrieve')
    .then(resolvedValue => resolvedValue.json())
    .then(data => {
        // `data` now contains JS objects derived from your JSON data
    })
```

The callback function in the *second* `.then()` now has access to a JS object called `data`, which holds the information we want to use.

## Keep learning
Promises and asynchronous programming are a complex topic. You'll find much more to learn, but now you know the basics!