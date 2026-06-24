import type { EmbeddingProvider } from "../../types.js";
export declare class LocalEmbeddingProvider implements EmbeddingProvider {
    readonly name = "local";
    readonly dimensions = 384;
    private extractor;
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
    private getExtractor;
}
//# sourceMappingURL=local.d.ts.map