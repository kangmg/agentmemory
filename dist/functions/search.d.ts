import type { ISdk } from 'iii-sdk';
import { StateKV } from '../state/kv.js';
import { SearchIndex } from '../state/search-index.js';
import { VectorIndex } from '../state/vector-index.js';
import type { EmbeddingProvider } from '../types.js';
export declare function getSearchIndex(): SearchIndex;
export declare function setVectorIndex(idx: VectorIndex | null): void;
export declare function getVectorIndex(): VectorIndex | null;
export declare function setEmbeddingProvider(provider: EmbeddingProvider | null): void;
export declare function getEmbeddingProvider(): EmbeddingProvider | null;
export declare function vectorIndexRemove(id: string): void;
export declare function setIndexPersistence(p: {
    scheduleSave: () => void;
    save: () => Promise<void>;
} | null): void;
export declare function scheduleIndexSave(): void;
export declare function flushIndexSave(): Promise<void>;
export declare function clipEmbedInput(text: string): string;
export declare function vectorIndexAddGuarded(id: string, sessionId: string, text: string, context: {
    kind: "memory" | "observation" | "synthetic";
    logId: string;
}): Promise<boolean>;
export declare function vectorIndexAddBatchGuarded(items: Array<{
    id: string;
    sessionId: string;
    text: string;
    context: {
        kind: "memory" | "observation" | "synthetic";
        logId: string;
    };
}>): Promise<{
    ok: number;
    fail: number;
}>;
export declare function rebuildIndex(kv: StateKV): Promise<number>;
export declare function registerSearchFunction(sdk: ISdk, kv: StateKV): void;
//# sourceMappingURL=search.d.ts.map