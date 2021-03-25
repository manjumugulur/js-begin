let arr = [-10, -20, 1, 2, 3, 4, 5];

console.log(arr);

// arr.push(10);
// console.log(arr);

// arr.unshift(-10);
// console.log(arr);

// console.log( arr.pop());
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.filter(x => x == 4));
// console.log(arr.filter(function(item, index){
//     return index == 4;
// }));

console.log(arr.map(x => x == 3));
console.log(arr.map(function(item, index) {
    return item * 2;
}));

let someObject = function(a, b) {
    this.a = a;
    this.b = b;
    this.someMethod = () => a + b;
}

const test = new someObject(1, 2);
console.log(test.someMethod());

function outsideFn(a, b) {
    return a + b;
}