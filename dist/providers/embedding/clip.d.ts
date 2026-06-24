import type { EmbeddingProvider } from "../../types.js";
export declare class ClipEmbeddingProvider implements EmbeddingProvider {
    readonly name = "clip";
    readonly dimensions = 512;
    private textExtractor;
    private imageExtractor;
    private transformers;
    private readonly modelId;
    constructor(modelId?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
    embedImage(src: string): Promise<Float32Array>;
    private getTransformers;
    private getTextExtractor;
    private getImageExtractor;
}
//# sourceMappingURL=clip.d.ts.map