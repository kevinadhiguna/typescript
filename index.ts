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

// Note: when creating an interface, for example, 'User', you should name it either 'IUser' or 'UserInterface' to avoid confusion with a classname.

// This is the case that potentially will confuse you :
// class User { ... }
// interface User { ... }

// This is recommended :
// class User { ... }
// interface UserInterface { ... }

// How to create an interface
interface UserInterface {
  username: string;
  password: string;
}

// How to use an interface
const account4: UserInterface = {
  username: 'Kai',
  password: 'K4i'
}

interface PersonInterface {
  name: string;

  // Error : Property or signature expected.
  // age!: number;
  
  age: number;

  // Not mandatory to include 'origin'. In other words, 'age' can be undefined.
  origin?: string;
  // '?' is called Optional Parameter.
}

// Not an error even though I do not include 'origin'
const friend: PersonInterface = {
  name: 'Johnson',
  age: 15
}

// Note : Typescript will tell you even if you make a typo.
// Error : Property 'namee' does not exist on type 'people'. Did you mean 'name'?
// console.log(friend.namee);

// Declaring a function inside an interface
interface MealInterface {
  name: string;
  quantity?: number;
  isSoldOut(): boolean;
  soldPlaces(): string;
}

const chocolate: MealInterface = {
  name: 'Kitkat',
  isSoldOut() { return true; },
  soldPlaces() {
    return "Istanbul";
  }
}

// Note : Function will also occur on autocomplete (ctrl + space)

// This will return 'function isSold()'
console.log('Is chocolate sold out ? ', chocolate.isSoldOut);
// This will return boolean which 'true'
console.log('Is chocolate sold out ? ', chocolate.isSoldOut());

// This will return 'function soldPlaces()'
console.log('Where has it been sold ? ', chocolate.soldPlaces);
// This will return string which is 'Istanbul'
console.log('Where has it been sold ? ', chocolate.soldPlaces());

// == 5. Types and Unions ==
console.log("5. Types and Unions");

// A property which only allows a single daa type
let nickname: string = "mango";

// To allow it having multiple data types, separate data types with a single pipe (|) :
let pageNumber: string | number = "100";

interface HumanInterface {
  id: string;
  name: string;
  surname: string;
}

// Note : It is also okay to assign interface to a variable
let user: HumanInterface | null; // <- This is 'undefined'.

type StudentID = string;

interface StudentInterface {
  // Type is assignable to a variable inside an interface
  id: StudentID;
  name: string;
  class: string;
}

type Popular = string;

// This is completely fine
const popularMovies: string[] = ["Transformers", "Pokemon"];

// Instead of writing code above, you can also write :
const popularShows: Popular[] = ["Kamen Rider", "Power Ranger"];

// Union and Type Aliases
type MaybePopularTag = Popular | null; // <- Hence, it can be either string or null

const dragonsTag: MaybePopularTag = "Draco";

// == 6. Any never void unknown ==
console.log("6. Any never void unknown");

// 'void' in Typescript
// Note : 'void' is a set of undefined and null

// Note : assigning return value, even if it is a function, is redommended.
const doSomething = (): void => {
  console.log("Do Something");
}

// 'any' in Typescript
// Note: 'any' turns off Typescript checks. It allows any data types to be assigned to a variable.

let them: any = 'know'; // <- Avoid 'any' as you can, especially in a big project. It should not be more than 5.

// 'never' in Typescript
// Note: Function with 'never' can not be executed to the end.

// Error : A function returning 'never' cannot have a reachable end point.
// const saySomething = (): never => {
//   console.log("This is never type in TS");
// }

const saySomething = (): never => {
  throw 'never'; // ,- This will make the 'never' type declared on this function disappears.
  console.log("This is a function with 'never' type"); // <- This line of code is never executed.
}

// 'unknown' in Typescript
// Note: 'unknown' was introduced in typescript 3


