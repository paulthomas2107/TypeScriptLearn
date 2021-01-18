"use strict";
var USER_TYPE;
(function (USER_TYPE) {
    USER_TYPE[USER_TYPE["ADMIN"] = 100] = "ADMIN";
    USER_TYPE[USER_TYPE["USER"] = 101] = "USER";
    USER_TYPE[USER_TYPE["DEV"] = 102] = "DEV";
    USER_TYPE[USER_TYPE["TESTER"] = 103] = "TESTER";
})(USER_TYPE || (USER_TYPE = {}));
var person = {
    name: "Paul",
    age: 12,
    hobbies: ["stuff", "food"],
    role: [1, "MyRole"],
    user_type: USER_TYPE.ADMIN,
    sortable: true,
};
console.log(person.age);
console.log(person.name);
console.log(person.hobbies);
console.log(person.role);
console.log(person.user_type);
console.log(person.sortable);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var person2 = person;
person2.age = 15;
person2.name = "Rory";
person2.hobbies = ["jetski"];
person2.role = [1, "NewRole"];
person2.user_type = USER_TYPE.TESTER;
person2.sortable = 100;
console.log(person2);
function combine(input1, input2, conversionType, optional) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        if (conversionType === "float" && optional === "YES") {
            var x = input1 + input2;
            return parseFloat(x.toString());
        }
        return input1 + input2;
    }
    if (typeof input1 === "string" && typeof input2 === "boolean") {
        return input1 + input2;
    }
}
console.log(combine(12.2, 13.2, "float", "YES"));
console.log(combine("Maybe", true, "float", "NO"));
function addStuff(n1, n2) {
    return n1 + n2;
}
function logit(stuff) {
    console.log(stuff);
}
addStuff(10, 10);
var myFunction;
myFunction = addStuff;
console.log(myFunction(12, 12));
var anotherFunction;
anotherFunction = addStuff;
var val = anotherFunction(10, 10);
function withCallBack(n1, n2, cb) {
    var x = n1 + n2;
    cb(x);
}
withCallBack(10, 20, function (res) {
    console.log(res);
});
var userInput;
userInput = 10.12;
userInput = "1222222";
function genError(message, code) {
    throw { message: message, errorCode: code };
}
genError('An error happened', 400);
