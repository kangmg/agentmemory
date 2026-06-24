export type RemovePlanItem = {
    /** Stable id, used in tests and CLI output. */
    id: string;
    /** Human-readable description of the action. */
    description: string;
    /** Absolute path being acted on (or null for non-fs actions). */
    path: string | null;
    /** Whether this item is `ask-again` even with --force (e.g. memory data). */
    alwaysAsk: boolean;
    /** Whether the file actually exists / action is meaningful. Plan-time hint. */
    applicable: boolean;
    /** Bytes (for files) or -1 (unknown / dir). Pure metadata. */
    sizeBytes: number;
};
export type RemoveOptions = {
    /** Skip confirmations (still asks separately about always-ask items). */
    force: boolean;
    /** Keep ~/.agentmemory/* user data; only remove binaries/symlinks. */
    keepData: boolean;
};
export type RemoveContext = {
    /** $HOME (so tests can sandbox). */
    home: string;
    /** Pinned engine version we expect ~/.local/bin/iii to match. */
    pinnedVersion: string;
    /**
     * `iii --version` result for ~/.local/bin/iii, or null if it's missing /
     * unreadable / not executable. Passed in so the plan module stays pure.
     */
    localBinIiiVersion: string | null;
    /** Loaded connect manifest, or null if missing. */
    connectManifest: ConnectManifest | null;
};
/**
 * The `agentmemory connect` PR writes this manifest at
 * ~/.agentmemory/backups/connect-manifest.json. We tolerate it being absent
 * (older versions, fresh installs) by treating it as `{ installed: [] }`.
 */
export type ConnectManifest = {
    installed: Array<{
        /** Target path the connect command wrote (symlink or file). */
        target: string;
        /** Agent label, e.g. "claude-code", "cursor". */
        agent?: string;
        /** Whether this was a symlink (true) or copy (false). */
        symlink?: boolean;
    }>;
};
export declare function pidfilePath(home: string): string;
export declare function enginePath(home: string): string;
export declare function envPath(home: string): string;
export declare function preferencesPath(home: string): string;
export declare function backupsDir(home: string): string;
export declare function dataDir(home: string): string;
export declare function legacyLocalBinIii(home: string): string;
export declare function privateIiiBin(home: string): string;
export declare const localBinIii: typeof privateIiiBin;
/**
 * Build the destruction plan for `agentmemory remove`.
 *
 * Plan items are returned regardless of whether `applicable` is true — the
 * caller can decide whether to skip-and-log or hide entirely. This keeps
 * the structure stable for tests.
 */
export declare function buildRemovePlan(ctx: RemoveContext, options: RemoveOptions): RemovePlanItem[];
/** Format a plan for the user — one line per item. */
export declare function formatPlan(plan: RemovePlanItem[]): string;
//# sourceMappingURL=remove-plan.d.ts.map