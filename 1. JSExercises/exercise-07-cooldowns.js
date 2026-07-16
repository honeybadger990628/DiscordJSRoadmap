const now = Date.now();
const professionWorkCooldownEndsAt = now + 1_0000;

export function isOnCooldown(cooldownEndsAt) {
    if (Date.now() < cooldownEndsAt) {
        return false;
    } else {
        return true;
    }
}

function getRemainingCooldownMs(cooldownEndsAt) {
    return Date.now() - cooldownEndsAt;
}

function runExercise07(){
    console.log(professionWorkCooldownEndsAt)
    //Print the status at the moment of running
    console.log(`The status of the cooldown is: ${isOnCooldown()}`);
    console.log(getRemainingCooldownMs(professionWorkCooldownEndsAt));

    //Test if the cooldown is still on after 7 secs
    setTimeout(()=>{console.log(`Cooldown: ${isOnCooldown(professionWorkCooldownEndsAt)}`);}, 7_000);
}

//If statement to force node js to ignore the results of the exercise
if (process.argv[1] && process.argv[1].endsWith('exercise-07-cooldowns.js')) {
  runExercise07();
}