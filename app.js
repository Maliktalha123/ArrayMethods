var students = ["Talha", "Bilal", "Abbasi", true, 923211814121, "Zeeshan"];

console.log(students);
students[2] = "Shahbaz";
console.log(students);
students[students.length] = "Afzal";

//  pop and push
var arr = ["Apple", "Banana", "Orange", "Grapes"];
console.log(arr);
arr.pop();
console.log(arr);
var userFruit = prompt("Enter a Fruit Name");
arr.push(userFruit);
console.log(arr);

//  Shift and unshift
var arr = ["Apple", "Banana", "Orange", "Grapes"];
console.log(arr);
arr.shift();
console.log(arr);
var userFruitSecond = prompt("ENter Second Fruit");
arr.unshift(userFruitSecond);
console.log(arr);

//    Splice
