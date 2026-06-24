export type DiagnosticStatus = {
    ok: boolean;
    /** Short status detail (one line). Shown alongside the check name. */
    detail?: string;
};
export type DiagnosticFixResult = {
    ok: boolean;
    message?: string;
};
export type DoctorContext = {
    /** Base URL for the running engine, e.g. http://localhost:3111 */
    baseUrl: string;
    /** Viewer URL, e.g. http://localhost:3113 */
    viewerUrl: string;
    /** Path to ~/.agentmemory/.env */
    envPath: string;
    /** Path to ~/.agentmemory/iii.pid */
    pidfilePath: string;
    /** Path to ~/.agentmemory/engine-state.json */
    enginePath: string;
    /** Pinned engine version (e.g. "0.11.2"). */
    pinnedVersion: string;
};
export type Diagnostic = {
    /** Stable id. Used in --json and tests. */
    id: string;
    /** One-line problem statement shown to the user. */
    message: string;
    /** One-line description of WHAT the fix will do. Shown before the prompt. */
    fixPreview: string;
    /** Longer explanation shown when the user picks [?] More info. */
    moreInfo: string;
    /** Run the check; return ok=true if everything's fine, ok=false otherwise. */
    check: (ctx: DoctorContext) => Promise<DiagnosticStatus>;
    /** Apply the fix. Returns ok=true on success. */
    fix: (ctx: DoctorContext) => Promise<DiagnosticFixResult>;
    /** True when there's nothing to auto-fix (we only suggest). */
    manualOnly?: boolean;
};
export declare const DIAGNOSTIC_IDS: readonly ["env-missing", "no-llm-provider-key", "engine-version-mismatch", "viewer-unreachable", "stale-pidfile", "env-placeholder-keys", "iii-on-path-not-local-bin"];
export type DiagnosticId = (typeof DIAGNOSTIC_IDS)[number];
export declare function parseEnvFile(content: string): Record<string, string>;
/** Returns the list of provider keys that look real (non-placeholder). */
export declare function realProviderKeys(env: Record<string, string>): string[];
/** Returns the list of provider key NAMES that exist but are placeholders. */
export declare function placeholderProviderKeys(env: Record<string, string>): string[];
/**
 * Build the canonical diagnostic catalog.
 *
 * The factory takes the side-effect helpers as injected functions so tests
 * can swap them with stubs. Production callers pass real implementations
 * from src/cli.ts.
 */
export type DoctorEffects = {
    /** Does ~/.agentmemory/.env exist? */
    envFileExists: () => boolean;
    /** Read ~/.agentmemory/.env and return parsed key=value pairs. */
    readEnvFile: () => Record<string, string>;
    /** Is the iii engine PID in the pidfile still alive? */
    pidfilePidIsAlive: () => boolean | null;
    /** Does the pidfile exist on disk? */
    pidfileExists: () => boolean;
    /** Resolve the iii binary on PATH; return null if not found. */
    findIiiBinary: () => string | null;
    /** Path to ~/.agentmemory/bin/iii (the private install location). */
    localBinIiiPath: () => string;
    /** Run `iii --version`; null if it fails. */
    iiiBinaryVersion: (binPath: string) => string | null;
    /** Probe the viewer URL; true if it returns OK within timeoutMs. */
    viewerReachable: (timeoutMs?: number) => Promise<boolean>;
    /** Run init logic (copies .env.example). */
    runInit: () => Promise<DiagnosticFixResult>;
    /** Open a file in $EDITOR (or fallback). Resolves when editor exits. */
    openEditor: (path: string) => Promise<DiagnosticFixResult>;
    /** Run the iii installer. */
    runIiiInstaller: () => Promise<DiagnosticFixResult>;
    /** Stop the running engine cleanly. */
    runStop: () => Promise<DiagnosticFixResult>;
    /** Start the engine (waits for /livez). */
    runStart: () => Promise<DiagnosticFixResult>;
    /** Clear pidfile + engine-state. */
    clearEnginePidAndState: () => void;
};
export declare function buildDiagnostics(effects: DoctorEffects): Diagnostic[];
export type DoctorRunMode = "interactive" | "all" | "dry-run";
/**
 * Run all diagnostics and return their initial status (no fixes applied).
 * Useful for tests and for `--dry-run` mode.
 */
export declare function runAllChecks(ctx: DoctorContext, diagnostics: Diagnostic[]): Promise<Array<{
    diagnostic: Diagnostic;
    status: DiagnosticStatus;
}>>;
/**
 * Dry-run output: each failing check's fix preview, prefixed by the diagnostic
 * message. Pure function so we can snapshot-test the format.
 */
export declare function dryRunPlan(ctx: DoctorContext, results: Array<{
    diagnostic: Diagnostic;
    status: DiagnosticStatus;
}>): string[];
//# sourceMappingURL=doctor-diagnostics.d.ts.map