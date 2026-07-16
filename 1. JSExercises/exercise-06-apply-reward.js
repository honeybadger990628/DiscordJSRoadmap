import { userObject } from "./exercise-01-userProfile.js";
import { resolveProfessionReward } from "./exercise-05-reward.js";

export function applyReward(userProfile, reward) {
    const rewards = resolveProfessionReward(reward);
    userObject.coins += rewards.coinsEarned;
    userObject.xp += rewards.xpEarned;
    userObject.items.push(...rewards.items); //The spread operator (...) appends the object elements individually, pushing regularly adds a nested object
    console.log(`The user have ${userObject.coins} coins, ${userObject.xp} exp and added ${JSON.stringify(rewards.items)} to the inventory`);
}
