import { type ISdk } from "iii-sdk";
import { StateKV } from "../state/kv.js";
export declare function getImageRefCount(kv: StateKV, filePath: string): Promise<number>;
export declare function incrementImageRef(kv: StateKV, filePath: string): Promise<void>;
export declare function decrementImageRef(kv: StateKV, sdk: ISdk, filePath: string): Promise<void>;
//# sourceMappingURL=image-refs.d.ts.map