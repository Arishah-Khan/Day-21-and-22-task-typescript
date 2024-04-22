// Question no 61


// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.


enum VehicleType {
    Car,
    Truck,
    Motorcycle,
  }
  

  console.log(VehicleType.Car)

// Question no 62

// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    subjects: string[];
  }

let student : Student = {
    name: "Tasmiya",
    age: 12,
    subjects: ["Computer", "Chemistry", "English", "Urdu"]
};
console.log(student);

// Question no 63

// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.


type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; 
    width?: number; 
    height?: number; 
  };
  
let circle = {
    kind: "Circle",
    radius: 10
};

let rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};

console.log(circle);
console.log(rectangle);


// Question no 64

// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".


function mergeTextWithNumber(text:string, number:number) : string {

    return `${text}${number}`;
}
let combine = mergeTextWithNumber("Age: ", 30);

console.log(combine);


// Question no 65


// Q65 - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.


function remainder(dividend:number, divisor:number) : number {

    return dividend % divisor;
};

let result = remainder(5, 2);

console.log(result);


// Question no 66


// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false


function checkBothTrue(value1:boolean, value2:boolean):boolean {

    return value1 && value2;;
};

console.log(checkBothTrue(true, false));
