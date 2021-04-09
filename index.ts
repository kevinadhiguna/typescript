console.log("Hello Typescript!");

let hello: string = "world";

// Error : Type 'undefined[]' is not assignable to type 'string'
// hello = [];

let hi: String = "World";

console.log('Type of "hello" is ', typeof(hello));
console.log('Type of "hi" is ', typeof(hi));

// The 'string' before arrow (=>) indicates the type that this function returns.
const getFullName = (firstname: string, lastname: string): string => {
  // This is valid only if return type of function is 'string'.
  return "My name is " + firstname + lastname;

  // This is valid only if return type of function is 'void' or 'any'.
  // console.log('My name is ', firstname, lastname);
}

getFullName('john', 'doe');

// Error : Argument of type 'boolean' is not assignable to parameter of type 'string'.
// getFullName(true, "doe");

// Error : Argument of type 'undefined[]' is not assignable to parameter of type 'string'.
// getFullName([], True);
