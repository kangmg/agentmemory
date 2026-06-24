import type { EmbeddingProvider } from "../../types.js";
export declare class OpenRouterEmbeddingProvider implements EmbeddingProvider {
    readonly name = "openrouter";
    readonly dimensions = 1536;
    private apiKey;
    private model;
    constructor(apiKey?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
}
//# sourceMappingURL=openrouter.d.ts.map