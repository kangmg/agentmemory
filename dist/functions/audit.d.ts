import type { AuditEntry } from "../types.js";
import type { StateKV } from "../state/kv.js";
export declare function recordAudit(kv: StateKV, operation: AuditEntry["operation"], functionId: string, targetIds: string[], details?: Record<string, unknown>, qualityScore?: number, userId?: string): Promise<AuditEntry>;
export declare function safeAudit(kv: StateKV, operation: AuditEntry["operation"], functionId: string, targetIds: string[], details?: Record<string, unknown>, qualityScore?: number, userId?: string): Promise<void>;
export declare function queryAudit(kv: StateKV, filter?: {
    operation?: AuditEntry["operation"];
    dateFrom?: string;
    dateTo?: string;
    limit?: number;
}): Promise<AuditEntry[]>;
//# sourceMappingURL=audit.d.ts.map