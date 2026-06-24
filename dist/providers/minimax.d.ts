import type { MemoryProvider } from '../types.js';
/**
 * MiniMax provider using raw fetch to call MiniMax's Anthropic-compatible API.
 *
 * The Anthropic SDK automatically injects `x-stainless-*` headers that MiniMax
 * rejects with 403. This provider bypasses the SDK and calls the API directly.
 *
 * Required env vars (loaded from ~/.agentmemory/.env or process.env):
 *   MINIMAX_API_KEY  — your MiniMax API key
 *   MINIMAX_MODEL    — model name (default: MiniMax-M2.7)
 *   MAX_TOKENS       — max output tokens (default: 800; MiniMax-M2.7 needs ≤800)
 *
 * Optional:
 *   MINIMAX_BASE_URL — base URL without path (default: https://api.minimax.io/anthropic)
 */
export declare class MinimaxProvider implements MemoryProvider {
    name: string;
    private apiKey;
    private model;
    private maxTokens;
    private baseUrl;
    constructor(apiKey: string, model: string, maxTokens: number);
    compress(systemPrompt: string, userPrompt: string): Promise<string>;
    summarize(systemPrompt: string, userPrompt: string): Promise<string>;
    private call;
}
//# sourceMappingURL=minimax.d.ts.map