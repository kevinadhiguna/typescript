var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// == 8. Classes in Typescript ==
console.log("8. Classes in Typescript");
// Note: Typescript introduces classes starting from ES6.
// working with classes
var Message = /** @class */ (function () {
    function Message(prefix, postfix) {
        this.prefix = prefix;
        this.postfix = postfix;
    }
    Message.prototype.getFullmessage = function () {
        // Use 'this' to access a property in the same class
        return this.prefix + ' ' + this.postfix;
    };
    return Message;
}());
var message = new Message('Hello', 'Goodbye');
// We will get every properties (in autocomplete) in Message class above since they are public. Everything is public by default.
console.log(message.prefix);
console.log(message.postfix);
console.log(message.getFullmessage);
// Private, Public, and Protected
// Note: Private means that we can only use it inside a class
var Msg = /** @class */ (function () {
    function Msg(pref, postf) {
        this.pref = pref;
        this.postf = postf;
    }
    Msg.prototype.getFullmsg = function () {
        return this.pref + ' ' + this.postf;
    };
    return Msg;
}());
var msg = new Msg('Hi', 'Bye');
// Error : Property 'postf' is private and only accessible within class 'Msg'.
// console.log(msg.postf);
// Error : Property 'pref' is private and only accessible within class 'Msg'.
// console.log(msg.pref);
// This time, it will only show getFullmsg method as the rest of properties, pref and postf, are private. Therefore, you can only access them inside their class.
console.log(msg.getFullmsg);
// readonly in Typescript
var Internet = /** @class */ (function () {
    function Internet(ip) {
        this.ip = ip;
    }
    Internet.prototype.changeInternetID = function () {
        // Error : Cannot assign to 'id' because it is a read-only property.
        // this.id = "bar"; // <- we are unable to change a read-only property. 
    };
    return Internet;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // If we comment getScientificName function below, we will get an error saying : Property 'getFullScientificName' is missing in type 'Animal' but required in type 'AnimalInterface'.
    Animal.prototype.getFullScientificName = function () {
        return this.name;
    };
    return Animal;
}());
var Anime = /** @class */ (function () {
    function Anime() {
        this.period = 5;
    }
    Anime.prototype.getAnimeAge = function () {
        return this.period;
    };
    Anime.animeName = "doraemon";
    return Anime;
}());
var anim = new Anime();
// Only period and getAnimeAge will show up on autocomplete.
console.log(anim.period);
// All properties will be displayed on autocomplete.
console.log(Anime.animeName);
// Inheritance in Typescript
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(Message));
var messageAdmin = new Admin('Foo', 'Bar');
// 'getEditor' and 'setEditor' will also show up. 'editor' doesn't since it is private.
console.log(messageAdmin.getEditor);
// Off-topic: create an object and merge it with a random id
var addId = function (obj) {
    // Generate an id
    var id = Math.random().toString(16);
    // Merge the previous object with a new random id
    return __assign(__assign({}, obj), { id: id });
};
var learner = {
    name: 'Steven'
};
var result = addId(learner);
console.log('result', result); // <- This will return like : result { name: 'Steven', id: '0.cdf4294a666e' }
// == 9. Enum in Typescript ==
console.log("9. Enum in Typescript");
// const statuses = {
//   notSrated: 0,
//   inProgress: 1,
//   done: 2
// }
// console.log(statuses.inProgress); // <- This will return 1
// Enum's name and its properties start with a capital letter (naming convention : add 'Enum' as a Prefix or a Postfix)
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
console.log(StatusEnum.InProgress); // <- This will return 1 as well.
// Note: main benefit of using Enum is : we can use enum as a vlue and a data type
var notStartedStatus = StatusEnum.NotStarted; // <- the data type of notStartedStatus is status. Hover it so, you can see : 'let notStartedStatus: Status'
// Error : Type '"foo"' is not assignable to type 'Status'.
// notStartedStatus = "foo";
// This is valid
notStartedStatus = StatusEnum.Done;
// This is how to assign values to enum. Values are with "=" sign (Be careful!).
var StateEnum;
(function (StateEnum) {
    StateEnum["NotBegin"] = "not Begin";
    StateEnum["InProgress"] = "in progress";
    StateEnum["Done"] = "done";
})(StateEnum || (StateEnum = {}));
console.log(StateEnum.NotBegin); // <- This will return 'not begin'.
