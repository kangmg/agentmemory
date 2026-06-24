export declare class VectorIndex {
    private vectors;
    add(obsId: string, sessionId: string, embedding: Float32Array): void;
    remove(obsId: string): void;
    search(query: Float32Array, limit?: number): Array<{
        obsId: string;
        sessionId: string;
        score: number;
    }>;
    get size(): number;
    validateDimensions(expected: number): {
        mismatches: Array<{
            obsId: string;
            dim: number;
        }>;
        seenDimensions: Set<number>;
    };
    clear(): void;
    restoreFrom(other: VectorIndex): void;
    serialize(): string;
    static deserialize(json: string): VectorIndex;
}
//# sourceMappingURL=vector-index.d.ts.map