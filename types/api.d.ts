declare global {
    type HasUuid = { uuid: string };
    type Model<T = object> = { id: number; created_at: string; updated_at: string } & T;
    type DeletableModel<T = object> = { deleted_at: string } & Model<T>;

    type APIError<D extends string = string> = { message: string; errors?: Record<D, string[]> };

    type AsyncState = 'loading' | 'error' | 'success';

    interface PaginatedResponse<D = unknown> {
        current_page: number;
        last_page: number;

        data: D;

        from: number;
        to: number;
        total: number;
        per_page: number;

        first_page_url: string;
        last_page_url: string;
        next_page_url?: string;
        prev_page_url?: string;

        path: string;

        links: { url?: string; label: string; active: boolean }[];
    }

    interface CursorPaginatedResponse<D = unknown> {
        data: D;
        path: string;
        per_page: string;
        next_cursor: string;
        prev_cursor: string;
        next_page_url: string;
        prev_page_url: string;
    }
}

export {};
