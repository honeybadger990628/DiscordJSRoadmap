export type ItemCategory = 'ore' | 'wood' | 'fish' | 'tool' | 'consumable';

export interface ItemDefinition {
    readonly id: number;
    name: string;
    category: ItemCategory;
    buyPrice: number;
    sellPrice: number;
    stackable: boolean;
}

const newItem1:  ItemDefinition = {
    id: 1,
    name: 'sticks',
    category: 'wood',
    buyPrice: 5,
    sellPrice: 2,
    stackable: true
}

const newItem2:  ItemDefinition = {
    id: 2,
    name: 'salmon',
    category: 'fish',
    buyPrice: 15,
    sellPrice: 15,
    stackable: true
}

const newItem3:  ItemDefinition = {
    id: 3,
    name: 'pickaxe',
    category: 'tool',
    buyPrice: 40,
    sellPrice: 30,
    stackable: false
}

const newItem4:  ItemDefinition = {
    id: 4,
    name: 'copperOre',
    category: 'ore',
    buyPrice: 20,
    sellPrice: 15,
    stackable: true
}

const newItem5:  ItemDefinition = {
    id: 5,
    name: 'potion',
    category: 'consumable',
    buyPrice: 20,
    sellPrice: 10,
    stackable: true
}