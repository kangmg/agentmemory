import { SearchIndex } from "./search-index.js";
import { VectorIndex } from "./vector-index.js";
import type { StateKV } from "./kv.js";
type IndexPersistenceOptions = {
    shardChars?: number;
    createGeneration?: () => string;
};
export declare class IndexPersistence {
    private kv;
    private bm25;
    private vector;
    private options;
    private timer;
    private lastFailureLogAt;
    constructor(kv: StateKV, bm25: SearchIndex, vector: VectorIndex | null, options?: IndexPersistenceOptions);
    scheduleSave(): void;
    save(): Promise<void>;
    load(): Promise<{
        bm25: SearchIndex | null;
        vector: VectorIndex | null;
    }>;
    stop(): void;
    private logFailure;
    private saveBm25Index;
    private saveVectorIndex;
    private saveShardedIndex;
    private auditIndexPersistence;
    private deleteKey;
    private deleteShards;
    private isManifestPublished;
    private loadBm25Data;
    private loadVectorData;
    private loadShardedData;
    private readIndexValue;
    private loadManifestData;
}
export {};
//# sourceMappingURL=index-persistence.d.ts.map