interface OtelConfig {
    serviceName: string;
    serviceVersion: string;
    metricsExportIntervalMs: number;
}
export declare const OTEL_CONFIG: OtelConfig;
interface Counter {
    add: (n: number) => void;
}
interface Histogram {
    record: (v: number) => void;
}
interface Counters {
    observationsTotal: Counter;
    compressionSuccess: Counter;
    compressionFailure: Counter;
    searchTotal: Counter;
    dedupSkipped: Counter;
    evictionTotal: Counter;
    circuitBreakerOpen: Counter;
    embeddingSuccess: Counter;
    embeddingFailure: Counter;
    vectorSearchTotal: Counter;
    autoForgetTotal: Counter;
    profileGenerated: Counter;
    claudeBridgeSync: Counter;
    graphExtraction: Counter;
    consolidationRun: Counter;
    teamShare: Counter;
    auditLog: Counter;
    snapshotCreate: Counter;
    governanceDelete: Counter;
    smartSearchFollowupWithinWindow: Counter;
    readerFailureWithEvidence: Counter;
}
interface Histograms {
    compressionLatency: Histogram;
    searchLatency: Histogram;
    contextTokens: Histogram;
    qualityScore: Histogram;
    embeddingLatency: Histogram;
    vectorSearchLatency: Histogram;
}
type Meter = {
    createCounter: (name: string) => Counter;
    createHistogram: (name: string) => Histogram;
};
export declare function getCounters(): Counters;
export declare function getHistograms(): Histograms;
export declare function initMetrics(getMeter?: (name: string) => Meter): {
    counters: Counters;
    histograms: Histograms;
};
export {};
//# sourceMappingURL=setup.d.ts.map