import type { MemoryProvider } from "../types.js";
export declare class OpenRouterProvider implements MemoryProvider {
    name: string;
    private apiKey;
    private model;
    private maxTokens;
    private baseUrl;
    constructor(apiKey: string, model: string, maxTokens: number, baseUrl: string);
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    private call;
}
//# sourceMappingURL=openrouter.d.ts.map