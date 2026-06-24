export declare const AGENTMEMORY_MCP_BLOCK: {
    command: string;
    args: string[];
    env: {
        AGENTMEMORY_URL: string;
        AGENTMEMORY_SECRET: string;
        AGENTMEMORY_TOOLS: string;
    };
};
export declare const AGENTMEMORY_COPILOT_MCP_BLOCK: {
    env: {
        AGENTMEMORY_URL: string;
        AGENTMEMORY_SECRET: string;
        AGENTMEMORY_TOOLS: string;
    };
    tools: string[];
    command: string;
    args: string[];
    type: "local";
};
export declare function backupsDir(): string;
export declare function ensureBackupsDir(): string;
export declare function timestampSlug(): string;
export declare function backupFile(sourcePath: string, agent: string, ext?: string): string;
export declare function readJsonSafe<T = unknown>(path: string): T | null;
export declare function writeJsonAtomic(path: string, value: unknown): void;
export declare function logInstalled(label: string, target: string): void;
export declare function logAlreadyWired(label: string, target: string): void;
export declare function logBackup(target: string): void;
//# sourceMappingURL=util.d.ts.map