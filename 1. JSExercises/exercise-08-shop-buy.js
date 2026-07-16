import { userObject } from "./exercise-01-userProfile.js";

const shopItem = {
    itemId: "healing_herb",
    buyPrice: 120
}

function buyItem(userProfile, shopItem, quantity) {
    const totalCost = shopItem.buyPrice * quantity;
    if (userProfile.coins >= totalCost) {
        userProfile.coins -= totalCost;
        console.log(`The total cost of this transaction is ${totalCost} coins!`)
        console.log(`The user ${userProfile.userId} bought ${quantity} ${shopItem.itemId} and now has a balance of ${userProfile.coins} coins.`);
    } else {
        console.log("The user does not have enough money!")
    }
}

buyItem(userObject, shopItem, 5);