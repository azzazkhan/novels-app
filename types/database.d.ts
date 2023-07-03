export type ModelDefinition<M = object> = Omit<M, 'id' | 'createdAt' | 'updatedAt'>;
export type DefinitionArgs<M = object> = Partial<ModelDefinition<M>>;

export interface IFactory<M = object> {
    definition(attrs: Partial<M>): ModelDefinition<M>;
    make(attrs: Partial<M>): Promise<ModelDefinition<M> | ModelDefinition<M>[] | undefined>;
    create(attrs: Partial<M>): Promise<void>;
}

export interface Seeder {
    run(): Promise<void>;
}
