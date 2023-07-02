import { PrismaClient } from '@prisma/client';

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
    type DefinitionModel<M = object> = Omit<M, 'id' | 'createdAt' | 'updatedAt'>;
    type Definition<M = object> = (
        attrs?: Partial<M>
    ) => Promise<DefinitionModel<M>> | DefinitionModel<M>;
    interface Seeder {
        (prisma: PrismaClient): Promise<void>;
        name: string;
    }
}

export {};
