/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import { DefinitionArgs, ModelDefinition } from 'types/database';

export class Factory<M = null> {
    constructor(private readonly count = 1) {}

    /**
     * Generate definition for model.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async definition(attrs: DefinitionArgs<M> = {}) {
        return { ...attrs } as ModelDefinition<M>;
    }

    /**
     * Generate specified count of model factory definitions.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async make(attrs: DefinitionArgs<M> = {}): Promise<ModelDefinition<M> | ModelDefinition<M>[]> {
        if (this.count <= 0) return [];

        if (this.count === 1) return this.definition(attrs);

        return Promise.all(Array.from({ length: this.count }).map(() => this.definition(attrs)));
    }

    /**
     * Generates and saves the model factory definitions in database.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async create(attrs = {}) {
        this.make(attrs);
    }

    /**
     * Creates new instance of the model factory and calls the `create` method.
     * @param count  Number of models to generate
     * @param attrs  Attributes to override
     * @returns
     */
    static async exec<M = object>(count = 1, attrs: Partial<M> = {}) {
        return new this(count).create(attrs);
    }
}
