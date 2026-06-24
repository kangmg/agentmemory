import type { ConnectAdapter } from "./types.js";
export type JsonMcpAdapterConfig = {
    name: string;
    displayName: string;
    detectDir: string;
    configPath: string;
    docs?: string;
    protocolNote?: string;
    category?: "native" | "mcp";
    wrapperKey?: string;
    extraEntryFields?: Record<string, unknown>;
};
export declare function createJsonMcpAdapter(config: JsonMcpAdapterConfig): ConnectAdapter;
//# sourceMappingURL=json-mcp-adapter.d.ts.map