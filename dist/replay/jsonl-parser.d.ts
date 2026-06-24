import type { RawObservation } from "../types.js";
export interface ParsedTranscript {
    sessionId: string;
    project: string;
    cwd: string;
    startedAt: string;
    endedAt: string;
    observations: RawObservation[];
}
export declare function parseJsonlText(text: string, fallbackSessionId?: string): ParsedTranscript;
//# sourceMappingURL=jsonl-parser.d.ts.map