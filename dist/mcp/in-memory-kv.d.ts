export declare class InMemoryKV {
    private persistPath?;
    private store;
    constructor(persistPath?: string | undefined);
    get<T = unknown>(scope: string, key: string): Promise<T | null>;
    set<T = unknown>(scope: string, key: string, data: T): Promise<T>;
    delete(scope: string, key: string): Promise<void>;
    list<T = unknown>(scope: string): Promise<T[]>;
    persist(): void;
}
//# sourceMappingURL=in-memory-kv.d.ts.map