import type { StateKV } from "../state/kv.js";
export interface AccessLog {
    memoryId: string;
    count: number;
    lastAt: string;
    recent: number[];
}
export declare function emptyAccessLog(memoryId: string): AccessLog;
export declare function normalizeAccessLog(raw: unknown): AccessLog;
export declare function getAccessLog(kv: StateKV, memoryId: string): Promise<AccessLog>;
export declare function recordAccess(kv: StateKV, memoryId: string, timestampMs?: number): Promise<void>;
export declare function recordAccessBatch(kv: StateKV, memoryIds: string[], timestampMs?: number): Promise<void>;
export declare function deleteAccessLog(kv: StateKV, memoryId: string): Promise<void>;
//# sourceMappingURL=access-tracker.d.ts.map