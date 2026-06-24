import type { GraphNode, GraphEdge } from "../types.js";
import type { StateKV } from "../state/kv.js";
export interface GraphRetrievalResult {
    obsId: string;
    sessionId: string;
    score: number;
    graphContext: string;
    pathLength: number;
}
export declare class GraphRetrieval {
    private kv;
    constructor(kv: StateKV);
    searchByEntities(entityNames: string[], maxDepth?: number, maxResults?: number): Promise<GraphRetrievalResult[]>;
    expandFromChunks(obsIds: string[], maxDepth?: number, maxResults?: number): Promise<GraphRetrievalResult[]>;
    temporalQuery(entityName: string, asOf?: string): Promise<{
        entity: GraphNode | null;
        currentState: GraphEdge[];
        history: GraphEdge[];
    }>;
    private getLatestEdges;
    private dijkstraTraversal;
}
//# sourceMappingURL=graph-retrieval.d.ts.map