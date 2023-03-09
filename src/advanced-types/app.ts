// Advanced Types

// Intersection Types
type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Jack",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// const addValues = (a: Combinable, b: Combinable) => {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// };

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privilages" in emp) {
    console.log("Privilages: " + emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

// class Truck {}
// type Vehicle = Car | Truck;
// if (vehicle instanceof Truck) {}

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird": {
      speed = animal.flyingSpeed;
      break;
    }
    case "horse": {
      speed = animal.runningSpeed;
      break;
    }
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 737 });
moveAnimal({ type: "horse", runningSpeed: 34 });

// Type Casting

// const userInputElement = <HTMLInputElement>(document.getElementById("user-input"));
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

userInputElement.value = "Hi there!";

// Index properties

interface ErrorContainer {
  // email: 'Not a valid email', username: 'Must start with a character!'
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a character!",
};

// Function overloads

function addValues(a: number, b: number): number;
function addValues(a: string, b: string): string;
function addValues(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addValues("Max", "Mark");
result.split(" ");

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing

const userInput = null;

const storedData = userInput ?? "DEFAULT";
