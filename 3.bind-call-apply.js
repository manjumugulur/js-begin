const bindObj = JSON.parse('{ "name": "Manjunath", "height": 6.2}');

const someFunction = function() {
    console.log(`Hello! ${this.name}, your height is ${this.height}`);
};

const bindFunction = someFunction.bind(bindObj);
bindFunction(); //bound function

const someFunction2 = function(address, pin) {
    console.log(
        `Hello! ${this.name}, your height is ${this.height} & you're from ${address}, ${pin}`
    );
};

someFunction2.apply(bindObj, ['Bangalore', 560080]);
someFunction2.call(bindObj, 'Bangalore', 560080);