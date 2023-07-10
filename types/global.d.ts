declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Application configurations
            readonly NEXT_PUBLIC_APP_NAME?: string;
            readonly NEXT_PUBLIC_APP_DESCRIPTION?: string;
            readonly BACKEND_API_URL?: string;
        }
    }

    type ClassName = string | undefined | null | string[] | Record<string, unknown>;

    type Nullable<T = unknown> = T | null;
    type HasUuid = { uuid: string };
    type Model<T = object> = { id: number; created_at: string; updated_at: string } & T;
    type DeletableModel<T = object> = { deleted_at: string } & Model<T>;
}

export {};
