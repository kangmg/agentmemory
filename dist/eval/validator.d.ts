import type { z } from "zod";
import type { EvalResult } from "../types.js";
export declare function validateInput<T>(schema: z.ZodType<T>, data: unknown, functionId: string): {
    valid: true;
    data: T;
} | {
    valid: false;
    result: EvalResult;
};
export declare function validateOutput<T>(schema: z.ZodType<T>, data: unknown, functionId: string): {
    valid: true;
    data: T;
} | {
    valid: false;
    result: EvalResult;
};
//# sourceMappingURL=validator.d.ts.map