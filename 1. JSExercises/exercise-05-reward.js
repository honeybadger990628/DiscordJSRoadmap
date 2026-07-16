export function resolveProfessionReward(professionId) {
    if (professionId === "miner") {
        return {coinsEarned: 25, xpEarned: 15, items: [{ itemId: "coppperOre", quantity: 2}]};
    } else if (professionId === "lumberjack") {
        return {coinsEarned: 18, xpEarned: 12, items: [{ itemId: "sticks", quantity: 3}]};
    } else if (professionId === "fisherman") {
        return {coinsEarned: 15, xpEarned: 10, items: [{ itemId: "riverSalmon", quantity: 2}]};
    } else if (professionId === "smith") {
        return {coinsEarned: 30, xpEarned: 20, items: [{ itemId: "ironBar", quantity: 1}]};
    } else {
        return "Unspecified";
    }
}

function runExercise05() {
    console.log(resolveProfessionReward("miner"));
    console.log(resolveProfessionReward("lumberjack"));
    console.log(resolveProfessionReward("fisherman"));
    console.log(resolveProfessionReward("smith"));
}

//If statement to force node js to ignore the results of the exercise
if (process.argv[1] && process.argv[1].endsWith('exercise-05-reward.js')) {
  runExercise05();
}