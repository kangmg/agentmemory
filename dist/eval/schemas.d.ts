import { z } from "zod";
export declare const ObserveInputSchema: z.ZodObject<{
    hookType: z.ZodEnum<{
        session_start: "session_start";
        prompt_submit: "prompt_submit";
        pre_tool_use: "pre_tool_use";
        post_tool_use: "post_tool_use";
        post_tool_failure: "post_tool_failure";
        pre_compact: "pre_compact";
        subagent_start: "subagent_start";
        subagent_stop: "subagent_stop";
        notification: "notification";
        task_completed: "task_completed";
        stop: "stop";
        session_end: "session_end";
    }>;
    sessionId: z.ZodString;
    project: z.ZodString;
    cwd: z.ZodString;
    timestamp: z.ZodString;
    data: z.ZodUnknown;
}, z.core.$strip>;
export declare const CompressOutputSchema: z.ZodObject<{
    type: z.ZodEnum<{
        notification: "notification";
        error: "error";
        file_read: "file_read";
        file_write: "file_write";
        file_edit: "file_edit";
        command_run: "command_run";
        search: "search";
        web_fetch: "web_fetch";
        conversation: "conversation";
        decision: "decision";
        discovery: "discovery";
        subagent: "subagent";
        task: "task";
        other: "other";
    }>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    facts: z.ZodArray<z.ZodString>;
    narrative: z.ZodString;
    concepts: z.ZodArray<z.ZodString>;
    files: z.ZodArray<z.ZodString>;
    importance: z.ZodNumber;
}, z.core.$strip>;
export declare const SummaryOutputSchema: z.ZodObject<{
    title: z.ZodString;
    narrative: z.ZodString;
    keyDecisions: z.ZodArray<z.ZodString>;
    filesModified: z.ZodArray<z.ZodString>;
    concepts: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const SearchInputSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ContextInputSchema: z.ZodObject<{
    sessionId: z.ZodString;
    project: z.ZodString;
    budget: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const RememberInputSchema: z.ZodObject<{
    content: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<{
        pattern: "pattern";
        preference: "preference";
        architecture: "architecture";
        bug: "bug";
        workflow: "workflow";
        fact: "fact";
    }>>;
    concepts: z.ZodOptional<z.ZodArray<z.ZodString>>;
    files: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const SmartSearchInputSchema: z.ZodObject<{
    query: z.ZodOptional<z.ZodString>;
    expandIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const TimelineInputSchema: z.ZodObject<{
    anchor: z.ZodString;
    project: z.ZodOptional<z.ZodString>;
    before: z.ZodOptional<z.ZodNumber>;
    after: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ProfileInputSchema: z.ZodObject<{
    project: z.ZodString;
    refresh: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const RelateInputSchema: z.ZodObject<{
    sourceId: z.ZodString;
    targetId: z.ZodString;
    type: z.ZodEnum<{
        supersedes: "supersedes";
        extends: "extends";
        derives: "derives";
        contradicts: "contradicts";
        related: "related";
    }>;
}, z.core.$strip>;
export declare const EvolveInputSchema: z.ZodObject<{
    memoryId: z.ZodString;
    newContent: z.ZodString;
    newTitle: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ExportImportInputSchema: z.ZodObject<{
    exportData: z.ZodObject<{
        version: z.ZodUnion<readonly [z.ZodLiteral<"0.3.0">, z.ZodLiteral<"0.4.0">]>;
        exportedAt: z.ZodString;
        sessions: z.ZodArray<z.ZodUnknown>;
        observations: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnknown>>;
        memories: z.ZodArray<z.ZodUnknown>;
        summaries: z.ZodArray<z.ZodUnknown>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    }, z.core.$strip>;
    strategy: z.ZodOptional<z.ZodEnum<{
        merge: "merge";
        replace: "replace";
        skip: "skip";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map