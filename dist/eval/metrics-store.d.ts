import type { FunctionMetrics } from "../types.js";
import type { StateKV } from "../state/kv.js";
export declare class MetricsStore {
    private kv;
    private cache;
    private qualityCallCounts;
    constructor(kv: StateKV);
    record(functionId: string, latencyMs: number, success: boolean, qualityScore?: number): Promise<void>;
    get(functionId: string): Promise<FunctionMetrics | null>;
    getAll(): Promise<FunctionMetrics[]>;
}
//# sourceMappingURL=metrics-store.d.ts.map