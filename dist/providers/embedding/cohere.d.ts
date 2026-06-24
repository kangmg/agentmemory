import type { EmbeddingProvider } from "../../types.js";
export declare class CohereEmbeddingProvider implements EmbeddingProvider {
    readonly name = "cohere";
    readonly dimensions = 1024;
    private apiKey;
    constructor(apiKey?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
}
//# sourceMappingURL=cohere.d.ts.map