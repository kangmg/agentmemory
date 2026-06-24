export interface ProxyHandle {
    mode: "proxy";
    baseUrl: string;
    call: (path: string, init?: RequestInit) => Promise<unknown>;
}
export interface LocalHandle {
    mode: "local";
}
export type Handle = ProxyHandle | LocalHandle;
export declare function resolveEnvOrEmpty(name: string): string;
/**
 * Probes the agentmemory server's livez endpoint. Returns a Response-shaped
 * object whose `ok` flag drives the proxy/local-fallback decision.
 *
 * Tests can swap this via {@link setLivezProbe} to avoid the real 2s
 * AbortController race that destabilises mcp-standalone test runs (#449).
 * Production callers should leave it on the default.
 */
export type LivezProbe = (url: string, timeoutMs: number, headers: Record<string, string>) => Promise<{
    ok: boolean;
    status?: number;
    statusText?: string;
}>;
/**
 * Override the livez probe. Intended for tests — production code should rely
 * on the default fetch-based probe. Calling without an argument restores the
 * default. Pair with {@link resetHandleForTests} so the cached handle is
 * dropped before the next call.
 */
export declare function setLivezProbe(fn?: LivezProbe): void;
export declare function invalidateHandle(): void;
export declare function resolveHandle(): Promise<Handle>;
export declare function resetHandleForTests(): void;
//# sourceMappingURL=rest-proxy.d.ts.map