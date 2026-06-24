import type { CompressedObservation } from "../types.js";
export declare class SearchIndex {
    private entries;
    private invertedIndex;
    private docTermCounts;
    private totalDocLength;
    private sortedTerms;
    private readonly k1;
    private readonly b;
    add(obs: CompressedObservation): void;
    has(id: string): boolean;
    remove(id: string): void;
    search(query: string, limit?: number): Array<{
        obsId: string;
        sessionId: string;
        score: number;
    }>;
    get size(): number;
    clear(): void;
    restoreFrom(other: SearchIndex): void;
    serialize(): string;
    static deserialize(json: string): SearchIndex;
    private extractTerms;
    private tokenize;
    private getSortedTerms;
    private lowerBound;
}
//# sourceMappingURL=search-index.d.ts.map