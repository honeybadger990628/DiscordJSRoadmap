import { userObject } from "./exercise-01-userProfile.js";
import { resolveProfessionReward } from "./exercise-05-reward.js";
import { applyReward } from "./exercise-06-apply-reward.js";
import { isOnCooldown } from "./exercise-07-cooldowns.js";

const now = Date.now();
const professionWorkCooldownEndsAt = now + 1_0000;

function workProfession(userProfile, inventory) {
    if (userObject.selectedProfession !== "") {
        if (isOnCooldown(professionWorkCooldownEndsAt)) {
            return { ok: false, message: "Profession is on cooldown." };
        } else {
            return applyReward(userProfile, userObject.selectedProfession);
        }
    } else {
        return { ok: false, message: "No profession selected." };
    }
}

// Ejecución de prueba
const result = workProfession(userObject, 0);
console.log("Resultado del trabajo:", result);