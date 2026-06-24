export declare function scoreCompression(obs: {
    type?: string;
    title?: string;
    facts?: string[];
    narrative?: string;
    concepts?: string[];
    importance?: number;
}): number;
export declare function scoreSummary(summary: {
    title?: string;
    narrative?: string;
    keyDecisions?: string[];
    filesModified?: string[];
    concepts?: string[];
}): number;
export declare function scoreContextRelevance(context: string, project: string): number;
//# sourceMappingURL=quality.d.ts.map