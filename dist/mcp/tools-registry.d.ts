export type McpToolDef = {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: Record<string, {
            type: string;
            description: string;
        }>;
        required?: string[];
    };
};
export declare const CORE_TOOLS: McpToolDef[];
export declare const V040_TOOLS: McpToolDef[];
export declare const V050_TOOLS: McpToolDef[];
export declare const V051_TOOLS: McpToolDef[];
export declare const V061_TOOLS: McpToolDef[];
export declare const V070_TOOLS: McpToolDef[];
export declare const V073_TOOLS: McpToolDef[];
export declare const V010_SLOTS_TOOLS: McpToolDef[];
export declare const ESSENTIAL_TOOLS: Set<string>;
export declare function getAllTools(): McpToolDef[];
export declare function getVisibleTools(): McpToolDef[];
//# sourceMappingURL=tools-registry.d.ts.map