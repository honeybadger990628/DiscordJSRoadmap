export type ItemCategory = 'ore' | 'wood' | 'fish' | 'tool' | 'consumable';
export interface ItemDefinition {
    readonly id: number;
    name: string;
    category: ItemCategory;
    buyPrice: number;
    sellPrice: number;
    stackable: boolean;
}
//# sourceMappingURL=excersise-02-items.d.ts.map