import type { MemoryProvider } from '../types.js';
export declare class AgentSDKProvider implements MemoryProvider {
    name: string;
    private sdkPromise;
    private loadSdk;
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    private query;
}
//# sourceMappingURL=agent-sdk.d.ts.map