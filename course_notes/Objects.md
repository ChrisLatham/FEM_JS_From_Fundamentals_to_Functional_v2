---
tags: ['JavaScript: From Fundamentals to Functional JS']
title: Objects
created: '2020-06-10T08:03:15.761Z'
modified: '2020-06-14T16:30:13.917Z'
---

# Objects

## 1. Property Access

### Assignments with Dots

~~~js
var person = {};
person.name = "Mrs. White";
~~~
> #### Equivalent code:
>~~~js
>var person = {
>"name" : "Mrs. White"
>};
>~~~
>
>Quotations around "name" are not required because it assumes it is a string so it becomes coerced.

**When are asome other times you have seen dots in JS?**

:bulb: Anything that ever uses a dot in JavaScript is an object.
:bulb: Only some syntax is acceptable for coercing to a string with dot notation. They cannot start with a number: `person.0;`

~~~js
person.name; // equals "Mrs. White"
~~~

---

### Access with Dots

~~~js
var person = {};
person.name = "Mrs. White";

var who = person.name;
who; //??

person.name = "Mr. White";
who; //??
~~~

:information_source: <span style="color:deepskyblue">*Primitive Values are: string, number, null, boolean, undefined etc. Non-Primitive values are: objects, arrays, functions, promises etc.*</span>

|:bulb: **Primitive values are passed by value, where'as non-primitive values are passed by reference.**|
|:---|
|When a primitive value is passed into a function it will pass a copy of the value and use that within the function, so the variable outside the function scope will not be affected as a new value will be returned. However, when a non-primitive value is passed into a function it will be passed by reference to the original, so any changes made to the non-primitive value within the function will be reflected outside the scope of the function.|

|:bulb: **It is reccommended that you don't mutate data structures and instead copy them and return a new data structure.**|
|:---|
|If you were to pass a non-primitive value into a function and the data structure would need to be mutated, the best practice would be to create a copy of the non-primitive value and mutate the copy to preserve the original.|

:information_source: <span style="color:deepskyblue">*Immutable, means it cannot be mutated or updated/changed.*</span>

---

### Arrays & Brackets

~~~js
var person = [];
person.name = "Mrs. White";

var who = person.name;
who; //??
~~~

The above would evaluate to "Mrs. White", despite being an array. The actualy type of an array is object. 

:information_source: <span style="color:deepskyblue">*The only difference between objects and arrays is that arrays have extra methods on them, such as "push", "pop" etc.*</span>

~~~js
var person = [];
person.name = "Mrs. White";
person[0] = "No One"

person.name // ["name": "Mrs. White"]
person[0] // ["0": "No One"]
~~~

:information_source: <span style="color:deepskyblue">*Array values are usually referenced with brackets person[0], but this is only necessary when the property is a number.*</span>

~~~js
var person = [];
person.name = "Mrs. White";

person[plea] = "I would never!"; // returns undefined
~~~

This code is looking for a variable called "plea", which is not in the scope. If the variable existed it would use it's value as the property name and not the word "plea".

~~~js
var person = [];
var plea = "wouldShe";
person.name = "Mrs. White";

person[plea] = "I would never!";
person[plea]; // ["wouldShe": "I would never!"]
~~~

To set the property name to "plea" the word inside the brackets would need to be in quotation marks. This is also the same as using the dot notation.

~~~js
person["plea"] = "I would never!";
person["plea"]; // ["plea": "I would never!"]
person.plea; // ["plea": "I would never!"]
~~~

## 2. Dot vs Bracket

:bulb: Property string can be passed with dot notation or brackets and quotes. You can also create a property from a string value of a variable when using brackets.

---

### The Rules

|Dots|Brackets|
|:---|:---|
|:heavy_check_mark: strings|:heavy_check_mark: strings|
|:heavy_multiplication_x: numbers|:heavy_check_mark: numbers|
|:heavy_multiplication_x: quotations|:heavy_check_mark: variables|
|:heavy_multiplication_x: weird characters|:heavy_check_mark: weird cahracters|
|:heavy_multiplication_x: expressions|:heavy_check_mark: expressions|

---

### Non-valid Characters

~~~js
var box = {};

box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";

var test = box['^&*'];

box = {"material" : "cardboard",
       "0" : "meow",
       "^&*" : "testing 123"
       }
~~~
---

## 3. ES6 Destructuring

### Destructuring Arrays

Destructing is a shorter syntax for converting data structures to variables. This is very helpful for larger data structures such as JSON.

Below is our data structure "arr" in the form of an object with 3 key value pairs.

~~~js
const arr = [1, 2, 3, 4, 5];
~~~

Our data structure "array" can then be destructured with the following syntax, which will create const variables using the key names selected in the left side. 

~~~js
const [a, b, c, d, e] = arr;

console.log(a, b, c, d, e); // 1, 2, 3, 4, 5
~~~

#### Short-hand Syntax:

