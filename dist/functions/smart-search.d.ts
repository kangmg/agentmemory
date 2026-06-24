import type { ISdk } from "iii-sdk";
import type { HybridSearchResult } from "../types.js";
import { StateKV } from "../state/kv.js";
export interface RecentSearch {
    sessionId: string;
    query: string;
    resultIds: string[];
    at: number;
}
export declare function getFollowupStats(): {
    followupWithinWindow: number;
    agentInitiatedSearches: number;
    rate: number;
};
export declare function flushPendingFollowups(): Promise<void>;
export declare function resetFollowupStatsForTests(): void;
export declare function registerSmartSearchFunction(sdk: ISdk, kv: StateKV, searchFn: (query: string, limit: number) => Promise<HybridSearchResult[]>): void;
//# sourceMappingURL=smart-search.d.ts.map