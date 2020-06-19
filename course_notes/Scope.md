---
tags: ['JavaScript: From Fundamentals to Functional JS']
title: Scope
created: '2020-06-16T08:49:23.766Z'
modified: '2020-06-18T12:21:59.055Z'
---

# Scope

Scope is the area where a variable has access to some value. Usually defined with curly braces.

A global variable is avaiable throughout the entire code base. You usually declare them by not putting a var in front of them, or it can be attached directly to the window object.

~~~JS
var normalVariable; // Local variable
GlobalVariable; // Global defined without "var"
window.GlobalVariable2; // Global attached to window object
~~~

:bulb: [Mocha](https://mochajs.org) is a test framework that runs on Node.js and in the browser.
:bulb: [Chai](https://mochajs.org) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

A function has access to its own local scope variables, meaning any variables contained inside the function can be accessed by the function.

Values passed via parameters to a function can also be accessed just like local scope variables.

Block scope can be created using `let`:

~~~js
var where = 'outer';
{
    let where = 'inner';
}
console.log(where); // 'outer'
~~~

However, if using `var` then no block scope is created:

~~~js
var where = 'outer';
{
    var where = 'inner';
}
console.log(where); // 'inner' - Although this would cause an error where the variable has been duplicated.
~~~

A function has access to the variables contained within the same scope that function was created in. If a variable cannot be located in the local scope, it will move up through the parent scopes until it finds a matching variable.

#### Siblings

When two functions are declared in the same scope they cannot access each other's local variables directly. We would either need to use parent variables or call the fn1 from inside fn2 and have fn1 return the variable we need.

~~~js
function fn1 (){
  let firstVariable = true;
}
function fn2 (){
  let secondVariable = firstVariable; // Undefined
}
~~~





