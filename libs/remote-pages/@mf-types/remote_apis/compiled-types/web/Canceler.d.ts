import type { AxiosRequestConfig } from 'axios';
export declare class RequestCanceler {
    pendingRequest: Map<string, AbortController>;
    constructor();
    generateReqKey(config: AxiosRequestConfig): string;
    addPendingRequest(config: AxiosRequestConfig): void;
    removePendingRequest(config: AxiosRequestConfig): void;
}
