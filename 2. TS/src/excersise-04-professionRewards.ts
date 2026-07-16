import { type ItemDefinition } from "./excersise-02-items";

export interface Reward {
    coins: number;
    xp: number;
    energy: number;
    items: ItemDefinition[];
}

export type WorkResult = 
  | {
      ok: true;
      reward: Reward;
    }
  | {
      ok: false;
      message: string;
    };