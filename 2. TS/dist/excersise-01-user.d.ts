export type Profession = 'miner' | 'lumbjerjack' | 'fisherman' | 'smith';
export interface CooldownInfo {
    endsAt: Date;
    durationMs: number;
}
export interface User {
    readonly userId: number;
    userName: string;
    coins: number;
    xp: number;
    level: number;
    energy: number;
    selectedProfession: Profession;
    professionLevels: Record<Profession, number>;
    cooldowns: Record<string, CooldownInfo>;
    inventoryWeight: number;
}
//# sourceMappingURL=excersise-01-user.d.ts.map