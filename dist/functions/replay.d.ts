import type { ISdk } from "iii-sdk";
import type { StateKV } from "../state/kv.js";
export declare const MAX_FILES_DEFAULT = 200;
export declare const MAX_FILES_UPPER_BOUND = 1000;
export declare function isSensitive(path: string): boolean;
export declare function registerReplayFunctions(sdk: ISdk, kv: StateKV): void;
//# sourceMappingURL=replay.d.ts.map