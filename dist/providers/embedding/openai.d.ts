import type { EmbeddingProvider } from "../../types.js";
/**
 * OpenAI-compatible embedding provider.
 *
 * Shares transport (URL builder, auth header, Azure detection) with
 * the OpenAI LLM provider via `_openai-shared` (#371). Same env knobs
 * pick up automatically: when `OPENAI_BASE_URL` points at an Azure
 * resource (`.openai.azure.com` hostname) the embedding request uses
 * Azure's `/embeddings` path with the `api-version` query param and
 * `api-key` header instead of `Authorization: Bearer`.
 *
 * Required env vars:
 *   OPENAI_API_KEY               — API key (fallback for OPENAI_EMBEDDING_API_KEY)
 *
 * Optional:
 *   OPENAI_BASE_URL              — base URL without path (default: https://api.openai.com).
 *                                  Azure: https://<resource>.openai.azure.com/openai/deployments/<deployment>
 *   OPENAI_EMBEDDING_BASE_URL    — embedding-specific base URL override (defaults
 *                                  to OPENAI_BASE_URL). Lets operators run
 *                                  embeddings on a separate endpoint from chat —
 *                                  e.g. local Ollama / LM Studio / llama.cpp /
 *                                  vLLM at http://localhost:1234 for unlimited
 *                                  free embeddings, while keeping chat
 *                                  completions on a rate-limited but high-quality
 *                                  hosted provider. Azure detection runs on
 *                                  whichever URL ends up selected.
 *   OPENAI_EMBEDDING_API_KEY     — separate API key for the embedding endpoint
 *                                  (defaults to OPENAI_API_KEY). Useful when the
 *                                  embedding endpoint requires a different key
 *                                  or no key at all (set to e.g. "local" for
 *                                  endpoints that ignore Authorization).
 *   OPENAI_API_VERSION           — Azure api-version query param (default: 2024-08-01-preview)
 *   OPENAI_EMBEDDING_MODEL       — model name (default: text-embedding-3-small)
 *   OPENAI_EMBEDDING_DIMENSIONS  — override reported dimensions (required for
 *                                  custom / self-hosted models not in the
 *                                  MODEL_DIMENSIONS table above)
 */
export declare class OpenAIEmbeddingProvider implements EmbeddingProvider {
    readonly name = "openai";
    readonly dimensions: number;
    private apiKey;
    private baseUrl;
    private model;
    private isAzure;
    private azureApiVersion;
    constructor(apiKey?: string);
    embed(text: string): Promise<Float32Array>;
    embedBatch(texts: string[]): Promise<Float32Array[]>;
}
//# sourceMappingURL=openai.d.ts.map