type Script = "han" | "kana" | "hangul" | "other";
export declare function hasCjk(text: string): boolean;
export declare function detectScript(text: string): Script;
export declare function segmentCjk(text: string): string[];
export declare function __resetCjkSegmenterStateForTests(): void;
export {};
//# sourceMappingURL=cjk-segmenter.d.ts.map