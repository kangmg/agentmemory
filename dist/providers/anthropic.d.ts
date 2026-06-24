import type { MemoryProvider } from '../types.js';
export declare class AnthropicProvider implements MemoryProvider {
    name: string;
    private client;
    private model;
    private maxTokens;
    constructor(apiKey: string, model: string, maxTokens: number, baseURL?: string);
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    describeImage(imageData: string, mimeType: string, prompt: string): Promise<string>;
    private call;
}
//# sourceMappingURL=anthropic.d.ts.map