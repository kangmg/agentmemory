export declare const SUMMARY_SYSTEM = "You are a session summarizer for an AI coding agent's memory system. Given all compressed observations from a coding session, produce a concise session summary.\n\nOutput EXACTLY this XML format with no additional text:\n\n<summary>\n  <title>Short session title (max 100 chars)</title>\n  <narrative>3-5 sentence narrative of what was accomplished</narrative>\n  <decisions>\n    <decision>Key technical decision made</decision>\n  </decisions>\n  <files>\n    <file>path/to/modified/file</file>\n  </files>\n  <concepts>\n    <concept>key concept from session</concept>\n  </concepts>\n</summary>\n\nRules:\n- Focus on outcomes, not individual tool calls\n- Highlight decisions and their rationale\n- List all files that were created or modified\n- Concepts should be searchable terms for future context retrieval";
export declare function buildSummaryPrompt(observations: Array<{
    type: string;
    title: string;
    facts: string[];
    narrative: string;
    files: string[];
    concepts: string[];
}>): string;
export declare const REDUCE_SYSTEM = "You are merging multiple partial summaries of the SAME coding session into one final session summary. The partials are chronological chunks of one continuous session \u2014 not separate sessions.\n\nOutput EXACTLY this XML format with no additional text:\n\n<summary>\n  <title>Short session title (max 100 chars)</title>\n  <narrative>3-5 sentence narrative covering the whole session</narrative>\n  <decisions>\n    <decision>Key technical decision made</decision>\n  </decisions>\n  <files>\n    <file>path/to/modified/file</file>\n  </files>\n  <concepts>\n    <concept>key concept from session</concept>\n  </concepts>\n</summary>\n\nRules:\n- Synthesize a single narrative that reflects the whole arc, not a chunk-by-chunk recap\n- Preserve every distinct decision across chunks\n- Union (deduplicate) all files and concepts\n- Title should capture the session's overall outcome";
export declare function buildReducePrompt(partials: Array<{
    title: string;
    narrative: string;
    keyDecisions: string[];
    filesModified: string[];
    concepts: string[];
    obsRangeStart: number;
    obsRangeEnd: number;
}>): string;
//# sourceMappingURL=summary.d.ts.map