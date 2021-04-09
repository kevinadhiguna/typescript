console.log("Hello Typescript!");

let hello: string = "world";

// Error : Type 'undefined[]' is not assignable to type 'string'
// hello = [];

let hi: String = "World";

console.log('Type of "hello" is ', typeof(hello));
console.log('Type of "hi" is ', typeof(hi));
