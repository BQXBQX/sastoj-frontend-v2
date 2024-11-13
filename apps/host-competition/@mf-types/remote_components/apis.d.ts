
    export type RemoteKeys = 'remote_components/Test';
    type PackageType<T> = T extends 'remote_components/Test' ? typeof import('remote_components/Test') :any;