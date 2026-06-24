import type { ISdk } from 'iii-sdk';
export declare class StateKV {
    private sdk;
    constructor(sdk: ISdk);
    get<T = unknown>(scope: string, key: string): Promise<T | null>;
    set<T = unknown>(scope: string, key: string, value: T): Promise<T>;
    update<T = unknown>(scope: string, key: string, ops: Array<{
        type: string;
        path: string;
        value?: unknown;
    }>): Promise<T>;
    delete(scope: string, key: string): Promise<void>;
    list<T = unknown>(scope: string): Promise<T[]>;
}
//# sourceMappingURL=kv.d.ts.map