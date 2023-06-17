// lesson11 ===================================
console.log("lesson11 ===================================")
//There are 3 type of String in javascript:
// 1. singleQuotes
// 2. doubleQuotes
// 3. backticks
// point: singleQuotes and doubleQuotes are absolutely same but backticks have extra functionality.
// you can execute statements in a backticks string.
let firstName = 'Hossein';
let lastName = "Jabani";
let text = `Your full name is ${firstName + " " +lastName}`
console.log(text)
// typeof operator can show various types in javascript you can see this link: https://www.w3schools.com/js/js_typeof.asp
console.log("type of lastName is: " + typeof lastName)
// lesson12 ===================================
console.log("lesson12 ===================================")
// javascript is loosely typed language and all numbers have number type (not like java such as int, double, ...)
// lesson13 ===================================
console.log("lesson13 ===================================")
// lesson14 ===================================
console.log("lesson14 ===================================")
let undefinedVar;
let undefinedVar2 = undefined;
console.log("typeof let undefinedVar; --> " + undefinedVar);
console.log("typeof let undefinedVar2 = undefined; --> " + undefinedVar2)
let nullValue = null;
console.log("nullValue --> " + nullValue)
console.log("typeof let nullValue = null; --> " + typeof nullValue)
// the type of null is object and this is a javascript bug! but because of many project depends on this
// bug so javascript community decide to preserve this bug!... :)
// lesson15 ===================================
console.log("lesson15 ===================================");
// Objects
let person = {
    name: "Mahan",
    age: 1.5
}
console.log("person object is:");
console.log(person)
console.log("typeof Person is ==> " + typeof person);
console.log("name of person is ==> " + person.name + " and the age of person is ==> " + person.age);
// Array in javascript
let arr = [1, 'Hossein', 1.4, person];
console.log(arr);
// lesson16 ===================================
console.log("lesson16 ===================================");
let date = new Date();
console.log(date)
// Statically typed language ==> java, C++, C
// Dynamically language ==> javascript, python
// lesson17 ===================================
console.log("lesson17 ===================================");
// Operators in javascript:
// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators

// lesson18 ===================================
console.log("lesson18 ===================================");
// 1. Arithmetic Operators:
let a1 = 2;
let a2 = 20;
// Exponent:
console.log("Exponent of 20 with 2 ==> " + 20 ** 2);
console.log("Modulo Operator (20 % 3): " + a2 % 3);
console.log("Increment Operator (a2++): " + a2++);
console.log("Increment Operator (++a2): " + ++a2);
// lesson19 ===================================
console.log("lesson19 ===================================");
// lesson20 ===================================
console.log("lesson20 ===================================");
// Loose Equality
// Doesn't compare DATA TYPES
console.log('Loose Equality (20 == "20"): ' + (20 == "20"));
console.log('Loose Unequality (20 != "20"): ' + (20 != "20"));
// Strict Equality
// Compares VALUES and DATA TYPES
console.log('strict Equality (20 === "20"): ' + (20 === "20"));
console.log('strict Unequality (20 !== "20"): ' + (20 !== "20"));

