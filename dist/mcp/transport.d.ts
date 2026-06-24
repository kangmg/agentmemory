export interface JsonRpcRequest {
    jsonrpc: "2.0";
    id?: string | number;
    method: string;
    params?: Record<string, unknown>;
}
export interface JsonRpcResponse {
    jsonrpc: "2.0";
    id: string | number | null;
    result?: unknown;
    error?: {
        code: number;
        message: string;
        data?: unknown;
    };
}
export type RequestHandler = (method: string, params: Record<string, unknown>) => Promise<unknown>;
export interface StdioMessageParser {
    push: (chunk: Buffer | string) => void;
    isFramed: () => boolean;
}
export declare function processLine(line: string, handler: RequestHandler, writeOut: (response: JsonRpcResponse) => void, writeErr?: (msg: string) => void): Promise<void>;
export declare function formatResponse(response: JsonRpcResponse, framed: boolean): string | Buffer[];
export declare function createMessageParser(onMessage: (message: string) => void, writeErr?: (msg: string) => void): StdioMessageParser;
export declare function createStdioTransport(handler: RequestHandler): {
    start: () => void;
    stop: () => void;
};
//# sourceMappingURL=transport.d.ts.map