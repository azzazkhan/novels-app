declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Application configurations
            readonly NEXT_PUBLIC_APP_NAME?: string;
            readonly NEXT_PUBLIC_APP_DESCRIPTION?: string;
            readonly APP_KEY: string;
        }
    }

    type ClassName = string | undefined | null | string[] | Record<string, unknown>;
}

export {};
