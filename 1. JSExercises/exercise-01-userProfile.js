export const userObject = {
    userId : 1,
    coins : 10000,
    xp : 0,
    level : 1,
    energy : 100,
    selectedProfession : "miner",
    professionLevel : {
        miner: 3,
        lumberjack: 2,
        fisherman:2,
        smith: 1
    },
    cooldowns : {
        mineCooldown : 30_000, //time in ms
        forgeCooldown : 60_000,
        claimReward : 1_000
    },
    items: []
};

let {energy, coins, selectedProfession, professionLevel:{miner}} = userObject;

function runExercise01() {
    console.log(miner);
}

//If statement to force node js to ignore the results of the exercise
if (process.argv[1] && process.argv[1].endsWith('exercise-01-userProfile.js')) {
  runExercise01();
}