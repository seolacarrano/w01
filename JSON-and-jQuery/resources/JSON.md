# What is JSON?

First off, some basic info:
* JSON is an acronym for `JavaScript Object Notation`.
* JSON.org describes JSON as "a lightweight data interchange format."

What does this mean, and what are the strengths and limitations of JSON? Take a few minutes to look at these pages:
* [JSON.org](https://www.json.org/json-en.html)
* [Wikipedia entry for JSON](https://en.wikipedia.org/wiki/JSON)

## JSON is a specific way to exchange data

As the name implies, JSON is based on JavaScript, and it can *look* a lot like a JavaScript object. Take a look:

```
{
    "titleOfList": "My Excellent List of Things",
    "listAuthor": "Jeremy Rose",
    "listIsAwesome": true,
    "numberOfItems": 2,
    "items": [
        {
            "title": "Item 1",
            "url": "http://items.org/1",
            "dateAdded": "2020-02-10T18:50:23.553Z"
        },
        {
            "title": "Item 2",
            "url": "http://items.org/2",
            "dateAdded": "2020-03-01T14:33:23.553Z"
        }
    ]
}
```

If you know JavaScript, JSON format will look familiar. Strings, numbers, `null`, boolean values, arrays, and JS objects can all be included. One key difference from JavaScript is that the keys in key/value pairs must be wrapped in quotation marks.

By following these rules, developers can use JSON to send information that can be interpreted not just by JavaScript but by a wide variety of programming languages.

## How does JavaScript read and write JSON?

JavaScript includes an object called `JSON` with two easy-to-use methods: `.stringify()` and `.parse()`. Passing a JavaScript object as an argument within `JSON.stringify()` will return a JSON string; passing a JSON string as an argument within `JSON.parse()` will return a JavaScript object. Many other languages have similar methods.

JavaScript also includes a method to parse JSON from within the `fetch()` method.