~~~js
var [a, b] = [1, 2];
console.log(a, b); // 1 2
~~~

### Some Other Examples of Destructuring Arrays

#### Ommitting values 

This works slightly different to objects when they are being referenced numerically. In this case you would just leave a blank space.

~~~js
var [a, , b] = [1, 2, 3];
console.log(a, b); // 1 3
~~~

#### Combining with the Spread Operator

You can also combine them with the spread operator, which will take the remaining values and combine them into a single array variable; in this case "b".

~~~js
var [a, ...b] = [1, 2, 3];
console.log(a, b); // 1 [2, 3]
~~~

#### Swapping values 

It is now much easier to swap values in an array using destructing. You no longer have to use an intermediary temp variable.

~~~js
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b); // 2 1

// Old method:
// var temp = a;
// a = b;
// b = temp;
~~~

#### Advanced Deep Arrays

This should generally never be done, as it is easier to read if you use objects, but it is possbile to do nested arrays and destructure them, but it is extremely confusing.

~~~js
var [a, [b, [c, d]]] = [1. [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d); 
//  Output
// "a: 1 b: 2 c: [[3, 4], 5], d:6"
~~~

### Destructuring Objects

Getting values from objects.

Below is our data structure "obj" in the form of an object with 3 key value pairs.

~~~js
const obj = {name: "Rusty", room: "Kitchen", weapon: "Hammer", age: "35"};
~~~

Our data structure "obj" can then be destructured with the following syntax, which will create const variables using the key names selected in the left side. 

You can pick and choose which parts of the data you want to destructure. For example we didn't choose age. This is much easier to do than in an array.

~~~js
const {name, room, weapon} = obj;
~~~

#### Fail-Safe

If the key doesn't match it will return undefined instead of throwing an error.

~~~js
var {user: x} = {user2: 5};
console.log(x); // undefined
~~~

#### Short-hand Syntax

Below is the short-hand syntax for desctructing an object, where the variables are assigned on the same line the object is created. However, doing it this way means the object itself is not defined.

~~~js
var {a, b} = {a: 1, b: 2};
console.log(a, b); // 1 2
~~~

#### Declaring the Variables Before Value Assignment

This is a bit messier, but could be useful in some situations such as where you need to declare the variables before assnging their values. Usually for the sake of scope.

~~~js
var a, b;
({a, b} = {a: 1, b: 2});
console.log(a, b); // 1 2
~~~

#### Destructuring an Object Returned from a Function/Method.

~~~js
function doSomething(){
  return {a: 1, b: 2}
};

var {a, b} = doSomething();
console.log(a, b); // 1 2
~~~

## 4. Nesting + Loops

### Nested Data Structure

Example of nesting, as seen in data structures like JSON.

~~~js
const game = {};
game["suspects"] = [];

game.suspects.push({
  name: "Rusty",
  color: "Orange"
});

// Object Literal:

const game = {
  "suspects": [
    {
      name: "Rusty",
      color: "Orange"
    }
  ]
}
~~~

### Looping the Nested Data Structure

#### Looping Through the Suspects Array

Below are some methods for looping the "suspects" array in the "game" object. Using `forEach` is much easier to read in this case. However it is best to use an "indexed for loop" for arrays because they are mapped using numerical keys.

The third option "For In" is for looping through everything inside objects. This will return the values of the "game" object at the top-level, which, in this case, is an array containing two other objects.

:bulb: Using game.suspects instead of game["suspects"] is more efficient.

~~~js
const game = {
  "suspects": [
    {
      name: "Rusty",
      color: "Orange"
    },
    {
      name: "Scarlet",
      color: "Red"
    }
  ]
};

// 1. forEach
game.suspects.forEach(function(suspects){
  console.log(suspects);
});

// 2. for i
for (i = 0; i < game.suspects.length; i++){
  console.log(game.suspects[i]);
};

// 3. for in
for(let values in game){
  console.log(game[values]);
}
~~~

#### Looping Through the Objects inside the Suspects Array

~~~js
const game = {
  "suspects": [
    {
      name: "Rusty",
      color: "Orange"
    },
    {
      name: "Scarlet",
      color: "Red"
    }
  ]
};

game.suspects.forEach(function(suspects){
    let suspected = (suspects.name === "Rusty" ? 'Yes' : 'No');
    console.log(`Name: ${suspects.name}, Color: ${suspects.color}, Suspected: ${suspected}`)
});

~~~

## 5. Nesting + Destructuring

Desctructing the following data structure into two variables, one for each color.

There are several ways to achieve this. I prefer the second solution.

~~~js
let suspects = [
  {
    name: "Rusty",
    color: "Orange"
  },
  {
    name: "Scarlet",
    color: "Red"
  }
];

// Solution 1
let [color1, color2] = [suspects[0].color, suspects[1].color];

// Solution 2
let [{color: firstColor}, {color: secondColor}] = suspects;
~~~
