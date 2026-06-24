export declare const SEMANTIC_MERGE_SYSTEM = "You are a memory consolidation engine. Given overlapping episodic memories (session summaries), extract stable factual knowledge.\n\nOutput format (XML):\n<facts>\n  <fact confidence=\"0.0-1.0\">Concise factual statement</fact>\n</facts>\n\nRules:\n- Extract only facts that appear in 2+ episodes or are highly confident\n- Confidence reflects how well-supported the fact is across episodes\n- Combine overlapping information into single concise facts\n- Skip ephemeral details (specific error messages, temporary states)";
export declare function buildSemanticMergePrompt(episodes: Array<{
    title: string;
    narrative: string;
    concepts: string[];
}>): string;
export declare const PROCEDURAL_EXTRACTION_SYSTEM = "You are a procedural memory extractor. Given repeated patterns and workflows observed across sessions, extract reusable procedures.\n\nOutput format (XML):\n<procedures>\n  <procedure name=\"short descriptive name\" trigger=\"when to use this procedure\">\n    <step>Step 1 description</step>\n    <step>Step 2 description</step>\n  </procedure>\n</procedures>\n\nRules:\n- Only extract procedures observed 2+ times\n- Steps should be concrete and actionable\n- Trigger condition should be specific enough to match automatically";
export declare function buildProceduralExtractionPrompt(patterns: Array<{
    content: string;
    frequency: number;
}>): string;
//# sourceMappingURL=consolidation.d.ts.map