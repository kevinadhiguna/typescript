// == 0. Initial ==
console.log("== 0. Initial ==");
console.log("Hello Typescript!");
// == 1. Typing Convention ==
console.log("== 1. Typing Convention ==");
var hello = "world";
// Error : Type 'undefined[]' is not assignable to type 'string'
// hello = [];
var hi = "World";
console.log('Type of "hello" is ', typeof (hello));
console.log('Type of "hi" is ', typeof (hi));
// == 2. Arrow Function ==
console.log("2. Arrow Function");
// The 'string' before arrow (=>) indicates the type that this function returns.
var getFullName = function (firstname, lastname) {
    // This is valid only if return type of function is 'string'.
    return "My name is " + firstname + lastname;
    // This is valid only if return type of function is 'void' or 'any'.
    // console.log('My name is ', firstname, lastname);
};
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
var account2 = {
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
// How to use an interface
var account4 = {
    username: 'Kai',
    password: 'K4i'
};
// Not an error even though I do not include 'origin'
var friend = {
    name: 'Johnson',
    age: 15
};
var chocolate = {
    name: 'Kitkat',
    isSoldOut: function () { return true; },
    soldPlaces: function () {
        return "Istanbul";
    }
};
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
var nickname = "mango";
// To allow it having multiple data types, separate data types with a single pipe (|) :
var pageNumber = "100";
// Note : It is also okay to assign interface to a variable
var user; // <- This is 'undefined'.
// This is completely fine
var popularMovies = ["Transformers", "Pokemon"];
// Instead of writing code above, you can also write :
var popularShows = ["Kamen Rider", "Power Ranger"];
var dragonsTag = "Draco";
