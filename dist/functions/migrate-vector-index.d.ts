import type { EmbeddingProvider } from "../types.js";
import type { StateKV } from "../state/kv.js";
export interface MigrateVectorIndexResult {
    success: boolean;
    totalProcessed: number;
    failed: number;
    vectorSize: number;
    failedSessions: string[];
}
export declare function migrateVectorIndex(kv: StateKV, newProvider: EmbeddingProvider): Promise<MigrateVectorIndexResult>;
//# sourceMappingURL=migrate-vector-index.d.ts.map