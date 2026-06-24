import type { HealthSnapshot } from "../types.js";
interface ThresholdConfig {
    eventLoopLagWarnMs: number;
    eventLoopLagCriticalMs: number;
    cpuWarnPercent: number;
    cpuCriticalPercent: number;
    memoryWarnPercent: number;
    memoryCriticalPercent: number;
    memoryRssFloorBytes: number;
}
export declare function evaluateHealth(snapshot: HealthSnapshot, config?: Partial<ThresholdConfig>): {
    status: "healthy" | "degraded" | "critical";
    alerts: string[];
    notes: string[];
};
export {};
//# sourceMappingURL=thresholds.d.ts.map