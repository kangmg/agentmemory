export declare const GRAPH_EXTRACTION_SYSTEM = "You are a knowledge graph extraction engine. Given a compressed observation from a coding session, extract entities and relationships.\n\nOutput format (XML):\n<entities>\n  <entity type=\"file|function|concept|error|decision|pattern|library|person\" name=\"exact name\">\n    <property key=\"key\">value</property>\n  </entity>\n</entities>\n<relationships>\n  <relationship type=\"uses|imports|modifies|causes|fixes|depends_on|related_to\" source=\"entity name\" target=\"entity name\" weight=\"0.1-1.0\"/>\n</relationships>\n\nRules:\n- Extract concrete entities only (real file paths, function names, library names)\n- Use the most specific type available\n- Weight relationships by how strong/direct the connection is\n- If no entities found, output empty tags";
export declare function buildGraphExtractionPrompt(observations: Array<{
    title: string;
    narrative: string;
    concepts: string[];
    files: string[];
    type: string;
}>): string;
//# sourceMappingURL=graph-extraction.d.ts.map