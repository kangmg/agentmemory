import type { EmbeddingProvider } from "../../types.js";
export declare class VoyageEmbeddingProvider implements EmbeddingProvider {
    readonly name = "voyage";
    readonly dimensions = 1024;
    private apiKey;
    constructor(apiKey?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
}
//# sourceMappingURL=voyage.d.ts.map