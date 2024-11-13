import { Contest } from '../apis/contest';
export declare const useGetContests: (size: number, current: number) => {
    data: {
        contests: Contest[];
    } | undefined;
    error: any;
    isLoading: boolean;
    mutate: import("swr").KeyedMutator<{
        contests: Contest[];
    }>;
};
export declare const useAddContest: () => (contest: Contest) => Promise<void>;
export declare const useDeleteContest: () => (contestId: number) => Promise<void>;
