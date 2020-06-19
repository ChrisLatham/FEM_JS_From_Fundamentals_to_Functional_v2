function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak: function() {
            console.log("My name is ", name);
        }
    };
}
let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectList = _.map(suspects, function (name){
    return CreateSuspectObjects(name);
});
_.each(suspects, function(name){
    suspectList.push(CreateSuspectObjects(name));
});

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

underscore.map = function(list, callback){
    let storage = [];
    underscore.each(list, function (value, i, list){
        storage.push(callback(value, i, list));
    });
    return storage;
}

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
]
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

let suspectsOnVideo = underscore.filter(videoData, function (suspect) {
    return suspect.present;
});

let suspectsOnVideoNames = underscore.map(suspectsOnVideo, item => {return item.name});

console.log(suspectsOnVideoNames);

underscore.from = arr => {
    return Array.prototype.slice.call(arr)
}

underscore.reduce = function (collection, iteratee, accumulator){
    underscore.each(collection, function (value, index, collection){
        accumulator = accumulator === undefined ? value : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
};

let reduceResult = underscore.reduce([1, 2], (sum, n) => sum + n, 0);

const reduceObj = { 'a': 1, 'b': 2, 'c': 1 }

let reduceResultObj = underscore.reduce(reduceObj, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
},{});

underscore.reduce(reduceObj, (result, value, key) => result[value] || (result[value] = []).push(key),{});

console.log(reduceResult);
console.log(reduceResultObj);