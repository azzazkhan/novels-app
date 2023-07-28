import type { ReactNode } from 'react';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Application configurations
            readonly NEXT_PUBLIC_APP_NAME?: string;
            readonly NEXT_PUBLIC_APP_DESCRIPTION?: string;
            readonly NEXT_PUBLIC_BACKEND_URL?: string;

            // Image optimization configurations
            readonly NEXT_PUBLIC_IMAGES_HOSTNAME?: string;
            readonly NEXT_PUBLIC_IMAGES_PATHNAME?: string;

            // Auth configurations
            readonly SYSTEM_API_TOKEN?: string;
            readonly NEXTAUTH_SECRET?: string;
            readonly NEXTAUTH_URL?: string;
        }
    }

    type ClassName = string | undefined | null | string[] | Record<string, unknown>;
    type Nullable<T = unknown> = T | null;
    type Params = Record<
        string,
        string | string[] | number | number[] | null | boolean | undefined
    >;
    type ServerComponent<P = object, E extends Params = object> = (
        props: P & { params: E }
    ) => Promise<ReactNode> | ReactNode;
}

export {};
