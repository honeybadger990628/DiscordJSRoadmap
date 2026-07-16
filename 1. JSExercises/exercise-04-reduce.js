//EXERCISE 4:
import { inventory } from "./exercise-03-inventory.js";
console.log("Exercise 4 problems solved:")
//Total Inventory quantity with reduce and generic function
const quantityResult = inventory.reduce(function (acc, obj) { return acc + obj.quantity;},0); //acc = accumulator, obj = object
console.log(`Total Inventory Items counted with a generic function: ${quantityResult}`);

//Total Inventory quantity with reduce and arrow function
const quantityArrowFResult = inventory.reduce((acc, obj) => { return acc + obj.quantity;},0); //acc = accumulator, obj = object
console.log(`Total Inventory Items counted with an arrow function: ${quantityArrowFResult}`);

//Total ores with only reduce
const oreReduceOnly = inventory.reduce((acc, obj) => {
  return obj.category === "ore" ? acc + obj.quantity : acc; //ternary operator ? works as an if, the structure is: condition ? exprIfTrue : exprIfFalse
}, 0);
console.log(`Total Ores counted with reduce only: ${oreReduceOnly}`);


//Total ores with filter + reduce
const oreFilter = inventory.filter(item => item.category === "ore");
const oreFilterReduce = oreFilter.reduce((acc, obj) => { return acc + obj.quantity;},0);
console.log(`Total Ores counted with filter and reduce: ${oreFilterReduce}`);