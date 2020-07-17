## Variables and Keywords - Codealong (10 mins)

Variables are used to store data types into the memory of the computer so that they can be referenced later. There are are 3 variable key words we can use to define variables.  Both let and const were introduced in ECMAScript 2015.

```javascript
var;
let;
const;
```

#### Always use let!

New variables in JavaScript are declared using the [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let "/en/JavaScript/Reference/Statements/var") keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
let a;
=> undefined
```

So lets try assigning a value to variable:

```javascript
const name = 'Alex';
=> undefined

name
=> "Alex"
```

Having made some expressions it becomes evident we want to store these values.

```js
const myNumber = 1;
// or also

const myString = 'Greetings y'all!'
```

The main note to make here is that these variables should always have the `const`, or `let` keyword and use `camelCase`.

#### Assignment Operators

Values are assigned using `=`, and there are also compound assignment statements such as `+=` and `-=`:

```javascript
const x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement, respectively. These can be used as prefix or postfix operators.

In Javascript we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  be careful though,
  since numbers can be floats
  javascript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```
