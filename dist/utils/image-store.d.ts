export declare const IMAGES_DIR: string;
export declare function getMaxBytes(): number;
export declare function isManagedImagePath(filePath: string): boolean;
export declare function saveImageToDisk(base64Data: string): Promise<{
    filePath: string;
    bytesWritten: number;
}>;
export declare function deleteImage(filePath: string | undefined): Promise<{
    deletedBytes: number;
}>;
/** Touch an image file to update its mtime (marking it as recently used for LRU eviction) */
export declare function touchImage(filePath: string): Promise<void>;
//# sourceMappingURL=image-store.d.ts.map