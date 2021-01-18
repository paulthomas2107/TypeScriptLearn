enum USER_TYPE {
  ADMIN = 100,
  USER,
  DEV,
  TESTER,
}

type Sortable = number | boolean;

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  user_type: USER_TYPE;
  sortable: Sortable;
} = {
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

for (const hobby of person.hobbies) {
  console.log(hobby);
}

const person2 = person;
person2.age = 15;
person2.name = "Rory";
person2.hobbies = ["jetski"];
person2.role = [1, "NewRole"];
person2.user_type = USER_TYPE.TESTER;
person2.sortable = 100;
console.log(person2);

function combine(
  input1: number | string,
  input2: string | number | boolean,
  conversionType: string,
  optional: "YES" | "NO"
) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    if (conversionType === "float" && optional === "YES") {
      let x: number = input1 + input2;
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

function addStuff(n1: number, n2: number): number {
  return n1 + n2;
}

function logit(stuff: string): void {
  console.log(stuff);
}
addStuff(10, 10);

let myFunction: Function;
myFunction = addStuff;
console.log(myFunction(12, 12));

let anotherFunction: (a: number, b: number) => number;
anotherFunction = addStuff;
let val = anotherFunction(10, 10);

function withCallBack(n1: number, n2: number, cb: (result: number) => void) {
  let x: number = n1 + n2;
  cb(x);
}

withCallBack(10, 20, (res: number) => {
  console.log(res);
});

let userInput: unknown;
userInput = 10.12;
userInput = "1222222"

function genError(message: string, code: number) {
  throw {message: message, errorCode: code};
}

genError('An error happened', 400);