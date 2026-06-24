import { type Server } from "node:http";
export declare function resolveViewerHost(): string;
export declare function isLoopbackHost(host: string): boolean;
export declare function buildAllowedHosts(origins: string[], listenPort: number, bindHost?: string): Set<string>;
export declare function isHostAllowed(headerHost: string | string[] | undefined, allowed: Set<string>): boolean;
export declare function requireInboundBearer(authHeader: string | string[] | undefined, secret: string): boolean;
export declare function getBoundViewerPort(): number | null;
export declare function getViewerSkipped(): boolean;
export declare class ViewerConfigError extends Error {
    constructor(message: string);
}
export declare function startViewerServer(port: number, _kv: unknown, _sdk: unknown, secret?: string, restPort?: number): Server;
//# sourceMappingURL=server.d.ts.map