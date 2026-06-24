import { type ISdk } from "iii-sdk";
import { StateKV } from "../state/kv.js";
import type { MetricsStore } from "../eval/metrics-store.js";
import type { ResilientProvider } from "../providers/resilient.js";
export declare function registerApiTriggers(sdk: ISdk, kv: StateKV, secret?: string, metricsStore?: MetricsStore, provider?: ResilientProvider | {
    circuitState?: unknown;
}): void;
//# sourceMappingURL=api.d.ts.map