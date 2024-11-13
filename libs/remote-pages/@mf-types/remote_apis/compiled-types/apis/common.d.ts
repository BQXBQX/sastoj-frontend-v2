interface AuthToken {
    token: string;
}
export declare const login: (_url: string, { arg, }: {
    arg: {
        username: string;
        password: string;
    };
}) => Promise<AuthToken>;
export {};
