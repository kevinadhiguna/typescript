console.log("Hello Typescript!");
var hello = "world";
// Error : Type 'undefined[]' is not assignable to type 'string'
// hello = [];
var hi = "World";
console.log('Type of "hello" is ', typeof (hello));
console.log('Type of "hi" is ', typeof (hi));
var getFullName = function (firstname, lastname) {
    console.log('My name is ', firstname, lastname);
};
getFullName('john', 'doe');
