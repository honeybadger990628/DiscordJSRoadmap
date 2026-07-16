const professions = [
    {id: 1, name:"miner", energyCost: 10, xpReward:10},
    {id: 2, name:"lumbjerjack", energyCost: 10, xpReward:10},
    {id: 3, name:"fisherman", energyCost: 8, xpReward:7},
    {id: 4, name:"smith", energyCost: 9, xpReward:8}
];

//map profession name
function getName(item) {
    return item.name;
}

/*(const names = professions.map(professions => profession.getName);
console.log(names);*/

//find miner
const miner = professions.find(profession => profession.name === "miner");
console.log(miner);

//filter professions with energyCost >= 10
const highEnergyProfessions = professions.filter(profession => profession.energyCost >= 10);
console.log(highEnergyProfessions);