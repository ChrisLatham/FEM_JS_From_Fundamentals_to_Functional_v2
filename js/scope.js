const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue : isFalse; // Would return just the function
};
let value = ifElse(true,
    () => {console.log(true);},
    () => {console.log(false);}
); // console.log(true);

let arr = [1, 2];

let result = _.reduce(arr, function(sum, n){
    return sum + n;
},0);
console.log(result);

let obj = {'a': 1, 'b': 2, 'c': 1, 'd': 2, 'e': 3, 'f': 2};
let resultObj = _.reduce(obj, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});
console.log(resultObj);