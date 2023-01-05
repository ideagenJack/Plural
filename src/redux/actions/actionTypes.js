export const CREATE_BOOK = "CREATE_BOOK";
export const LOAD_BOOKS_SUCCESS = "LOAD_BOOKS_SUCCESS";
export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_BOOK_OPTIMISTIC = "DELETE_BOOK_OPTIMISTIC";
