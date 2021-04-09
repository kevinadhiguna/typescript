// == 0. Initial ==
console.log("== 0. Initial ==");
console.log("Hello Typescript!");

// == 1. Typing Convention ==
console.log("== 1. Typing Convention ==");
let hello: string = "world";

// Error : Type 'undefined[]' is not assignable to type 'string'
// hello = [];

let hi: String = "World";

console.log('Type of "hello" is ', typeof(hello));
console.log('Type of "hi" is ', typeof(hi));

// == 2. Arrow Function ==
console.log("2. Arrow Function");
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

// == 3. Creating Objects ==
console.log("3. Creating Objects");

// Typescript understands objects (data types) by default

// Case 1 : Assigning 'object' as data type
// const account1: object = {
//   username: 'john',
//   password: 'John123',
// };

// Error : Property 'username' does not exist on type 'object'.
// console.log('Account name is ', account1.username);

// Case 2 : Assigning {} (object) as data type 
const account2: {username: string, password: string} = {
  username: 'doe',
  password: 'Adm1n'
};

console.log('Password is ', account2.password);

// Case 3 : Not including all declared variables in the object

// Error : Property 'password' is missing in type '{ username: string; }' but required in type '{ username: string; password: string; }'.
// const account3: {username: string, password: string} = {
//   username: 'Joe',
// };

// console.log('Password is ', account3.username);

// == 4. Interfaces ==
console.log("4. Interfaces");

// Definition : Interface is a special entity inside Typescript which helps us to create objects with some properties.

// How to create an interface
interface User {
  username: string;
  password: string;
}

// How to use an interface
const account4: User = {
  username: 'Kai',
  password: 'K4i'
}

interface people {
  name: string;

  // Error : Property or signature expected.
  // age!: number;
  
  age: number;

  // Not mandatory to include 'origin'. In other words, 'age' can be undefined.
  origin?: string;
  // '?' is called Optional Parameter.
}

// Not an error even though I do not include 'origin'
const friend: people = {
  name: 'Johnson',
  age: 15
}

// Note : Typescript will tell you even if you make a typo.
// Error : Property 'namee' does not exist on type 'people'. Did you mean 'name'?
// console.log(friend.namee);
