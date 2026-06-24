type Fields = Record<string, unknown> | undefined;
export declare const logger: {
    info(msg: string, fields?: Fields): void;
    warn(msg: string, fields?: Fields): void;
    error(msg: string, fields?: Fields): void;
};
export declare function setBootVerbose(enabled: boolean): void;
export declare function isBootVerbose(): boolean;
export declare function bootLog(msg: string): void;
export declare function bootWarn(msg: string): void;
export declare function getBootBuffer(): readonly string[];
export {};
//# sourceMappingURL=logger.d.ts.map