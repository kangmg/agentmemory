export declare const DEFAULT_OPENAI_BASE_URL = "https://api.openai.com";
export declare const DEFAULT_AZURE_API_VERSION = "2024-08-01-preview";
export declare function detectAzure(baseUrl: string): boolean;
export declare function buildChatUrl(baseUrl: string, isAzure: boolean, azureApiVersion: string): string;
export declare function buildEmbeddingUrl(baseUrl: string, isAzure: boolean, azureApiVersion: string): string;
export declare function buildAuthHeaders(apiKey: string, isAzure: boolean): Record<string, string>;
export declare function normalizeBaseUrl(raw: string | undefined): string;
//# sourceMappingURL=_openai-shared.d.ts.map