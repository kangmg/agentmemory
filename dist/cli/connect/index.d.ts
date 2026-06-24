import type { ConnectAdapter, ConnectOptions, ConnectResult } from "./types.js";
export declare const ADAPTERS: readonly ConnectAdapter[];
export declare function resolveAdapter(name: string): ConnectAdapter | null;
export declare function knownAgents(): string[];
export declare function runAdapter(adapter: ConnectAdapter, opts: ConnectOptions): Promise<ConnectResult>;
export declare function runConnect(args: string[]): Promise<void>;
//# sourceMappingURL=index.d.ts.map