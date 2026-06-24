import type { EmbeddingProvider } from "../../types.js";
import { GeminiEmbeddingProvider } from "./gemini.js";
import { OpenAIEmbeddingProvider } from "./openai.js";
import { VoyageEmbeddingProvider } from "./voyage.js";
import { CohereEmbeddingProvider } from "./cohere.js";
import { OpenRouterEmbeddingProvider } from "./openrouter.js";
import { LocalEmbeddingProvider } from "./local.js";
import { ClipEmbeddingProvider } from "./clip.js";
export { GeminiEmbeddingProvider, OpenAIEmbeddingProvider, VoyageEmbeddingProvider, CohereEmbeddingProvider, OpenRouterEmbeddingProvider, LocalEmbeddingProvider, ClipEmbeddingProvider, };
export declare function createImageEmbeddingProvider(): EmbeddingProvider | null;
export declare function createEmbeddingProvider(): EmbeddingProvider | null;
export declare function withDimensionGuard(provider: EmbeddingProvider): EmbeddingProvider;
//# sourceMappingURL=index.d.ts.map