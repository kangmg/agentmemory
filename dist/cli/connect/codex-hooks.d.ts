/**
 * Workaround for openai/codex#16430 — Codex Desktop does not dispatch
 * plugin-local `hooks.json` even though both `CodexHooks` and `PluginHooks`
 * feature flags are stable + default-enabled in
 * `codex-rs/features/src/lib.rs`. Until upstream fixes plugin-scope
 * dispatch, the same hook commands can be mirrored into the global
 * `~/.codex/hooks.json`, which is loaded reliably.
 *
 * This module builds that mirror, with `${CLAUDE_PLUGIN_ROOT}` resolved to
 * the bundled `plugin/` directory so the user-scope file does not depend
 * on env-var expansion (Codex only injects `CLAUDE_PLUGIN_ROOT` for
 * plugin-scope hooks).
 *
 * Identification on re-install: every command we write contains the
 * resolved `<pluginRoot>/scripts/` prefix, so subsequent installs can
 * strip our entries and re-add cleanly without touching the user's other
 * hook entries.
 */
type HookHandler = {
    type: string;
    command: string;
};
type HookEntry = {
    matcher?: string;
    hooks: HookHandler[];
};
export type HookManifest = {
    hooks: Record<string, HookEntry[]>;
};
/**
 * Locate the bundled `plugin/` directory at runtime. Walks up from the
 * module's own location looking for `plugin/scripts/` + `plugin/hooks/`,
 * both shipped via the npm `files` field. Works for both `dist/cli.mjs`
 * (bundled) and `src/cli/connect/codex-hooks.ts` (dev) layouts.
 */
export declare function findPluginRoot(startUrl?: string): string;
/**
 * Build the merged hooks.json content.
 *
 *   1. Strip any entry from `existing` whose first hook command points
 *      under `<pluginRoot>/scripts/`. This lets us re-install idempotently
 *      without leaving stale references.
 *   2. Append fresh entries from the bundled Codex manifest with
 *      `${CLAUDE_PLUGIN_ROOT}` rewritten to the absolute plugin path.
 *      Matcher values from the bundled manifest are preserved so PreToolUse
 *      event routing keeps working.
 */
export declare function buildMergedHooks(existing: HookManifest | null, pluginRoot: string, manifestFile?: string): HookManifest;
export {};
//# sourceMappingURL=codex-hooks.d.ts.map