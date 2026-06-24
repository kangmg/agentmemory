import type { ISdk } from "iii-sdk";
import type { HealthSnapshot } from "../types.js";
import type { StateKV } from "../state/kv.js";
export declare function registerHealthMonitor(sdk: ISdk, kv: StateKV): {
    stop: () => void;
};
export declare function getLatestHealth(kv: StateKV): Promise<HealthSnapshot | null>;
//# sourceMappingURL=monitor.d.ts.map