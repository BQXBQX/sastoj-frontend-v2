export interface Contest {
    description?: string;
    endTime?: string;
    extraTime?: number;
    id: number;
    language?: string;
    startTime?: string;
    state?: number;
    title?: string;
    type: number;
    [property: string]: unknown;
}
export declare const getContests: ({ size, current, }: {
    size: number;
    current: number;
}) => Promise<{
    contests: Contest[];
}>;
export declare const addContest: (_url: string, { arg }: {
    arg: {
        contest: Contest;
    };
}) => Promise<import("axios").AxiosResponse<any, any>>;
export declare const deleteContest: (_url: string, { arg }: {
    arg: {
        contestId: number;
    };
}) => Promise<import("axios").AxiosResponse<any, any>>;
