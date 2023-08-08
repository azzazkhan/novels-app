declare type ValidatorFn<V = string> = (v: V) => Record<string, boolean | RegExp>;
declare type MessageFn<V = string> = (v: V) => string | null;
declare type WrapperFn = <V = string>(validator: ValidatorFn<V>) => MessageFn<V>;

export const getValidationMessage: WrapperFn = (validator) => {
    return (value) => {
        const messages: string[] = [];

        Object.entries(validator(value)).forEach(([message, condition]) => {
            if (condition instanceof RegExp)
                return (
                    (typeof value === 'string' && condition.test(value)) || messages.push(message)
                );

            return !condition && messages.push(message);
        });

        return messages.length > 0 ? messages[0] : null;
    };
};
