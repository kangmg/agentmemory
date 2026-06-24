import type { RawObservation } from "../types.js";
export type TimelineEventKind = "prompt" | "response" | "tool_call" | "tool_result" | "tool_error" | "hook" | "session_start" | "session_end";
export interface TimelineEvent {
    id: string;
    sessionId: string;
    ts: string;
    offsetMs: number;
    durationMs: number;
    kind: TimelineEventKind;
    label: string;
    body?: string;
    toolName?: string;
    toolInput?: unknown;
    toolOutput?: unknown;
}
export interface Timeline {
    sessionId: string;
    startedAt: string;
    endedAt: string;
    totalDurationMs: number;
    eventCount: number;
    events: TimelineEvent[];
}
export declare function projectTimeline(observations: RawObservation[]): Timeline;
//# sourceMappingURL=timeline.d.ts.map