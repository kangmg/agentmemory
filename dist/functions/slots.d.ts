import type { ISdk } from "iii-sdk";
import type { MemorySlot } from "../types.js";
import { StateKV } from "../state/kv.js";
export declare const DEFAULT_SLOTS: ReadonlyArray<Omit<MemorySlot, "createdAt" | "updatedAt">>;
export declare function isSlotsEnabled(): boolean;
export declare function isReflectEnabled(): boolean;
export declare function listPinnedSlots(kv: StateKV): Promise<MemorySlot[]>;
export declare function renderPinnedContext(slots: MemorySlot[]): string;
export declare function registerSlotsFunctions(sdk: ISdk, kv: StateKV): void;
//# sourceMappingURL=slots.d.ts.map