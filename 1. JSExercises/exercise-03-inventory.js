export const inventory = [
    { itemId: "copperOre", quantity:4, category: "ore"},
    { itemId: "goldOre", quantity:2, category: "ore"},
    { itemId: "stick", quantity:10, category: "wood"},
    { itemId: "riverSalmon", quantity:4, category: "fish"}
];

// Encapsulas las soluciones para que no se ejecuten solas al importar
function runExercise03() {
  console.log("--- RESULTS EXERCISE 3 ---");
  
  // filter ore items
  const oreitems = inventory.filter(item => item.category === "ore");
  console.log(oreitems);

  // find stick
  const sticks = inventory.find(item => item.itemId === "stick");
  console.log(sticks);

  // check if user has riversalmon with some
  const salmon = inventory.some(item => item.itemId === "riverSalmon" && item.quantity > 0);
  console.log(salmon);

  // check if user has sacredbark with some
  const sacredb = inventory.some(item => item.itemId === "sacredBark" && item.quantity > 0);
  console.log(sacredb);
}

//If statement to force node js to ignore the results of the exercise 3 when importing the inventory to the exercise 4
if (process.argv[1] && process.argv[1].endsWith('exercise-03-inventory.js')) {
  runExercise03();
}