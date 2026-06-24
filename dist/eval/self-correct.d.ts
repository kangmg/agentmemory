import type { MemoryProvider } from "../types.js";
export declare function compressWithRetry(provider: MemoryProvider, systemPrompt: string, userPrompt: string, validator: (response: string) => {
    valid: boolean;
    errors?: string[];
}, maxRetries?: number): Promise<{
    response: string;
    retried: boolean;
}>;
//# sourceMappingURL=self-correct.d.ts.map