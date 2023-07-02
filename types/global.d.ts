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
    type ModelDefinition<M = object> = Omit<M, 'id' | 'createdAt' | 'updatedAt'>;
    type DefinitionArgs<M = object> = Partial<ModelDefinition<M>>;

    interface IFactory<M = object> {
        definition(attrs: Partial<M>): ModelDefinition<M>;
        make(attrs: Partial<M>): Promise<ModelDefinition<M> | ModelDefinition<M>[] | undefined>;
        create(attrs: Partial<M>): Promise<void>;
    }

    interface Seeder {
        name: string;

        run(): Promise<void>;
    }
}

export {};
