
    export type RemoteKeys = 'remote_apis/auth' | 'remote_apis/contest';
    type PackageType<T> = T extends 'remote_apis/contest' ? typeof import('remote_apis/contest') :T extends 'remote_apis/auth' ? typeof import('remote_apis/auth') :any;