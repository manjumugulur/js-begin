const someObject = {
    _name: 'Time of Initialized',
    _age: 10,
    _height: null,
    //undefinedVariable: 9.5,
    someMethod() {
        console.log(`My name: ${this._name}, Age: ${this['_age']} & Height: ${this._height}`);
    },
    setHeight(height) {
        this._height = height;
    },
    exampleUndefined() {
        console.log(this['undefinedVariable']);
    },
    addUndefined(str) {
        this['undefinedVariable'] = str;
    }
}

someObject.someMethod();
debugger;
console.log(JSON.stringify(someObject));
someObject.setHeight(6.2);
debugger;
someObject.someMethod();
debugger;
someObject.exampleUndefined();
debugger;
console.log(JSON.stringify(someObject));
someObject.addUndefined("Manjunath");
debugger;
someObject.exampleUndefined();
debugger;
console.log(JSON.stringify(someObject));