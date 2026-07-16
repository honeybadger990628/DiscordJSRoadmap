import type { ItemDefinition } from "./excersise-02-items";
import type { WorkResult } from "./excersise-04-professionRewards";
export interface User {
    id: string;
    username: string;
    coins: number;
    xp: number;
    level: number;
    energy: number;
}
export interface InventoryItem {
    userId: string;
    itemId: number;
    quantity: number;
}
export interface UserRepository {
    getUser(userId: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUser(userId: string, data: Partial<User>): Promise<User>;
}
export interface InventoryRepository {
    getInventory(userId: string): Promise<InventoryItem[]>;
    addItem(userId: string, itemId: number, quantity: number): Promise<InventoryItem>;
    removeItem(userId: string, itemId: number, quantity: number): Promise<boolean>;
    hasItem(userId: string, itemId: number, quantity: number): Promise<boolean>;
}
export interface ProfessionService {
    gather(userId: string, profession: "woodcutting" | "mining" | "fishing"): Promise<WorkResult>;
    craftItem(userId: string, itemId: number): Promise<WorkResult>;
}
export interface ShopService {
    buyItem(userId: string, itemId: number, quantity: number): Promise<WorkResult>;
    sellItem(userId: string, itemId: number, quantity: number): Promise<WorkResult>;
    getShopCatalog(): Promise<ItemDefinition[]>;
}
//# sourceMappingURL=excersise-05-architecture.d.ts.map