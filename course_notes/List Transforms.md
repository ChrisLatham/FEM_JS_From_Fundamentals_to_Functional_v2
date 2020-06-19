---
tags: ['JavaScript: From Fundamentals to Functional JS']
title: List Transforms
created: '2020-06-14T14:48:44.228Z'
modified: '2020-06-14T18:33:50.821Z'
---

# List Transforms

## List Transformations

This section is about working with array lists and how the data can be manipulated in different ways using their inbuilt functions.

### Defining `_.each()` / `.forEach()`

The following function returns an object with a few properties, one of which is a function that is executed when the property is called.
~~~js
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak: function () {
            console.log(`My name is ${this.name}`);
        }
    };
}
let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectList = [];
~~~

Speak can be written as follows in ES6.

~~~js
speakES6() {
    console.log(`My name is ${this.name});
}
~~~

The suspect list array can be populated using the following code.

~~~js
for (let i = 0; i < suspects.length; i++){
  suspectList.push(CreateSuspectObjects(suspects[i]))
}
~~~

#### Looping with `_.each()`

You can loop through each item in an array using the forEach method. With [underscore.js](https://underscorejs.org/) this can be written as `_.each()`, as below.

~~~js
_.each(suspects, function (name){
  suspectList.push(CreateSuspectObjects(name));
});
~~~

#### Usage of `_.each()`

Below is an example of how underscore's "each" method can be used. The first parameter is the list, and the second is the action to be taken in the form of a function, or more specifically a callback.

~~~js
let room = ['Observatory', 'Ballroom', 'Library'];
let logger = function (val){
  console.log(val);
};
_.each(rooms, logger);
~~~

#### How `_.each()` Works

Below is an example of how underscores '_.each' function works.

~~~js
let underscore = {};

underscore.each = function (list, callback){
    if (Array.isArray(list)){
        for (let i = 0; i < list.length; i++){
            callback(list[i], i, list)
        }
    } else {
        for (let key in list){
            if (list.hasOwnProperty(key)){
                callback(list[key], key, list);
            }
        }
    }
}

underscore.each(['sally', 'george', 'phil'], function (name, i, list){
    if (list[i + 1]){
        console.log(name, 'is younger than', list[i + 1])
    } else {
        console.log(name, 'is the oldest')
    }
})
~~~

### Defining `_.map()` / `.map()`

#### Why `_.map()` Instead of `_.each()`?

Map is used for copying an array and working with the data without mutating the original.

:bulb: `_.each()` doesn't return a value, where'as `_.map()` does.

As shown below, the map returns a new array that has been mutated.

~~~js
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = function (item){
    return `broken ${item}`;
};
let brokenWeapons = _.map(weapons, function (value){
    return makeBroken(value);
});
console.log(brokenWeapons); // ["broken candlestick", "broken lead pipe", "broken revolver"]
~~~

An example of a practical application of `_.map()` would be to replace `_.each()` in our earlier example. 

~~~js
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {console.log(`My name is ${this.name}`);}
    };
}
let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectList = _.map(suspects, function (name){
    return CreateSuspectObjects(name);
});

/*_.each(suspects, function(name){
    suspectList.push(CreateSuspectObjects(name));
});*/
~~~

We can then use `_.each()` to iterate through the suspectList.

~~~js
_.each(suspectList, function(suspect){
    suspect.speak();
});
~~~

#### How `_.map()` Works

Since we already created `_.each()`, we can use it in our `_.map()` function, instead of creating another loop. 

~~~js
underscore.map = function (list, callback){
    let storage = [];
    _.each(list, function (value, i, list){
        storage.push(callback(value, i, list));
    });
    return storage;
}
~~~

### Defining `_.filter()` / `.filter()`

Filter is a function that takes an array and a callback, which returns a new array that only contains the values that return true from the callback.

:bulb: Map always returns a list that is the same length as the original, where'as fitler can be smaller than the original.

Below is an example of what `_.filter()` is doing under the hood.

~~~js
underscore.filter = function (list, callback){
    // Define temp storage
    const storage = [];
    // Loop the array
    underscore.each(list, function (value, i, list){
        // Check if callback returns a value
        if (callback(value, i, list)) storage.push(value);
    })
    // Return new array
    return storage;
}

underscore.filter(videoData, function (suspect) {
    return suspect.present;
})
~~~
