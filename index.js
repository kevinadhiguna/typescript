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
// == 6. Any never void unknown ==
console.log("6. Any never void unknown");
// 'void' in Typescript
// Note : 'void' is a set of undefined and null
// Note : assigning return value, even if it is a function, is redommended.
var doSomething = function () {
    console.log("Do Something");
};
// 'any' in Typescript
// Note: 'any' turns off Typescript checks. It allows any data types to be assigned to a variable.
var them = 'know'; // <- Avoid 'any' as you can, especially in a big project. It should not be more than 5.
// 'never' in Typescript
// Note: Function with 'never' can not be executed to the end.
// Error : A function returning 'never' cannot have a reachable end point.
// const saySomething = (): never => {
//   console.log("This is never type in TS");
// }
var saySomething = function () {
    throw 'never'; // ,- This will make the 'never' type declared on this function disappears.
    console.log("This is a function with 'never' type"); // <- This line of code is never executed.
};
// 'unknown' in Typescript
// Note: 'unknown' was introduced in typescript 3
// At the beginning 'any' and 'unknown' look the exactly same.
var vAny = 10;
var vUnknown = 10;
// This will work because of 'any' type
var s1 = vAny;
// Error : Type 'unknown' is not assignable to type 'string'.
// let s2: string = vUnknown; // <- we can't directly assign 'unknown' in other type.
console.log(vAny.foo()); // <- Typescript doesn't care because its data type is 'any'.
// Error : Property 'foo' does not exist on type 'unknown'.
// console.log(vUnknown.foo());
// Short Conclusion : we need to convert data type from 'unknown' to another data type.
// Here comes Type Assertion : converting one type to another.
// First we convert 'unknown' type to 'string'. Then assign 'string' type to s2.
var s2 = vUnknown; // 'as' operator makes type assertion.
var paginationNumber = "1";
// Error : Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// let numericPaginationNumber: number = paginationNumber as number;
// So, we need to convert paginationNumber to 'unknown' first. Then convert it to 'number'.
var numericPaginationNumber = paginationNumber;
// == 7. Working with DOM ==
console.log("7. Working with DOM");
// Case 1 :
var someElement = document.querySelector('.foo'); // <- someElement is considered as an 'Element'.
// Error : Property 'value' does not exist on type 'Element'.
// console.log('someElement', someElement.value);
// Common Fix (Incorrect way but a well-known fix) :
console.log('someElement', someElement.value); // <- This is BAD since we just disabled Typescript check by converting the someElements from 'Element' to 'any'. Thus, 'any' will disable Typescript check.
// Case 2 :
var someElement2 = document.querySelector('.foo'); // <- someElement2 is considered as an 'HTMLInputElement'.
// Not an error since someElement2 is an HTMLInputElement and HTMLInputElement has property '.value'. 
console.log('someElement2', someElement2.value);
// Adding a Listener
someElement2.addEventListener('blur', function (event) {
    // Error : Property 'value' does not exist on type 'EventTarget'.
    // console.log('event', event.target.value);
    // Tell Typescript that target is an HTMLInputElement. Hence, target will have property '.value'.
    var target = event.target;
    console.log('event', target.value); // <- Only needs 'target.value' instead of 'event.target.value'.
});
