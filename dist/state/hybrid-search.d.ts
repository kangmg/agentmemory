import { SearchIndex } from "./search-index.js";
import { VectorIndex } from "./vector-index.js";
import type { EmbeddingProvider, HybridSearchResult, QueryExpansion } from "../types.js";
import type { StateKV } from "./kv.js";
export declare class HybridSearch {
    private bm25;
    private vector;
    private embeddingProvider;
    private kv;
    private bm25Weight;
    private vectorWeight;
    private graphWeight;
    private rerankEnabled;
    private graphRetrieval;
    constructor(bm25: SearchIndex, vector: VectorIndex | null, embeddingProvider: EmbeddingProvider | null, kv: StateKV, bm25Weight?: number, vectorWeight?: number, graphWeight?: number, rerankEnabled?: boolean);
    search(query: string, limit?: number): Promise<HybridSearchResult[]>;
    searchWithExpansion(query: string, limit: number, expansion: QueryExpansion): Promise<HybridSearchResult[]>;
    private tripleStreamSearch;
    private diversifyBySession;
    private enrichResults;
}
//# sourceMappingURL=hybrid-search.d.ts.map