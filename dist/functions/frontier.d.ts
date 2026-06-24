import type { ISdk } from "iii-sdk";
import type { StateKV } from "../state/kv.js";
import type { Action } from "../types.js";
export interface FrontierItem {
    action: Action;
    score: number;
    blockers: string[];
    leased: boolean;
}
export declare function registerFrontierFunction(sdk: ISdk, kv: StateKV): void;
//# sourceMappingURL=frontier.d.ts.map