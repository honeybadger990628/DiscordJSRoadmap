"use strict";
//Types
Object.defineProperty(exports, "__esModule", { value: true });
//Define a variable
const var_string = "Text"; //Strings can use ' " ` for encapsulating text
const var_bool = true;
//For the number variables 
const var_decimal = 6; //Integer
const var_hex = 0xf00d; // Hexadecimal
const var_binary = 0b1010; // Binary
const var_octal = 0o744; // Octal
const var_float = 3.14; // Floating point
const var_bigNumber = BigInt(9007199254740991); //Numbers larger than 2^53 - 1
//Symbol variables, works as a tag, in this case 'uniqueKey' is a Symbol for a description so it's being used in the object as a key
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
//Type any is the flexible type, requires let since it's reassignable
let var_any = true;
var_any = 10;
//In typescript there is undefined and null as well
const var_undefined = undefined;
const var_null = null;
const newUser = {
    id: 1,
    username: "alice_dev",
    email: "alice@example.com"
};
const carModel = "Corolla";
//Enum
//Special class that represents group of constants.
//Numeric enums, it starts to count increasing its value per element of the enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
// Custom initialization
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized"; // 401 (auto-increments from 400)
})(StatusCode || (StatusCode = {}));
//String enums, can be readed, it does not increment like numerical enums
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
let currentRole = UserRole.Admin;
//Generics are definitions but using angle brackets for the types of the variables <>
//Generic function
// The <T> acts as a variable for the type
function identity(arg) {
    return arg;
}
// 1. Explicitly setting the type
const output1 = identity("Hello World");
// 2. Type Inference (TypeScript automatically figures out T is a number)
const output2 = identity(42);
const userResponse = {
    status: "success",
    timestamp: 1718000000,
    data: { id: 1, name: "Alice" }
};
//Generic class
class Box {
    content;
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("Secret Message"); // Inferred as Box<string>
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
let myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
//Record defines an object type with a specific key type and value type
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
const bob2 = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
//Classes are basically the same as javascript
//# sourceMappingURL=theory.js.map