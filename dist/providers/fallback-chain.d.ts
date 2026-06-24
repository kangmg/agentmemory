import type { MemoryProvider } from "../types.js";
export declare class FallbackChainProvider implements MemoryProvider {
    private providers;
    name: string;
    constructor(providers: MemoryProvider[]);
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    private tryAll;
}
//# sourceMappingURL=fallback-chain.d.ts.map