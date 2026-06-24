#!/usr/bin/env node
import { InMemoryKV } from "./in-memory-kv.js";
export declare function handleToolCall(toolName: string, args: Record<string, unknown>, kvInstance?: InMemoryKV): Promise<{
    content: Array<{
        type: string;
        text: string;
    }>;
}>;
export declare function handleToolsList(): Promise<{
    tools: unknown[];
}>;
//# sourceMappingURL=standalone.d.ts.map