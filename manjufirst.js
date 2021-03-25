const manjuObject = {
    jobRole: ' DBA',
    depCode: null,
    unDefinedvariable: 10.2,
    yearExperience: 10,

    manjuMethod() {
        console.log(`jobrole : ${this.jobRole}  depCode : ${this.depCode } 
                      unDeinedvariable :  ${this.undefinedVariable}`);
    },

    setdepCode(depCode) {

        this.depCode = 'JUG'
    },
    setunDefinedvariable() {

        console.log(this['undefinedVariable']);
    },
    addUndefined(str) {
        this['undefinedVariable'] = str;

    }
}


manjuObject.manjuMethod();
debugger;
console.log(JSON.stringify(manjuObject));
manjuObject.setdepCode('JUG');
debugger;
manjuObject.setunDefinedvariable();
debugger;
manjuObject.addUndefined("mainak chowdhury");
console.log(JSON.stringify(manjuObject));