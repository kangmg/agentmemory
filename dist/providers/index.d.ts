import type { ProviderConfig, FallbackConfig } from "../types.js";
import { ResilientProvider } from "./resilient.js";
export { createEmbeddingProvider, createImageEmbeddingProvider } from "./embedding/index.js";
export declare function createProvider(config: ProviderConfig): ResilientProvider;
export declare function createFallbackProvider(config: ProviderConfig, fallbackConfig: FallbackConfig): ResilientProvider;
//# sourceMappingURL=index.d.ts.map