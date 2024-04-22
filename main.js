// Question no 61
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
var student = {
    name: "Tasmiya",
    age: 12,
    subjects: ["Computer", "Chemistry", "English", "Urdu"]
};
console.log(student);
var circle = {
    kind: "Circle",
    radius: 10
};
var rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
// Question no 64
// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function mergeTextWithNumber(text, number) {
    return "".concat(text).concat(number);
}
var combine = mergeTextWithNumber("Age: ", 30);
console.log(combine);
// Question no 65
// Q65 - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function remainder(dividend, divisor) {
    return dividend % divisor;
}
;
var result = remainder(5, 2);
console.log(result);
// Question no 66
// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false
function checkBothTrue(value1, value2) {
    return value1 && value2;
    ;
}
;
console.log(checkBothTrue(true, false));
