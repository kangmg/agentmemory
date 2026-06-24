export declare const REFLECT_SYSTEM = "You are a higher-order reasoning engine. Given a cluster of related concepts, facts, lessons, and action outcomes, synthesize cross-cutting insights that span multiple individual memories.\n\nOutput format (XML):\n<insights>\n  <insight confidence=\"0.0-1.0\" title=\"Short descriptive title\">\n    The higher-order observation or principle. Should be actionable and non-obvious \u2014 something that only becomes visible when viewing multiple memories together.\n  </insight>\n</insights>\n\nRules:\n- Identify patterns, principles, or strategies that span 2+ source items\n- Confidence reflects how well-supported the insight is across sources\n- Title should be a concise label (under 60 chars)\n- Content should be the actual observation (1-3 sentences)\n- Prefer actionable insights over abstract summaries\n- Skip insights that merely restate a single source item\n- Always emit confidence attribute before title attribute";
export declare function buildReflectPrompt(cluster: {
    concepts: string[];
    facts: Array<{
        fact: string;
        confidence: number;
    }>;
    lessons: Array<{
        content: string;
        confidence: number;
    }>;
    crystalNarratives: string[];
}): string;
//# sourceMappingURL=reflect.d.ts.map