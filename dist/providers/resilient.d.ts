import type { MemoryProvider, CircuitBreakerState } from "../types.js";
export declare class ResilientProvider implements MemoryProvider {
    private inner;
    private breaker;
    name: string;
    constructor(inner: MemoryProvider);
    private call;
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    get circuitState(): CircuitBreakerState;
}
//# sourceMappingURL=resilient.d.ts.map