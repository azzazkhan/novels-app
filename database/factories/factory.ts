/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
export class Factory implements IFactory {
    constructor(private readonly count = 1) {}

    /**
     * Generate definition for model.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async definition(attrs = {}) {
        return { ...attrs };
    }

    /**
     * Generate specified count of model factory definitions.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async make(attrs: any) {
        return this.count === 1
            ? this.definition(attrs)
            : Array.from({ length: this.count }).map(() => this.definition(attrs));
    }

    /**
     * Generates and saves the model factory definitions in database.
     * @param attrs  Attributes which will overwrite the default definition.
     * @returns
     */
    async create(attrs = {}) {
        this.make(attrs);
    }
}
