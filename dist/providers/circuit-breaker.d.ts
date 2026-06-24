import type { CircuitBreakerState } from "../types.js";
interface CircuitBreakerOptions {
    failureThreshold?: number;
    failureWindowMs?: number;
    recoveryTimeoutMs?: number;
}
export declare class CircuitBreaker {
    private state;
    private failures;
    private lastFailureAt;
    private openedAt;
    private readonly failureThreshold;
    private readonly failureWindowMs;
    private readonly recoveryTimeoutMs;
    constructor(opts?: CircuitBreakerOptions);
    get isAllowed(): boolean;
    recordSuccess(): void;
    recordFailure(): void;
    getState(): CircuitBreakerState;
}
export {};
//# sourceMappingURL=circuit-breaker.d.ts.map