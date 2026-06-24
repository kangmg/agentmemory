export declare function buildAgentOptions(): {
    value: string;
    label: string;
    hint?: string;
}[];
export declare function getInitialAgentValues(env?: Record<string, string | undefined>): string[];
export interface OnboardingResult {
    agents: string[];
    provider: string | null;
}
export declare function runOnboarding(): Promise<OnboardingResult>;
//# sourceMappingURL=onboarding.d.ts.map