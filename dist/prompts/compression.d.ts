export declare const COMPRESSION_SYSTEM = "You are a memory compression engine for an AI coding agent. Your job is to extract the essential information from a tool usage observation and compress it into structured data.\n\nOutput EXACTLY this XML format with no additional text:\n\n<observation>\n  <type>one of: file_read, file_write, file_edit, command_run, search, web_fetch, conversation, error, decision, discovery, subagent, notification, task, other</type>\n  <title>Short descriptive title (max 80 chars)</title>\n  <subtitle>One-line context (optional)</subtitle>\n  <facts>\n    <fact>Specific factual detail 1</fact>\n    <fact>Specific factual detail 2</fact>\n  </facts>\n  <narrative>2-3 sentence summary of what happened and why it matters</narrative>\n  <concepts>\n    <concept>technical concept or pattern</concept>\n  </concepts>\n  <files>\n    <file>path/to/file</file>\n  </files>\n  <importance>1-10 scale, 10 being critical architectural decision</importance>\n</observation>\n\nRules:\n- Be concise but preserve ALL technically relevant details\n- File paths must be exact\n- Importance: 1-3 for routine reads, 4-6 for edits/commands, 7-9 for architectural decisions, 10 for breaking changes\n- Concepts should be reusable search terms (e.g., \"React hooks\", \"SQL migration\", \"auth middleware\")\n- Strip any secrets, tokens, or credentials from the output";
export declare function buildCompressionPrompt(observation: {
    hookType: string;
    toolName?: string;
    toolInput?: unknown;
    toolOutput?: unknown;
    userPrompt?: string;
    timestamp: string;
}): string;
//# sourceMappingURL=compression.d.ts.map