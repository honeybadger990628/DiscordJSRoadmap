export interface Repository<T> {
    create(item: T): Promise<T>;
    update(id: number, item: Partial<T>): Promise<T | null>;
    delete(id: number): Promise<boolean>;
    findById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
}
//# sourceMappingURL=excersise-03-genericRepository.d.ts.map