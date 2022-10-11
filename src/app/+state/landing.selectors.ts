import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOOKS_FEATURE_KEY, BookState } from './landing.state';

export const getBooksState =
  createFeatureSelector<BookState>(BOOKS_FEATURE_KEY);

export const getBooksLoaded = createSelector(
  getBooksState,
  (state: BookState) => state && state.loaded
);
export const getBooksError = createSelector(
  getBooksState,
  (state: BookState) => state.error
);

export const getAllBooks = createSelector(
  getBooksState,
  (state: BookState) => state.books
);
