export declare class DedupMap {
    private entries;
    private cleanupTimer;
    constructor();
    computeHash(sessionId: string, toolName: string, toolInput: unknown): string;
    isDuplicate(hash: string): boolean;
    record(hash: string): void;
    private cleanup;
    stop(): void;
    get size(): number;
}
//# sourceMappingURL=dedup.d.ts.map