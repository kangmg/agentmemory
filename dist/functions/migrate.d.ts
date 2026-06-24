import type { ISdk } from "iii-sdk";
import { StateKV } from "../state/kv.js";
export declare function inferMemoryProjects(kv: StateKV, dryRun?: boolean): Promise<{
    updated: number;
    skipped: number;
    ambiguous: number;
}>;
export declare function registerMigrateFunction(sdk: ISdk, kv: StateKV): void;
//# sourceMappingURL=migrate.d.ts.map