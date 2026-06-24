export interface Prefs {
    schemaVersion: 1;
    lastAgent: string | null;
    lastAgents: string[];
    lastProvider: string | null;
    skipSplash: boolean;
    skipNpxHint: boolean;
    skipGlobalInstall: boolean;
    skipConsoleInstall: boolean;
    firstRunAt: string | null;
    injectContextChosen: boolean;
}
export declare function prefsDir(): string;
export declare function prefsPath(): string;
export declare function readPrefs(): Prefs;
export declare function writePrefs(p: Partial<Prefs>): void;
export declare function resetPrefs(): void;
export declare function isFirstRun(): boolean;
//# sourceMappingURL=preferences.d.ts.map