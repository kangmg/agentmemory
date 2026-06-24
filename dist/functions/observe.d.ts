import { type ISdk } from "iii-sdk";
import { StateKV } from "../state/kv.js";
import { DedupMap } from "./dedup.js";
export declare function extractImage(d: unknown): string | undefined;
export declare function registerObserveFunction(sdk: ISdk, kv: StateKV, dedupMap?: DedupMap, maxObservationsPerSession?: number): void;
//# sourceMappingURL=observe.d.ts.map