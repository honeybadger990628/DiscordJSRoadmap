const inventory = [
  { itemId: "copper_ore", quantity: 5 },
  { itemId: "pine_wood", quantity: 2 }
];

function addItemToInventory(inventory, itemId, quantity) {
    //We use find to reference the item that exists
    const existingItem = inventory.find(item => item.itemId === itemId);
    
    if (existingItem) {
        //If exists then we add it the quantity
        existingItem.quantity += quantity;
    } else {
        //If it doesn't exist we add it to the array
        inventory.push({ itemId, quantity });
    }
    
    return inventory;
}

const item1 = "copper_ore";
const item2 = "river_fish"

addItemToInventory(inventory, item1, 3)
addItemToInventory(inventory, item2, 4)

// We use JSON.stringify or console.dir to force the terminal to show the real content
console.log("Resultado item1:", JSON.stringify(inventory.filter(item => item.itemId === item1), null, 2));
console.log("Resultado item2:", JSON.stringify(inventory.filter(item => item.itemId === item2), null, 2));

//Print the whole invenyory to check
console.log("\nComplete Inventory:");
console.dir(inventory, { depth: null });