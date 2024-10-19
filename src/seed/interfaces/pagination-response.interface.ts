export interface PaginationResponse<T> {
    count:    number;
    next:     string;
    previous: null;
    results:  T[];
}