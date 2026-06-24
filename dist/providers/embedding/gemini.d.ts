import type { EmbeddingProvider } from "../../types.js";
export declare class GeminiEmbeddingProvider implements EmbeddingProvider {
    readonly name = "gemini";
    readonly dimensions = 768;
    private apiKey;
    constructor(apiKey?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
}
//# sourceMappingURL=gemini.d.ts.map