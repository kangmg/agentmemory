import type { HybridSearchResult } from "../types.js";
export declare function rerank(query: string, results: HybridSearchResult[], topK?: number): Promise<HybridSearchResult[]>;
export declare function isRerankerAvailable(): boolean;
//# sourceMappingURL=reranker.d.ts.map