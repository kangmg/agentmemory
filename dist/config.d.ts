import type { AgentMemoryConfig, EmbeddingConfig, FallbackConfig, ClaudeBridgeConfig, TeamConfig } from "./types.js";
export declare function loadConfig(): AgentMemoryConfig;
export declare function getEnvVar(key: string): string | undefined;
export declare function isDropStaleIndexEnabled(): boolean;
export declare function detectLlmProviderKind(): "llm" | "noop";
export declare function loadEmbeddingConfig(): EmbeddingConfig;
export declare function detectEmbeddingProvider(env?: Record<string, string>): string | null;
export declare function loadClaudeBridgeConfig(): ClaudeBridgeConfig;
export declare function loadTeamConfig(): TeamConfig | null;
export declare function loadAgentScope(): {
    agentId: string;
    mode: "shared" | "isolated";
} | null;
export declare function getAgentId(): string | undefined;
export declare function isAgentScopeIsolated(): boolean;
export declare function loadSnapshotConfig(): {
    enabled: boolean;
    interval: number;
    dir: string;
};
export declare function isGraphExtractionEnabled(): boolean;
export declare function getGraphBatchSize(): number;
export declare function getFollowupWindowSeconds(): number;
export declare function isConsolidationEnabled(): boolean;
export declare function isAutoCompressEnabled(): boolean;
export declare function isContextInjectionEnabled(): boolean;
export declare function getConsolidationDecayDays(): number;
export declare function isStandaloneMcp(): boolean;
export declare function getStandalonePersistPath(): string;
export declare function loadFallbackConfig(): FallbackConfig;
//# sourceMappingURL=config.d.ts.map