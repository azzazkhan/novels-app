import type { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError) => {
    if (!error.response) return error.message;
    const { data, headers, statusText } = error.response;

    if (typeof data === 'string') return data;
    if (
        (headers['Content-Type'] || headers['content-type']) === 'application/json' &&
        typeof data === 'object'
    ) {
        const { message } = data as APIError;

        if (typeof message === 'string') return message;
    }

    return statusText;
};

export const isValidationError = (error: AxiosError) => {
    const { response } = error;
    if (!response || response.status !== 400) return false;

    const { headers } = response;
    if ((headers['Content-Type'] || headers['content-type']) !== 'application/json') return false;

    if (typeof response.data !== 'object') return false;

    const { errors } = response.data as APIError;
    if (typeof errors !== 'object') return false;

    return true;
};

export const getErrorFactory = <D extends string = string>(
    error: APIError<D>
): ((key: D) => string | null) => {
    const { errors } = error;

    if (typeof errors !== 'object') return () => null;

    return (key) => {
        if (!(key in errors)) return null;

        if (typeof errors[key] === 'string') return errors[key] as unknown as string;
        if (!Array.isArray(errors[key])) return null;
        if (errors[key].length > 0) return errors[key][0];

        return null;
    };
};
