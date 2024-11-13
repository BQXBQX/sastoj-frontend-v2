import { AxiosError, InternalAxiosRequestConfig, type AxiosResponse } from 'axios';
export interface ResponseError {
    desc: string;
    [property: string]: any;
}
export declare const beforeRequest: (config: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any>;
export declare const responseSuccess: (response: AxiosResponse) => any;
export declare const responseFailed: (error: AxiosError) => Promise<never> | void;
